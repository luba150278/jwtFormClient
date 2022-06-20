import axios, { AxiosError, AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';
import getNotify from '../functions/notify';
import setErrorFunction from '../functions/setErrors';
import getSuccessNotify from '../functions/sucessNotify';
import { headersConfig } from '../http/header-config';

import { IInputDefaultData } from '../models/IInputDefaultData';
import { IUser } from '../models/IUser';
import { AuthResponse } from '../models/response/AuthResponse';
import AuthService from '../services/AuthService';

export default class Store {
  user = {} as IUser;

  defaultData = { email: '', password: '' } as IInputDefaultData;

  isAuth = false;

  isLoading = false;

  error = { status: 200, message: '' };

  constructor({ email, password }: IInputDefaultData) {
    makeAutoObservable(this);
    this.setDefaultData({ email, password });
  }

  setAuth(bool: boolean): void {
    this.isAuth = bool;
  }

  setUser(user: IUser): void {
    this.user = user;
  }

  setLoading(bool: boolean): void {
    this.isLoading = bool;
  }

  setError(e: AxiosError): void {
    const { status, message } = setErrorFunction(e);
    this.error = { status, message };
  }

  setToken(response: AxiosResponse<AuthResponse>): void {
    localStorage.setItem('token', response.data.accessToken);
    this.setAuth(true);
    this.setUser(response.data.user);
  }

  setDefaultData(data: IInputDefaultData): void {
    this.defaultData = data;
  }

  async login(email: string, password: string): Promise<void> {
    try {
      this.setLoading(true);
      const response = await AuthService.login(email, password);
      this.setToken(response);
      this.setLoading(false);
    } catch (e) {
      this.setDefaultData({ email, password });
      this.setError(e as AxiosError);
    } finally {
      this.setLoading(false);
    }
  }

  async registration(email: string, password: string): Promise<void> {
    this.setLoading(true);
    try {
      const response = await AuthService.registration(email, password);
      this.setToken(response);
    } catch (e) {
      this.setError(e as AxiosError);
    } finally {
      this.setLoading(false);
    }
  }

  async logout(): Promise<void> {
    this.setLoading(true);
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      this.setError(e as AxiosError);
    } finally {
      this.setLoading(false);
    }
  }

  async delete(): Promise<void> {
    try {
      await AuthService.delete();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
      getSuccessNotify('Your account was deleted');
    } catch (e) {
      getNotify('Your account was not deleted. Try again.');
      this.setError(e as AxiosError);
    }
  }

  async checkAuth(): Promise<void> {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_API_URL}api/refresh`, {
        withCredentials: true,
        headers: headersConfig,
      });
      this.setToken(response);
    } catch (e) {
      this.setError(e as AxiosError);
    } finally {
      this.setLoading(false);
    }
  }
}

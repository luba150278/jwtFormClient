import React from 'react';
import { IInputDefaultData } from '../models/IInputDefaultData';
import Store from './store';

interface IStore {
  store: Store;
  returnDefautData: (data: IInputDefaultData) => void;
}
const Context = React.createContext<IStore>({
  store: new Store({ email: '', password: '' }),
  returnDefautData: (): void => {},
});
export const ContextProvider = Context.Provider;
export default Context;

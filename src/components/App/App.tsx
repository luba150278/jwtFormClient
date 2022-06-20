import React, { useEffect, useState } from 'react';
import { ContextProvider } from '../../store/Context';
import Store from '../../store/store';
import { IInputDefaultData } from '../../models/IInputDefaultData';
import Content from './Content/Content';
import { Footer } from '../Footer/Footer';

function App(): JSX.Element {
  const [inputDefaultData, setInputDefaultData] = useState<IInputDefaultData>({ email: '', password: '' });

  const returnDefautData = (value: IInputDefaultData): void => {
    setInputDefaultData(value);
  };

  const store = new Store({ email: inputDefaultData.email, password: inputDefaultData.password });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <>
      <ContextProvider value={{ store, returnDefautData }}>
        <Content />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Context from '../../../store/Context';
import Loader from '../../Loader/Loader';
import LoginForm from '../../LoginForm/LoginForm';
import Main from '../../Main/Main';

function Content(): JSX.Element {
  const { store } = useContext(Context);
  if (store.isLoading) {
    return <Loader />;
  }
  if (!store.isAuth) {
    return <LoginForm />;
  }

  return <Main />;
}
export default observer(Content);

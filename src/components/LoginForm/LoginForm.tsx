import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { WrapDiv, Sign } from './Login.styles';
import Header from './Header/Header';
import Buttons from './Buttons/Buttons';
import Inputs from './Inputs/Inputs';

function LoginForm(): JSX.Element {
  return (
    <Container>
      <WrapDiv>
        <Header />
        <Inputs />
        <Buttons />
        <Sign>by Luba M</Sign>
      </WrapDiv>
      <ToastContainer />
    </Container>
  );
}

export default observer(LoginForm);

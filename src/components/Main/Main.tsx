import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import { FaGithubAlt } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Context from '../../store/Context';
import Header from './Header/Header';
import { ContentDiv, H2, Li, Hr, Link } from './Main.styles';

function Main(): JSX.Element {
  const { store } = useContext(Context);

  return (
    <section>
      <Header />
      <Container>
        <ContentDiv>
          <H2>{store.user.isActivated ? null : 'Please, activate you account by email link'}</H2>
          <p>
            This web sourse create as test example of login/registration form for my portfolio. After registration, you
            can activate your account by email. The activation function allows separate content by accessibility.
          </p>
          <Hr />
          <h3>Stack description</h3>
          <p>In this project I used next stack:</p>
          <ul>
            <Li>
              <VscDebugBreakpointDataUnverified />
              React
            </Li>
            <Li>
              <VscDebugBreakpointDataUnverified />
              Typescript
            </Li>
            <Li>
              <VscDebugBreakpointDataUnverified />
              Mobx
            </Li>
            <Li>
              <VscDebugBreakpointDataUnverified />
              Bootstrap
            </Li>
            <Li>
              <VscDebugBreakpointDataUnverified />
              Styled-component
            </Li>
          </ul>
          <p>I wrote the backend server to test (node-express-js stack).</p>
          <p>
            You can see the program code here
            <Link href="https://github.com/luba150278/jwtFormClient" target="a_blank">
              <FaGithubAlt />
            </Link>
          </p>
          <Hr />
          <p>If you want delete your account, click on the button "Delete" on the page header for this.</p>
        </ContentDiv>
      </Container>
    </section>
  );
}
export default observer(Main);

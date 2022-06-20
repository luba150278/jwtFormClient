import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../../../store/Context';
import { ButtonsGroup } from './Buttons.styles';

function Buttons(): JSX.Element {
  const { store } = useContext(Context);
  const { email } = store.defaultData;
  const { password } = store.defaultData;
  return (
    <ButtonsGroup>
      <Button variant="primary" onClick={(): Promise<void> => store.login(email, password)}>
        Login
      </Button>
      <Button variant="danger" onClick={(): Promise<void> => store.registration(email, password)}>
        Registration
      </Button>
    </ButtonsGroup>
  );
}

export default observer(Buttons);

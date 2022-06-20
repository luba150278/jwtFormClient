import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Form, InputGroup, OverlayTrigger } from 'react-bootstrap';
import Context from '../../../store/Context';
import RenderToolTip from '../../RenderToolTip/RenderToolTip';
import { InputsGroup, ShowPass } from './Inputs.styles';
import Icon from '../../Icon/Icon';

function Inputs(): JSX.Element {
  const { store, returnDefautData } = useContext(Context);
  const [email, setEmail] = useState<string>(store.defaultData.email);
  const [password, setPassword] = useState<string>(store.defaultData.password);
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <InputsGroup>
      <InputGroup>
        <Form.Control
          placeholder="Email"
          onChange={(e): void => {
            setEmail(e.target.value);
            returnDefautData({ email: e.target.value, password });
          }}
          value={email}
        />
      </InputGroup>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={RenderToolTip(
          'Your password should have at least one number, one uppercase letter, one lowercase letter, and one special symbol.'
        )}
      >
        <InputGroup>
          <Form.Control
            type={isShowPass ? 'text' : 'password'}
            placeholder="Password"
            onChange={(e): void => {
              setPassword(e.target.value);
              returnDefautData({ email, password: e.target.value });
            }}
            value={password}
          />
        </InputGroup>
      </OverlayTrigger>
      <ShowPass onClick={(): void => setIsShowPass(!isShowPass)}>
        <Icon
          iconChild={isShowPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          styles={{ className: 'navIcon outIcon', size: '30', title: 'Show password' }}
          isToolTip={false}
          toolTipText=""
        />
      </ShowPass>
    </InputsGroup>
  );
}

export default observer(Inputs);

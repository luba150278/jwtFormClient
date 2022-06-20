import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AiOutlineDelete, AiOutlineLogout } from 'react-icons/ai';
import Context from '../../../store/Context';
import Icon from '../../Icon/Icon';
import { Nav, NavInner, Email } from './Header.styles';

function Header(): JSX.Element {
  const { store } = useContext(Context);
  return (
    <Nav>
      <NavInner>
        <Email>{store.isAuth ? `${store.user.email}` : 'NotAuth'}</Email>

        <div onClick={(): Promise<void> => store.logout()}>
          <Icon
            iconChild={<AiOutlineLogout />}
            styles={{ className: 'navIcon outIcon', size: '25', title: 'Log out' }}
            isToolTip
            toolTipText="Log out"
          />
        </div>
        <div onClick={(): Promise<void> => store.delete()}>
          <Icon
            iconChild={<AiOutlineDelete />}
            styles={{ className: 'navIcon deleteIcon', size: '25', title: 'Delete account' }}
            isToolTip
            toolTipText="Delete account"
          />
        </div>
      </NavInner>
    </Nav>
  );
}

export default observer(Header);

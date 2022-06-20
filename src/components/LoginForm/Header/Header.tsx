import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { colors } from '../../../functions/constant';
import Icon from '../../Icon/Icon';
import { HeaderGroup, Title } from './Header.styles';

function Header(): JSX.Element {
  return (
    <HeaderGroup>
      <Icon
        iconChild={<AiOutlineLogin />}
        styles={{ color: `${colors.mainContrast}`, className: 'logoIcon', size: '40', title: 'Form logo' }}
        isToolTip={false}
        toolTipText=""
      />
      <Title>Demo auth form</Title>
    </HeaderGroup>
  );
}

export default Header;

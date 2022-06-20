import styled from 'styled-components';
import { colors } from '../../../functions/constant';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  width: 100%;
  border-bottom: 4px solid ${colors.mainContrast};
  box-shadow: 0px 4px 8px 0px ${colors.boxShadow};
  background: ${colors.mainLight};
`;

export const NavInner = styled.div`
  display: grid;
  grid-template-columns: auto 25px 25px;
  grid-gap: 20px;
  align-items: center;
  justify-content: flex-end;
  width: 1170px;
  margin: 0 auto;
  max-width: 100%;
  @media screen and (max-width: 640px) {
    padding: 0px 10px;
  }
`;

export const Email = styled.p`
  display: flex;
  margin-bottom: 0;
`;

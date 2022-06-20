import styled from 'styled-components';
import { colors } from '../../functions/constant';

export const ContentDiv = styled.div`
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0px 5px 10px 2px ${colors.boxShadow};
  border-radius: 10px;
  @media screen and (max-width: 640px) {
    margin: 10px 0px 80px;
  }
`;

export const H2 = styled.h2`
  margin: 10px 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 2px !important;
  border: none;
  background: ${colors.mainContrast};
  opacity: 0.5;
`;
export const Link = styled.a`
  font-weight: bold;
  margin-left: 10px;
  > svg {
    width: 25px;
    height: 25px;
  }
`;

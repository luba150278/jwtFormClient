import styled from 'styled-components';
import { colors } from '../../functions/constant';

export const WrapDiv = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 40px auto;
  box-shadow: 0px 5px 10px 2px ${colors.boxShadow};
  padding: 20px;
  border-radius: 6px;
`;

export const Sign = styled.p`
  display: flex;
  margin-top: 20px;
  margin-bottom: 0;
  justify-content: center;
  color: ${colors.footerText};
`;

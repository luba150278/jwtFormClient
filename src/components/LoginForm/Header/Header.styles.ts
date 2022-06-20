import styled from 'styled-components';
import { colors } from '../../../functions/constant';

export const HeaderGroup = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-gap: 10px;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 0;
  color: ${colors.mainContrast};
`;

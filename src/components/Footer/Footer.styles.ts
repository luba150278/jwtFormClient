import styled from 'styled-components';
import { colors } from '../../functions/constant';

export const Section = styled.section`
  border-top: 4px solid ${colors.mainContrast};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${colors.mainLight};
`;

export const FooterWrapDiv = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    > a > svg {
      width: auto;
      height: 20px;
    }
  }
  & > div:first-child {
    > * {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    & > div:first-child {
      margin-bottom: 20px;
    }
  }
`;

import styled from 'styled-components';

export const InputsGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  position: relative;
`;

export const ShowPass = styled.div`
  position: absolute;
  bottom: 2px;
  right: 5px;
  z-index: 100;
`;

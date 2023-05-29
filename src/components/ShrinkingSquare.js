import styled, { css, keyframes } from 'styled-components';

const shrink = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0); opacity: 0; }
`;

const ShrinkingSquare = styled.div`
  width: 25px;
  height: 25px;
  background: #f00;
  animation: ${props => props.fold ? css`${shrink} 100ms linear forwards` : 'none'};
`;

export default ShrinkingSquare;

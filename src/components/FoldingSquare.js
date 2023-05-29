import styled, { css, keyframes } from 'styled-components';

const foldAnimations = {
  up: keyframes`
    from { transform: perspective(600px) rotateX(0);  }
    to { transform: perspective(600px) rotateX(-90deg);  }
  `,
  down: keyframes`
    from { transform: perspective(600px) rotateX(0);  }
    to { transform: perspective(600px) rotateX(90deg);  }
  `,
  left: keyframes`
    from { transform: perspective(600px) rotateY(0);  }
    to { transform: perspective(600px) rotateY(-90deg);  }
  `,
  right: keyframes`
    from { transform: perspective(600px) rotateY(0);}
    to { transform: perspective(600px) rotateY(90deg);
  `,
};

const FoldingSquare = styled.div`
  width: 10px;
  height: 10px;
  padding: 0;
  margin: 0;
  background: #f00;
  animation: ${props => props.fold ? css`${foldAnimations[props.direction]} 200ms linear forwards` : 'none'};
  transform-origin: ${props => props.direction === 'down' ? 'top' : props.direction === 'up' ? 'bottom' : props.direction === 'right' ? 'left' : 'right'};
`;

export default FoldingSquare;

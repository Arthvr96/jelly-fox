import styled from 'styled-components';

export const Button = styled.button`
position: relative;
  width: 3.3rem;
  height: 7rem;
  border: none;
  background: transparent;
  cursor: pointer;

  div{
    position: absolute;
    top: 50%;
    left: calc(50% + 4px);
    transform: translate(-50%,-50%);
    width: 0.9rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.bg.white};
  }

  div::before{
    content:'';
    display: block;
    position: absolute;
    width: 1.3rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.bg.white};
    top: -4px;
    left: -4px;
  }
  div::after{
    content:'';
    display: block;
    position: absolute;
    width: 1.3rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.bg.white};
    top: 4px;
    left: -4px;
  }

  svg{
    width: 3.3rem;
    height: 7rem;
  }
`;

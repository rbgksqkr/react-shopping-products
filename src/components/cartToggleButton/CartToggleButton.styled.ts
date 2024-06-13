import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonColorMapperProp {
  $isInCart: boolean;
  color: Theme['color'];
}

const buttonColorMapper = ({ $isInCart, color }: ButtonColorMapperProp) => {
  if ($isInCart) {
    return { backgroundColor: color.lightGray, color: color.black };
  }

  return { backgroundColor: color.black, color: color.white };
};

export const HandleCartItemButton = styled.button<{ $isInCart: boolean }>`
  ${(props) => props.theme.typography.buttonLabel}

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 4rem;
  height: 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  padding: 0 10px;

  ${({ $isInCart, theme }) => buttonColorMapper({ $isInCart, color: theme.color })}

  cursor: pointer;
`;

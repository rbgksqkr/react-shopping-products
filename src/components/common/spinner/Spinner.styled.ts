import styled from '@emotion/styled';

export const SpinnerContainer = styled.div<{ $size: number | undefined }>`
  margin: 0 auto;
  width: ${({ $size }) => ($size ? `${$size}px` : '90px')};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, #ffa516);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: l13 1s infinite linear;

  @keyframes l13 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

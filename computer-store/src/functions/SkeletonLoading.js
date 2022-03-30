import styled from 'styled-components';

export const SkeletonLoading = (translucent) => (
  <SkeletonLine translucent={translucent} />
);

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: ${(props) =>
    props.translucent
      ? `linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : `linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonLine = styled(SkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

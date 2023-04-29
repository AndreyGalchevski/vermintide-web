import styled from "styled-components";

const MasonryLayout = styled.div`
  margin: auto;
  max-width: 1080px;
  column-count: 1;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    column-count: 2;
  }
`;

export default MasonryLayout;

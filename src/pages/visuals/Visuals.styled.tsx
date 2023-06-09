import styled from "styled-components";

const VisualsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
  max-width: 330px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    max-width: 1200px;
  }
`;

export default VisualsContainer;

export const VideoRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

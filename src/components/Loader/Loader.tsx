import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <Container>
      <h1>Loading...</h1>
    </Container>
  );
};

export default Loader;

import { Logo, Social, Container, MainSection } from "../../components";

const Home = () => (
  <Container>
    <MainSection>
      <div style={{ marginBottom: 10 }}>
        <Logo />
      </div>
      <Social variant="dark" iconSize={35} />
    </MainSection>
  </Container>
);

export default Home;

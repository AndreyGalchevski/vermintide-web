import { Logo, Social, Container, MainSection } from "../../components";

const Home = () => (
  <Container>
    <span
      style={{ opacity: "0.01", userSelect: "none" }}
      className="this-fixes-np_lcp-error"
    >
      Test
    </span>
    <MainSection>
      <div style={{ marginBottom: 10 }}>
        <Logo />
      </div>
      <Social variant="dark" iconSize={35} />
    </MainSection>
  </Container>
);

export default Home;

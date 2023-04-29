import { Logo, Social, Container, MainSection, Head } from "../../components";

const Home = () => (
  <Container>
    <span style={{ opacity: "0.01", userSelect: "none" }}>Test</span>
    <Head
      path=""
      pageTitle="Vermintide - Official Website"
      pageDescription="Vermintide - Israeli Slamming Grindcore"
    />
    <MainSection>
      <div style={{ marginBottom: 10 }}>
        <Logo />
      </div>
      <Social variant="dark" iconSize={35} />
    </MainSection>
  </Container>
);

export default Home;

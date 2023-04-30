import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import "./Visuals.css";

import { Container, Head, MainSection } from "../../components";
import { visuals } from "../../data";
import VisualsContainer, { VideoRow } from "./Visuals.styled";

const Visuals = () => (
  <Container>
    <Head
      path="/visuals"
      pageTitle="Vermintide - Official Music Video Streams"
      pageDescription="Official music video streams by Vermintide"
    />
    <MainSection style={{ marginTop: "1em" }}>
      <VisualsContainer>
        {visuals.map(({ name, youtubeID }) => (
          <VideoRow key={youtubeID}>
            <LiteYouTubeEmbed
              id={youtubeID}
              title={name}
              poster="hqdefault"
              webp
            />
            <p>{name}</p>
          </VideoRow>
        ))}
      </VisualsContainer>
    </MainSection>
  </Container>
);

export default Visuals;

import { Container, MainSection } from "../../components";
import { visuals } from "../../data";
import VisualsContainer, {
  HugeVideoIFrame,
  VideoIFrame,
  VideoRow,
} from "./Visuals.styled";

const Visuals = () => (
  <Container>
    <MainSection>
      <VisualsContainer>
        <VideoRow>
          <HugeVideoIFrame
            title={visuals[0].name}
            src={visuals[0].url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>{visuals[0].name}</p>
        </VideoRow>
        {visuals.slice(1).map(({ name, url }) => (
          <VideoRow key={name}>
            <VideoIFrame
              title={name}
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p>{name}</p>
          </VideoRow>
        ))}
      </VisualsContainer>
    </MainSection>
  </Container>
);

export default Visuals;

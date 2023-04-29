import { useState } from "react";
import Select, { SingleValue, Options, StylesConfig } from "react-select";
import { useSearchParams } from "react-router-dom";

import {
  Card,
  Container,
  Head,
  MainSection,
  MasonryBrick,
  MasonryLayout,
} from "../../components";
import { albums } from "../../data";
import { AlbumName } from "../../data/albums";
import { theme } from "../../theme";
import { Content } from "./Words.styled";

export interface AlbumOption {
  value: AlbumName;
  label: AlbumName;
}

const options: Options<AlbumOption> = [
  { value: "Ashamed Of My Species", label: "Ashamed Of My Species" },
  { value: "Meaningless Convulsions", label: "Meaningless Convulsions" },
];

const selectStyles: StylesConfig<AlbumOption> = {
  control: (base) => ({
    ...base,
    ":hover": { borderColor: theme.accent },
    ":focus": { borderColor: theme.accent },
    ":focus-visible": { borderColor: theme.accent },
    ":focus-within": {
      borderColor: theme.accent,
      boxShadow: `0 0 0 1px ${theme.accent}`,
    },
  }),
  option: (base) => ({
    ...base,
    backgroundColor: theme.accent,
  }),
};

const Words = () => {
  const [params] = useSearchParams();

  const [selectedAlbum, setSelectedAlbum] = useState<SingleValue<AlbumOption>>(
    options.find((it) => it.value === params.get("album")) || options[0]
  );

  const handleAlbumChange = (option: AlbumOption | null) => {
    setSelectedAlbum(option);
  };

  return (
    <Container>
      <Head
        path="/words"
        pageTitle="Vermintide - Official Lyrics"
        pageDescription="Official lyrics by Vermintide"
      />
      <MainSection>
        <div style={{ margin: "30px 15px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Select<AlbumOption>
              value={selectedAlbum}
              options={options}
              onChange={handleAlbumChange}
              styles={selectStyles}
              instanceId="lyrics-select"
            />
          </div>
          <MasonryLayout>
            {albums
              .find((it) => it.name === selectedAlbum?.value)
              ?.lyrics.map(({ title, content }) => (
                <MasonryBrick key={title}>
                  <Card>
                    <h2>{title}</h2>
                    <Content>{content}</Content>
                  </Card>
                </MasonryBrick>
              ))}
          </MasonryLayout>
        </div>
      </MainSection>
    </Container>
  );
};

export default Words;

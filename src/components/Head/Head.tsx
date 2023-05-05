import { Helmet } from "react-helmet";
import type { MusicGroup, WithContext } from "schema-dts";

const structuredData: WithContext<MusicGroup> = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": "https://musicbrainz.org/artist/455707a4-a273-4b12-a26f-fcd41abef63a",
  name: "Vermintide",
  image:
    "https://res.cloudinary.com/dqvimfd8b/image/upload/v1682075200/vermintide/og_image.png",
  url: "https://vermintide.band",
  genre: ["Death Metal", "Grindcore"],
  sameAs: [
    "https://www.facebook.com/vermintide.band",
    "https://www.instagram.com/vermintide.band",
    "https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw",
    "https://soundcloud.com/vermintide_band",
    "https://open.spotify.com/artist/1qZhVB4v4QVJweTVC3c2uB",
    "https://vermintide.bandcamp.com/",
    "https://music.apple.com/il/artist/vermintide/1564671614",
  ],
  album: [
    {
      "@type": "MusicAlbum",
      name: "Meaningless Convulsions",
      "@id":
        "https://musicbrainz.org/release-group/700a41d7-150b-48e2-a6fc-75a6df92f48d",
      datePublished: "2021-05-21T00:00:00.000Z",
    },
    {
      "@type": "MusicAlbum",
      name: "Ashamed Of My Species",
      "@id":
        "https://musicbrainz.org/release-group/a821b9fd-e769-4cdf-a3e4-7536d30d5d82",
      datePublished: "2023-03-03T00:00:00.000Z",
    },
  ],
  member: [
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Andrey Galchevski",
      },
      roleName: "lead vocals",
    },
    {
      "@type": "OrganizationRole",
      member: {
        "@type": "Person",
        name: "Yaniv Alkalay",
      },
      roleName: "guitar",
    },
  ],
};

interface Props {
  path: string;
  pageTitle: string;
  pageDescription: string;
}

const Head = ({ path, pageTitle, pageDescription }: Props) => (
  <Helmet>
    <title>{pageTitle}</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={`https://vermintide.band${path}`} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={pageDescription} />

    <meta name="og:url" content={`https://vermintide.band${path}`} />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="Vermintide" />
    <meta name="og:title" content={pageTitle} />
    <meta name="og:description" content={pageDescription} />
    <meta
      name="og:image"
      content="https://res.cloudinary.com/dqvimfd8b/image/upload/v1682075200/vermintide/og_image.png"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/dqvimfd8b/image/upload/v1682075200/vermintide/og_image.png"
    />
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>
);

export default Head;

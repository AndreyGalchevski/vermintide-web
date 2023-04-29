import { Link } from "react-router-dom";

import {
  Container,
  MainSection,
  Head,
  MasonryLayout,
  MasonryBrick,
} from "../../components";
import { events } from "../../data";
import { EventCard, EventImage } from "./Events.styled";

const formatEventDate = (date: Date) =>
  `${date.toDateString()} • ${date
    .toTimeString()
    .split(" ")[0]
    .split(":")
    .slice(0, 2)
    .join(":")}`;

const Events = () => (
  <Container>
    <Head
      path="/events"
      pageTitle="Vermintide - Official Tour Dates"
      pageDescription="Official past and future events and gigs by Vermintide"
    />
    <MainSection style={{ paddingTop: "7em" }}>
      <MasonryLayout>
        {events.map(({ name, image, date, city, country, venue, fbEvent }) => (
          <MasonryBrick key={name}>
            <EventCard>
              <EventImage src={image} />
              <h2>{name}</h2>
              <time>{formatEventDate(date)}</time>
              <p>
                {city}, {country}
              </p>
              <p>{venue}</p>
              {fbEvent && (
                <Link to={fbEvent} target="_blank">
                  <b>Facebook Event</b>
                </Link>
              )}
            </EventCard>
          </MasonryBrick>
        ))}
      </MasonryLayout>
    </MainSection>
  </Container>
);

export default Events;

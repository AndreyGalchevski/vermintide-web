import { Link } from "react-router-dom";

import { Container, MainSection } from "../../components";
import { events } from "../../data";
import EventsContainer, { EventCard, EventImage } from "./Events.styled";

const formatEventDate = (date: Date) =>
  `${date.toDateString()} • ${date
    .toTimeString()
    .split(" ")[0]
    .split(":")
    .slice(0, 2)
    .join(":")}`;

const Events = () => (
  <Container>
    <MainSection>
      <EventsContainer>
        {events.map(({ name, image, date, city, country, venue, fbEvent }) => (
          <EventCard key={name}>
            <EventImage src={image} />
            <div style={{ padding: "16px 16px" }}>
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
            </div>
          </EventCard>
        ))}
      </EventsContainer>
    </MainSection>
  </Container>
);

export default Events;

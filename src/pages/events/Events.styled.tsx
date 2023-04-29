import styled, { CSSProperties, VermintideTheme } from "styled-components";

import { Card } from "../../components";

export const EventCard = styled(Card)`
  padding: 0px 0px 16px 0px;
`;

export const EventImage = styled.img(
  ({ theme }: { theme: VermintideTheme }) => ({
    display: "block" as CSSProperties["display"],
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
    width: "100%",
  })
);

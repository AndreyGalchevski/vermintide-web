import styled, { CSSProperties, VermintideTheme } from "styled-components";

const Card = styled.div(({ theme }: { theme: VermintideTheme }) => ({
  textAlign: "center" as CSSProperties["textAlign"],
  color: theme.secondary,
  backgroundColor: theme.primary,
  padding: "16px",
  margin: "8px",
  borderRadius: theme.borderRadius,
  position: "relative" as CSSProperties["position"],
  width: "100%",
}));

export default Card;

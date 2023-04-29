import styled, { CSSProperties, VermintideTheme } from "styled-components";

export const WordCard = styled.div(({ theme }: { theme: VermintideTheme }) => ({
  textAlign: "center" as CSSProperties["textAlign"],
  color: theme.secondary,
  backgroundColor: theme.primary,
  padding: "16px",
  margin: "8px",
  borderRadius: theme.borderRadius,
}));

export const Content = styled.pre`
  margin: 0;
  font-family: "Helvetica", sans-serif;
`;

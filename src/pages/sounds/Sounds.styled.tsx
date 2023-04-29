import { Link } from "react-router-dom";
import styled, { VermintideTheme } from "styled-components";

const SoundsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px 15px;
`;

export default SoundsContainer;

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

export const AlbumRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  }
`;

export const AlbumImage = styled.img`
  width: 330px;
  height: 330px;
  margin-bottom: 10px;

  border-radius: ${({ theme }: { theme: VermintideTheme }) =>
    theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 467px;
    height: 467px;
    margin-right: 10px;
  }
`;

export const AlbumIFrame = styled.iframe`
  width: 330px;
  height: 530px;
  margin-bottom: 10px;

  border-radius: ${({ theme }: { theme: VermintideTheme }) =>
    theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 467px;
    height: 467px;
  }
`;

export const PurchaseButton = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  padding: 16px 26px;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const WordsButton = styled(Link)`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 16px 26px;
  box-shadow: ${({ theme }) => `inset 0px 0px 0px 1px ${theme.primary}`};
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

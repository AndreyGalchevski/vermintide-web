import styled from 'styled-components';

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
  justify-content: center;
`;

export default EventsContainer;

export const EventImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px 10px 0px 0px;
`;

export const EventCard = styled.div`
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  max-width: 500px;
  flex: 1 0 calc(50% - 10px);
  flex-direction: column;
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 100%;
  }
`;

import { Dispatch, SetStateAction } from 'react';

import Navbar from '../Navbar';
import StyledBurger, { Line } from './Burger.styled';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <>
      <Navbar />
      <StyledBurger open={open} onClick={() => setOpen(!open)} aria-label="Side menu button">
        <Line open={open} aria-hidden="true" />
        <Line open={open} aria-hidden="true" />
        <Line open={open} aria-hidden="true" />
      </StyledBurger>
    </>
  );
};

export default Burger;

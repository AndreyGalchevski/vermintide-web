import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import useOnClickOutside from "./hooks/useOnClickOutside";
import { Burger, Menu } from "./components";

const Root = () => {
  const [open, setOpen] = useState(false);
  const burgerMenuRef = useRef(null);

  useOnClickOutside(burgerMenuRef, () => setOpen(false));

  return (
    <>
      <div ref={burgerMenuRef} style={{ display: "flex" }}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Outlet />
    </>
  );
};

export default Root;

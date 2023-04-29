import { PropsWithChildren, FC, Suspense } from "react";
import Loader from "../Loader";

const Suspenseful: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default Suspenseful;

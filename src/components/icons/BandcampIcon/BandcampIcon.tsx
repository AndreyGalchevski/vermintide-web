import { FunctionComponent, SVGProps } from 'react';

const BandcampIcon: FunctionComponent<SVGProps<SVGPathElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      width={35}
      height={35}
      {...props}
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm48.2 326.1h-181L207.9 178h181z"
    ></path>
  </svg>
);

export default BandcampIcon;

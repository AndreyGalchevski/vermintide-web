import "styled-components";

declare module "styled-components" {
  export interface VermintideTheme {
    primary: string;
    secondary: string;
    accent: string;
    mobile: string;
    small: string;
    borderRadius: string;
  }
}

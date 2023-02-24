import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "myfont";
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/DungGeunMo.ttf");
  }
`;

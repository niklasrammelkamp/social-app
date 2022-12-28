import { createGlobalStyle } from "styled-components";
import poppinsRegularWOFF from "./fonts/poppins-v20-latin-regular.woff";
import poppinsRegularWOFF2 from "./fonts/poppins-v20-latin-regular.woff2";

import poppinsLightWOFF from "./fonts/poppins-v20-latin-200.woff";
import poppinsLightWOFF2 from "./fonts/poppins-v20-latin-200.woff2";

import poppinsBoldWOFF from "./fonts/poppins-v20-latin-700.woff";
import poppinsBoldWOFF2 from "./fonts/poppins-v20-latin-700.woff2";

const FontStyles = createGlobalStyle`

/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url(${poppinsRegularWOFF}),
       url(${poppinsRegularWOFF2}); 
}

/* poppins-light - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: url(${poppinsLightWOFF}),
       url(${poppinsLightWOFF2}); 
}

/* poppins-bold - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url(${poppinsBoldWOFF}),
       url(${poppinsBoldWOFF2}); 
}
`;

export default FontStyles;

import { createGlobalStyle } from "styled-components";

import zapfino from "./Zapfino.woff";
import greatVibes from "./GreatVibes.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Zapfino';
        src: local('Zapfino'), local('Zapfino'),
        url(${zapfino}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Great Vibes';
        src: local('GreatVibes'), local('GreatVibes'),
        url(${greatVibes}) format('truetype');
    }
`;

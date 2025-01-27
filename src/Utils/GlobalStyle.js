import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    :root {
        --white: #ffffff;
        --black: #000000;
        --green-70: #cbea7b;
        --green-75: #d3ee91;
        --green-80: #dcf1a7;
        --green-85: #e5f5bd;
        --gren-90: #eef8d3;
        --gren-95: #f6fbe9;
        --gren-97: #fafdf2;
        --gren-99: #fdfefb;
        --dark-green-15: #1a3129;
        --dark-green-20: #234338;
        --dark-green-25: #2c5446;
        --dark-green-30: #346454;
        --dark-green-40: #468671;
        --dark-green-60: #79b9a4;
        --dark-green-80: #bcdcd1;
        --dark-green-90: #ddede8;
        --grey-10: #191919;
        --grey-15: #262626;
        --grey-20: #333333;
        --grey-30: #4c4c4d;
        --grey-35: #59595a;
        --grey-40: #656567;
        --grey-60: #98989a;
        --grey-90: #e6e6e6;
        --grey-95: #f2f2f2;
        --grey-97: #f7f7f7;
        --grey-99: #fcfcfc;
    }

    html {
        font-family: "Urbanist", sans-serif;
        font-size: 14px;
        line-height: 150%;
        font-weight: 500;
    }

    body {
        color: var(--grey-20);
        background-color: var(--gren-97);
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    @media screen and (min-width: 1440px) {
        html {
            font-size: 16px;
        }
    }

    @media screen and (min-width: 1920px) {
        html {
            font-size: 18px;
        }
    }
`
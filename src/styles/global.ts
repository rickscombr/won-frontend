import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Raleway Light'), local('Raleway-Light'),
           url('/fonts/raleway-v18-latin-300.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Raleway Regular'), local('Raleway-Regular'),
           url('/fonts/raleway-v18-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
           url('/fonts/raleway-v18-latin-600.woff2') format('woff2');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
    }

    ${({ theme }) => css`
        html {
            font-size: 62.5%;
        }
        html,
        body,
        #__next,
        #__next > div {
            height: 100%;
        }

        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
        }
    `}

`

export default GlobalStyles

import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  body {
    margin: 0;
    font-family:'Cormorant Garamond', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:${Theme.colors.text};
    background-color: ${Theme.colors.bgc};
    overflow-x: hidden;
  }
  
  a{
    text-decoration: none;
    color:${Theme.colors.text};
  }
  
  ul{
    list-style: none;
  }
  
  button{
    background-color: unset;
    border: none;
  }
`
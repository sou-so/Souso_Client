import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #root {
  font-size: 14px;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  color: #343434;
  background: #f1f1f1;
  letter-spacing: -0.3px;
  height: 100%;
}
#root > .container{
  width: 100%;
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
  position: relative;
  overflow-y: scroll;
}
h1,
h2,
h3 {
  font-size: 100%;
  font: inherit;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  outline: none;
  color: inherit;
}
a:hover,
a:active {
  text-decoration: none;
}
button {
  background-color: transparent;
  line-height: inherit;
  border: none;
  cursor: pointer;
}
input,
label,
select,
button,
textarea {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  background: none;
  line-height: 1;
  font: inherit;
}

/* scroll style */
::-webkit-scrollbar {
  display: none;
}
`;

export default GlobalStyles;

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
  height: 100%;
  max-width: 390px;
  margin: 0 auto;
  background: #fff;
  position: relative;
  overflow: hidden;
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
fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

/* scroll style */
::-webkit-scrollbar {
  display: none;
}

/* alert style */
:root {
  .Toastify{
    /* font-size: 13px; */
    flex: none;
  }

  @media only screen and (max-width: 480px){
    .Toastify__toast-container {
      width: 290px;
      left: 50%;
      top: 1em;
      transform: translateX(-50%);
      margin-bottom: 5px;
    }
    .Toastify__toast-body{
      padding:4px;
    }
  }

   /* 테마별 색상 바꾸기 */
   --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  /* 테마별 아이콘 색상 바꾸기 */
  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  /* 기본 적용 스타일 바꾸기 */
  --toastify-font-family: 'Noto Sans KR', -apple-system, sans-serif;
  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 150px;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("**hello**")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}
`;

export default GlobalStyles;

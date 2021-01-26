import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #eeeff4;
    font-family: 'Poppins', sans-serif;
  }

  @media (min-width:450px){
    ::-webkit-scrollbar {
      width:10px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    }
  }
`;

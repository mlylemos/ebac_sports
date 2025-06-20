import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#eee',
  corPrincipal: '#0c2461',
  corSecundaria: '#4a69bd'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`

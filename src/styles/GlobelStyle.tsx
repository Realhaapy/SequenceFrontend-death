import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    html,body,#__next{
        height: 100%;
    }
`

export default GlobalStyle

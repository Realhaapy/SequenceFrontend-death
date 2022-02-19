import GlobalStyle from '../styles/GlobelStyle'
import { AppProps } from 'next/app'
import { CacheApiConfig } from 'react-cache-api'

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <CacheApiConfig baseURL='http://membership-api-elb-783461071.ap-northeast-2.elb.amazonaws.com'>
                <Component {...pageProps} />
            </CacheApiConfig>
        </>
    )
}

export default app

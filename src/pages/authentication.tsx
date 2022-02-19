import Head from 'next/head'
import AuthenticationMain from '../components/login/AuthenticationMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const authentication = () => (
    <>
        <Head>
            <title>authentication</title>
        </Head>
        <Headers />
        <AuthenticationMain />
        <Footer />
    </>
)

export default authentication

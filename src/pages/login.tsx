import Head from 'next/head'
import LoginMain from '../components/login/LoginMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const login = () => (
    <>
        <Head>
            <title>Login</title>
        </Head>
        <Headers />
        <LoginMain />
        <Footer />
    </>
)

export default login

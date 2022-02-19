import Head from 'next/head'
import ForgotMain from '../components/login/ForgotMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const forgot = () => (
    <>
        <Head>
            <title>Forgot</title>
        </Head>
        <Headers />
        <ForgotMain />
        <Footer />
    </>
)

export default forgot

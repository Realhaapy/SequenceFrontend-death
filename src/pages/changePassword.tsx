import Head from 'next/head'
import ChangePassword from '../components/login/ChangePassword'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const changePassword = () => (
    <>
        <Head>
            <title>changePassword</title>
        </Head>
        <Headers />
        <ChangePassword />
        <Footer />
    </>
)

export default changePassword

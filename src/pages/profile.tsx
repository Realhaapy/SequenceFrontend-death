import Head from 'next/head'
import ProfileMain from '../components/login/ProfileMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const profile = () => (
    <>
        <Head>
            <title>profile</title>
        </Head>
        <Headers />
        <ProfileMain />
        <Footer />
    </>
)

export default profile

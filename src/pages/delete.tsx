import Head from 'next/head'
import Delte from '../components/login/DeleteMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const deleteID = () => (
    <>
        <Head>
            <title>delete</title>
        </Head>
        <Headers />
        <Delte />
        <Footer />
    </>
)

export default deleteID

import Head from 'next/head'
import CreateMain from '../components/login/CreateMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const create = () => (
    <>
        <Head>
            <title>Create</title>
        </Head>
        <Headers />
        <CreateMain />
        <Footer />
    </>
)

export default create

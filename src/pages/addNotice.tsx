import Head from 'next/head'
import AddNoticeMain from '../components/notice/AddNoticeMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const addNotice = () => (
    <>
        <Head>
            <title>addNotice</title>
        </Head>
        <Headers />
        <AddNoticeMain />
        <Footer />
    </>
)

export default addNotice

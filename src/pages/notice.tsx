import Head from 'next/head'
import NoticeMain from '../components/notice/NoticeMain'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const notice = () => (
    <>
        <Head>
            <title>notice</title>
        </Head>
        <Headers />
        <NoticeMain />
        <Footer />
    </>
)

export default notice

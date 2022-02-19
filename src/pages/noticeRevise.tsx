import Head from 'next/head'
import NoticeRevise from '../components/notice/NoticeRevise'
import Headers from '../components/Headers&Footer/Headers'
import Footer from '../components/Headers&Footer/Footer'

const noticeRevise = () => (
    <>
        <Head>
            <title>noticeRevise</title>
        </Head>
        <Headers />
        <NoticeRevise />
        <Footer />
    </>
)

export default noticeRevise

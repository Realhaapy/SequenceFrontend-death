import React, { useState, useEffect } from 'react'
import { NoticeMain } from './noticeConcept/NoticeStyles'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'

const Temp = () => {
    const [dataWithImage, setDataWithImage] = useState([])
    const [dataWithoutImage, setDataWithoutImage] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        ShowAllContents()
    }, [page])

    const ShowAllContents = async () => {
        const url = `http://api.sunwoocoding.com/contents/?limit=9&page=${page}`
        const allContents = await axios.get(url)
        setDataWithImage(allContents.data.result.slice(0, 4))
        setDataWithoutImage(allContents.data.result.slice(4))
    }

    const handleClick = () => {
        setPage(page)
    }
    const handleClick2 = () => {
        setPage(page + 1)
    }
    const handleClick3 = () => {
        setPage(page + 2)
    }
    const handleClick4 = () => {
        setPage(page + 3)
    }

    const handleClickLeft = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const handleClickRight = () => {
        setPage(page + 1)
    }

    return (
        <NoticeMain>
            <div className='frame'>
                <div className='Introduce'>Introduce</div>
                <ul className='photoNotice'>
                    {dataWithImage.map((item) => {
                        return (
                            <li key={item.idx}>
                                <Link href={`/noticeExaple?idx=${item.idx}`}>
                                    <a>
                                        <div className='title'>
                                            {item.title}
                                        </div>
                                        <div className='image'>
                                            <img src={item.img_url} />
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <ul className='notice'>
                    {dataWithoutImage.map((item) => {
                        return (
                            <li key={item.idx}>
                                <div className='date'>
                                    {moment(item.create_date).format(
                                        'YYYY - MM - DD'
                                    )}
                                </div>
                                <Link href={`/noticeExaple?idx=${item.idx}`}>
                                    <div className='text'>{item.title}</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <ul className='menu'>
                    <div className='space' />
                    <li>
                        <Link href='/addNotice'>
                            <a>add</a>
                        </Link>
                    </li>
                </ul>

                <ul className='number'>
                    <button className='left' onClick={handleClickLeft}>
                        ◁
                    </button>
                    <li>
                        <button onClick={handleClick} id='aa'>
                            {page + 1}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleClick2}>{page + 2}</button>
                    </li>
                    <li>
                        <button onClick={handleClick3}>{page + 3}</button>
                    </li>
                    <li>
                        <button onClick={handleClick4}>{page + 4}</button>
                    </li>
                    <button className='right' onClick={handleClickRight}>
                        ▷
                    </button>
                </ul>
            </div>
        </NoticeMain>
    )
}

export default Temp

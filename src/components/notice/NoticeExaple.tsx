import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { NoticeExaple } from './noticeConcept/NoticeStyles'
import { useRouter } from 'next/router'

const Temp = () => {
    const [valueTitle, setvalueTitle] = useState('')
    const [valueContents, setValueContents] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies([])
    const Router = useRouter()
    const valueIdx = Router.query.idx

    useEffect(() => {
        ShowContents()
    }, [])

    const ShowContents = async () => {
        const url = `https://api.sunwoocoding.com/contents/${valueIdx}`
        const postUpmethod = await axios.get(url)
        setvalueTitle(postUpmethod.data.result[0].title)
        setValueContents(postUpmethod.data.result[0].contents)
        setImgUrl(postUpmethod.data.result[0].img_url)
    }

    const handleClickDlete = async () => {
        await Delete()
        Router.push('/notice')
    }
    const handleClickRevise = async () => {
        Router.push(`/noticeRevise?idx=${valueIdx}`)
    }
    const handleClickList = async () => {
        Router.push(`/notice`)
    }

    const Delete = async () => {
        const url = `https://api.sunwoocoding.com/contents/${valueIdx}`
        let config = {
            title: valueTitle,
            contents: valueContents,
            idx: valueIdx,
            headers: {
                authorization: cookies.token,
            },
        }
        const deleteUpmethod = await axios.delete(url, config)
    }

    return (
        <NoticeExaple>
            <div className='frame'>
                <div className='Introduce'>Introduce</div>
                <ul className='notice'>
                    <li>
                        <div className='writer'>
                            writer: manager Hwangsunwoo
                        </div>
                        <div className='title'>{valueTitle}</div>
                        <div className='box'>
                            <div className='image'>
                                <img src={imgUrl} />
                            </div>
                            <div className='text'>
                                <div className='big'>{valueContents}</div>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className='menu'>
                    <div className='space' />
                    <li>
                        <button onClick={handleClickDlete}>delete</button>
                    </li>
                    <li>
                        <button onClick={handleClickRevise}>revise</button>
                    </li>
                </ul>

                <ul className='list'>
                    <div className='space' />
                    <button id='list' onClick={handleClickList}>
                        List
                    </button>
                    <div className='space' />
                </ul>
            </div>
        </NoticeExaple>
    )
}

export default Temp

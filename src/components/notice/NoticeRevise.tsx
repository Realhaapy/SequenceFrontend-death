import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NoticeExaple } from './noticeConcept/NoticeStyles'
import { useCookies } from 'react-cookie'
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

    const handleSubmitTitle = (e: any) => {
        e.preventDefault()
    }

    const handleChangeTitle = (e: any) => {
        setvalueTitle(e.target.value)
    }
    const handleChangeContents = (e: any) => {
        setValueContents(e.target.value)
    }
    const handleClickUpdate = async (e: any) => {
        await revise()
    }

    const revise = async () => {
        const url = `https://api.sunwoocoding.com/Contents/${valueIdx}`
        const payload = {
            title: valueTitle,
            contents: valueContents,
            idx: valueIdx,
        }
        let config = {
            headers: {
                authorization: cookies.token,
            },
        }

        const signUpMethod = await axios.put(url, payload, config)
        if (signUpMethod.data.error !== true) {
            Router.push(`/noticeExaple?idx=${valueIdx}`)
        } else {
            alert(signUpMethod.data.message)
        }
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
                        <form className='title' onSubmit={handleSubmitTitle}>
                            <textarea
                                className='box'
                                value={valueTitle}
                                onChange={handleChangeTitle}
                            ></textarea>
                        </form>
                        <div className='box'>
                            <div className='image'>
                                <img src={imgUrl} />
                            </div>
                            <form className='text' onSubmit={handleSubmitTitle}>
                                <textarea
                                    className='box'
                                    value={valueContents}
                                    onChange={handleChangeContents}
                                ></textarea>
                            </form>
                        </div>
                    </li>
                </ul>

                <ul className='list'>
                    <div className='space' />
                    <button id='list' onClick={handleClickUpdate}>
                        update
                    </button>
                    <div className='space' />
                </ul>
            </div>
        </NoticeExaple>
    )
}

export default Temp

import React, { useState, useEffect } from 'react'
import { AddNoticeMain } from './noticeConcept/NoticeStyles'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'

const Temp = () => {
    const [valueTitle, setvalueTitle] = useState('title')
    const [valueContents, setValueContents] = useState('contents')
    const [valueImage, setValueImage] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies([])

    const handleSubmitTitle = (e: any) => {
        e.preventDefault()
    }

    const handleChangeTitle = (e: any) => {
        setvalueTitle(e.target.value)
    }

    const onImgChange = async (e: any) => {
        setValueImage(e.target.files[0])
    }

    const handleSubmitContents = (e: any) => {
        e.preventDefault()
    }

    const handleChangeContents = (e: any) => {
        setValueContents(e.target.value)
    }
    const handleClick = async () => {
        await postUp()
    }

    const postUp = async () => {
        const url = 'https://api.sunwoocoding.com/contents'
        const payload = new FormData()
        payload.append('title', valueTitle)
        payload.append('contents', valueContents)
        payload.append('user_idx', '97')
        payload.append('img', valueImage)
        let config = {
            headers: {
                authorization: cookies.token,
                // 'Content-type': 'multipart/formdata',
            },
        }
        const postUpmethod = await axios.post(url, payload, config)
        if (postUpmethod.data.error !== true) {
            Router.push('/notice')
        } else {
            alert(postUpmethod.data.message)
        }
    }

    return (
        <AddNoticeMain>
            <div className='frame'>
                <div className='Introduce'>Introduce</div>

                <ul className='noticeboard'>
                    <li className='inputWriter'>
                        <div className='inputMenu'>title</div>
                        <div className='inputContents'>
                            <form
                                className='Writer'
                                onSubmit={handleSubmitTitle}
                            >
                                <textarea
                                    className='box'
                                    value={valueTitle}
                                    onChange={handleChangeTitle}
                                ></textarea>
                            </form>
                        </div>
                    </li>
                    <li className='inputImg'>
                        <div className='inputMenu'>upload</div>

                        <form method='post' className='inputContents'>
                            <input
                                type='file'
                                accept='image/*'
                                name='img'
                                onChange={onImgChange}
                            />
                        </form>
                    </li>
                    <li className='inputContents'>
                        <div className='inputMenu'>contents</div>
                        <div className='inputContents'>
                            <form
                                className='contents'
                                onSubmit={handleSubmitContents}
                            >
                                <textarea
                                    className='box'
                                    value={valueContents}
                                    onChange={handleChangeContents}
                                ></textarea>
                            </form>
                        </div>
                    </li>
                </ul>

                <ul className='menu'>
                    <div className='space' />
                    <button id='update' onClick={handleClick}>
                        update
                    </button>
                </ul>

                <ul className='list'>
                    <div className='space'></div>
                    <Link href='/notice'>
                        <button id='list'>List</button>
                    </Link>
                    <div className='space'></div>
                </ul>
            </div>
        </AddNoticeMain>
    )
}

export default Temp

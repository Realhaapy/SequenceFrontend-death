import React, { useState, useEffect } from 'react'
import { Headhomapage } from './basicConcept/HeadStyles'
import { useCookies } from 'react-cookie'
import Link from 'next/link'
import axios from 'axios'

const Temp = () => {
    const [valueLogin, setvalueLogin] = useState('Login')
    const [valueLoginUrl, setvalueLoginUrl] = useState('/login')
    const [cookies, setCookie, removeCookie] = useCookies([])

    useEffect(() => {
        checkUp()
    }, [cookies])

    const checkUp = async () => {
        const url = 'https://api.sunwoocoding.com/checkToken'
        const payload = { body: 'hi' }
        let config = {
            headers: {
                authorization: cookies.token,
            },
        }
        const checkUpmethod = await axios.post(url, payload, config)
        if (checkUpmethod.data.result === true) {
            setvalueLogin('Profile')
            setvalueLoginUrl('profile')
        } else {
            setvalueLogin('Login')
            setvalueLoginUrl('login')
        }
    }

    return (
        <Headhomapage>
            <video id='homepage' autoPlay muted loop>
                <source
                    src='https://sunwoocodingbuckets.s3.ap-northeast-2.amazonaws.com/GOMCAM+20220220_0755570699.mp4'
                    type='video/mp4'
                />
            </video>

            <div className='header'>
                <Link href='/work'>
                    <img
                        id='Sequence'
                        src='https://sunwoocodingbuckets.s3.ap-northeast-2.amazonaws.com/sequence2.png'
                        alt='Sequence'
                    />
                </Link>
                <div id='noting'></div>
                <Link href={valueLoginUrl}>
                    <a id='Login'>{valueLogin}</a>
                </Link>
                <Link href='/notice'>
                    <a id='Introduce'>Introduce</a>
                </Link>
                <Link href='/'>
                    <a id='Ask'>Ask</a>
                </Link>
            </div>
        </Headhomapage>
    )
}

export default Temp

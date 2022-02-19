import React, { useState, useEffect } from 'react'
import { Head } from './basicConcept/HeadStyles'
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
        <Head>
            <div className='header'>
                <div className='pass'>
                    <Link href='/work'>
                        <a>
                            <img
                                id='Sequence'
                                src='https://sunwoocodingbuckets.s3.ap-northeast-2.amazonaws.com/sequence.PNG'
                                alt='Sequence'
                            />
                        </a>
                    </Link>
                </div>

                <div id='noting'></div>
                <div className='pass'>
                    <Link href={valueLoginUrl}>
                        <a className='menu'>{valueLogin}</a>
                    </Link>
                </div>

                <div className='pass'>
                    <Link href='/notice'>
                        <a className='menu'>Introduce</a>
                    </Link>
                </div>

                <div className='pass'>
                    <Link href='/'>
                        <a className='menu'>Ask</a>
                    </Link>
                </div>
            </div>
        </Head>
    )
}

export default Temp

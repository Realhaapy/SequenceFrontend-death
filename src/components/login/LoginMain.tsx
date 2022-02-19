import React, { useState, useEffect } from 'react'
import { LoginMain } from './loginConcept/LoginStyles'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Temp = () => {
    const [valueEmail, setvalueEmail] = useState('')
    const [valuePs, setValuePs] = useState('')
    const [res, setRes] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies([])
    const Router = useRouter()

    useEffect(() => {
        if (res) {
            setCookie('token', `Bearer ${res}`)
        }
    }, [res])

    const handleSubmitEmail = (e: any) => {
        e.preventDefault()
    }

    const handleChangeEmail = (e: any) => {
        setvalueEmail(e.target.value)
    }

    const handleSubmitPs = (e: any) => {
        e.preventDefault()
    }

    const handleChangePs = (e: any) => {
        setValuePs(e.target.value)
    }

    const handleClick = async () => {
        if (valueEmail === '') {
            alert('input email')
        } else if (valuePs === '') {
            alert('input password')
        } else {
            await loginUp()
            Router.push('/work')
        }
    }

    const loginUp = async () => {
        const url = 'https://api.sunwoocoding.com/login'
        const payload = {
            email: valueEmail,
            password: valuePs,
        }
        // try {
        const signUpmethod = await axios.post(url, payload)
        setRes(signUpmethod.data.result)
        // } catch (e) {
        //     e.printStackTrace()
        // }
    }

    return (
        <LoginMain>
            <div className='card'>
                <img
                    src='https://sunwoocodingbuckets.s3.ap-northeast-2.amazonaws.com/sequence3.png'
                    id='sequence'
                />
                <div className='Personal'>
                    <div id='email'>Email</div>
                    <form className='login' onSubmit={handleSubmitEmail}>
                        <input
                            className='box'
                            type='text'
                            value={valueEmail}
                            name='input'
                            onChange={handleChangeEmail}
                            placeholder='Email'
                        ></input>
                    </form>
                </div>
                <div className='Personal'>
                    <div id='password'>Password</div>
                    <form className='login' onSubmit={handleSubmitPs}>
                        <input
                            className='box'
                            type='password'
                            value={valuePs}
                            name='input'
                            onChange={handleChangePs}
                            placeholder='password'
                        ></input>
                    </form>
                </div>
                <button className='button' onClick={handleClick}>
                    Login ▶
                </button>
                <Link href='/forgot'>
                    <a id='menusForgot'>Forgot your password?</a>
                </Link>
                <Link href='/create'>
                    <a id='menusCreate'>Create an account</a>
                </Link>
            </div>
            <img
                className='cardImage'
                src='https://sunwoocodingbuckets.s3.ap-northeast-2.amazonaws.com/nurun.PNG'
            />
        </LoginMain>
    )
}

export default Temp

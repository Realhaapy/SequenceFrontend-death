import React, { useState } from 'react'
import { ForgotMain } from './login/loginConcept/LoginStyles'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import Router from 'next/router'

const Temp = () => {
    const [valueEmail, setvalueEmail] = useState('')
    const [valuePassword, setvaluePassword] = useState('')
    const [state, setState] = useState('Change password ▶')
    const [cookies, setCookie, removeCookie] = useCookies([])

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const handleChangeEmail = (e: any) => {
        setvalueEmail(e.target.value)
    }

    const handleChangePassword = (e: any) => {
        setvaluePassword(e.target.value)
    }

    const handleClick = async () => {
        if (valueEmail === '') {
            setState('input email')
        } else if (valuePassword === '') {
            setState('input password')
        } else {
            await resetPassword()
            alert('Change password')
            removeCookie(['token'])
            Router.push('/work')
        }
    }

    const resetPassword = async () => {
        const url = 'https://api.sunwoocoding.com/users'
        const payload = {
            email: valueEmail,
            password: valuePassword,
        }
        const changeUpmethod = await axios.put(url, payload)
    }

    return (
        <ForgotMain>
            <div className='card'>
                <div className='part1' id='create'>
                    Change Password?
                </div>
                <div className='part1'>
                    Email
                    <form onSubmit={handleSubmit}>
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
                <div className='part1'>
                    New Password
                    <form onSubmit={handleSubmit}>
                        <input
                            className='box'
                            type='password'
                            value={valuePassword}
                            name='input'
                            onChange={handleChangePassword}
                            placeholder='Password'
                        ></input>
                    </form>
                </div>
                <button className='button part1' onClick={handleClick}>
                    {state}
                </button>
            </div>
        </ForgotMain>
    )
}

export default Temp

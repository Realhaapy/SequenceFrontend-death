import React, { useState } from 'react'
import { ForgotMain } from './loginConcept/LoginStyles'
import axios from 'axios'
import Router from 'next/router'

const Temp = () => {
    const [valueEmail, setvalueEmail] = useState('')
    const [state, setState] = useState('Reset ▶')
    const [url, setUrl] = useState('')

    const handleSubmitEmail = (e: any) => {
        e.preventDefault()
    }

    const handleChangeEmail = (e: any) => {
        setvalueEmail(e.target.value)
    }

    const handleClick = async () => {
        if (valueEmail === '') {
            setState('input email')
        } else {
            await resetPassword()
            alert('비밀번호가 변경되었습니다')
            Router.push('/login')
        }
    }

    const resetPassword = async () => {
        const url = 'http://api.sunwoocoding.com/password/reset'
        const payload = {
            email: valueEmail,
        }
        const signUpmethod = await axios.post(url, payload)
    }

    return (
        <ForgotMain>
            <div className='card'>
                <div className='part1' id='create'>
                    Forgot your password?
                </div>
                <div className='part1'>
                    Email
                    <form onSubmit={handleSubmitEmail}>
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
                <img src='forgot.PNG' className='part1' id='forgot' />
                <button className='button part1' onClick={handleClick}>
                    {state}
                </button>
            </div>
        </ForgotMain>
    )
}

export default Temp

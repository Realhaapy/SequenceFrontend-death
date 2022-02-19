import React, { useState } from 'react'
import { ForgotMain } from './login/loginConcept/LoginStyles'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import Router from 'next/router'

const Temp = () => {
    const [valueEmail, setvalueEmail] = useState('')
    const [valuePassword, setvaluePassword] = useState('')
    const [bye, setBye] = useState('')
    const [state, setState] = useState('Delete ID ▶')
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

    const handleChangeBye = (e: any) => {
        setBye(e.target.value)
    }

    const handleClick = async () => {
        if (valueEmail === '') {
            setState('input email')
        } else if (valuePassword === '') {
            setState('input password')
        } else if (bye !== 'bye') {
            setState('write down')
        } else {
            await deleteID()
            removeCookie(['token'])
            alert('successfully deleted ID.')
            Router.push('/work')
        }
    }

    const deleteID = async () => {
        const url = 'https://api.sunwoocoding.com/users'
        let config = {
            data: { email: valueEmail, password: valuePassword },
            headers: {
                authorization: cookies.token,
            },
        }
        console.log(config)
        const deleteUpmethod = await axios.delete(url, config)
    }

    return (
        <ForgotMain>
            <div className='card'>
                <div className='part1' id='create'>
                    Delete ID?
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
                    Password
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
                <div className='part1'>
                    Please write down the next phrase.
                    <form onSubmit={handleSubmit}>
                        <input
                            className='box'
                            type='text'
                            value={bye}
                            name='input'
                            onChange={handleChangeBye}
                            placeholder='bye'
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

import React, { useState } from 'react'
import { CreateMain } from './loginConcept/LoginStyles'
import axios from 'axios'
import Router from 'next/router'

const Temp = () => {
    const [valueEmail, setValueEmail] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [valueNickname, setValueNickname] = useState('')
    const [valuePs, setValuePs] = useState('')
    const [valuePsCheck, setValuePsCheck] = useState('')
    const [state, setState] = useState('Create')

    const regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const handleChangeEmail = (e: any) => {
        setValueEmail(e.target.value)
    }

    const handleChangePhone = (e: any) => {
        setValuePhone(e.target.value)
    }

    const handleChangeNickname = (e: any) => {
        setValueNickname(e.target.value)
    }

    const handleChangePs = (e: any) => {
        setValuePs(e.target.value)
    }

    const handleChangePsCheck = (e: any) => {
        setValuePsCheck(e.target.value)
    }

    const handleClick = async () => {
        if (valueEmail === '') {
            setState('input email')
        } else if (valuePhone === '') {
            setState('input phone')
        } else if (valueNickname === '') {
            setState('input nickname')
        } else if (valuePs === '') {
            setState('input password')
        } else if (valuePsCheck === '') {
            setState('input passwordcheck')
        } else if (valueEmail.match(regExp) === null) {
            setState('confirm email')
        } else if (valuePsCheck !== valuePs) {
            setState('confirm password')
        } else {
            await signUp()
        }
    }

    const signUp = async () => {
        const url = 'https://api.sunwoocoding.com/users'
        const payload = {
            email: valueEmail,
            nickname: valueNickname,
            phoneNumber: valuePhone,
            password: valuePs,
        }
        const signUpmethod = await axios.post(url, payload)
        if (signUpmethod.data.error !== true) {
            await authenticationUp()
        } else {
            alert(signUpmethod.data.message)
        }
    }

    const authenticationUp = async () => {
        const url = 'https://api.sunwoocoding.com/authorization/mail'
        const payload = {
            email: valueEmail,
        }
        const authenticationUpmethod = await axios.post(url, payload)
        if (authenticationUpmethod.data.error !== true) {
            alert('Please complete the authentication.')
            Router.push('/login')
        } else {
            alert(authenticationUpmethod.data.message)
        }
    }

    return (
        <CreateMain>
            <div className='card'>
                <div className='part1' id='create'>
                    Create an Account
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
                    Phone
                    <form onSubmit={handleSubmit}>
                        <input
                            className='box'
                            type='number'
                            value={valuePhone}
                            name='input'
                            onChange={handleChangePhone}
                            placeholder='Phone'
                        ></input>
                    </form>
                </div>
                <div className='part1'>
                    Nickname
                    <form onSubmit={handleSubmit}>
                        <input
                            className='box'
                            type='text'
                            value={valueNickname}
                            name='input'
                            onChange={handleChangeNickname}
                            placeholder='Nickname'
                        ></input>
                    </form>
                </div>
                <div className='part1'>
                    Password
                    <form onSubmit={handleSubmit}>
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
                <div className='part1'>
                    Password check
                    <form onSubmit={handleSubmit}>
                        <input
                            className='box'
                            type='password'
                            value={valuePsCheck}
                            name='input'
                            onChange={handleChangePsCheck}
                            placeholder='password check'
                        ></input>
                    </form>
                </div>
                <button className='button part1' onClick={handleClick}>
                    {state}
                </button>
            </div>
        </CreateMain>
    )
}

export default Temp

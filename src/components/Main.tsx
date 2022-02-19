import React, { useState, useEffect } from 'react'
import { Main } from './style'
import { useCookies } from 'react-cookie'

const Temp = () => {
    const [forward, setForward] = useState('abcdefghij')
    const [reverse, setReverse] = useState('abcdefcccc')
    const [conclusionForward, setconClusionForward] = useState([])
    const [conclusionReverse, setconClusionReverse] = useState([])
    const [url, setUrl] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies([])

    const handleSubmitForward = (e: any) => {
        e.preventDefault()
    }

    const handleChangeForward = (e: any) => {
        setForward(e.target.value)
    }

    const handleSubmitReverse = (e: any) => {
        e.preventDefault()
    }

    const handleChangeReverse = (e: any) => {
        setReverse(e.target.value)
    }

    const handleClick = () => {
        let forwardArray = new Array()
        for (let i = 0; i < forward.length; i++) {
            if (forward[i] === reverse[i]) {
                forwardArray.push(forward[i])
            } else {
                forwardArray.push('@' + forward[i])
            }
        }
        setconClusionForward(forwardArray)
        let reverseArray = new Array()
        for (let i = 0; i < forward.length; i++) {
            if (forward[i] === reverse[i]) {
                reverseArray.push(reverse[i])
            } else {
                reverseArray.push('@' + reverse[i])
            }
        }
        setconClusionReverse(reverseArray)
    }

    return (
        <Main>
            <div className='card'>
                <p className='cardHead'>Insert sequence</p>

                <form className='insert' onSubmit={handleSubmitForward}>
                    <p className='Forward'>Forward:</p>
                    <input
                        className='box'
                        type='text'
                        value={forward}
                        name='input'
                        onChange={handleChangeForward}
                        placeholder='Forward'
                    ></input>
                </form>
                <form className='insert' onSubmit={handleSubmitReverse}>
                    <p className='Reverse'>Reverse:</p>
                    <input
                        className='box'
                        type='text'
                        value={reverse}
                        name='input'
                        onChange={handleChangeReverse}
                        placeholder='Reverse'
                    ></input>
                </form>
                <button className='button' onClick={handleClick}>
                    ▶
                </button>
            </div>
            <div className='card'>
                <p className='cardHead'>Select sequence</p>
                <div className='Forward'>Forward: {conclusionForward}</div>
                <div className='Reverse'>Reverse: {conclusionReverse}</div>
            </div>
            <div className='card'>
                <p className='cardHead'>Take output</p>
                <div className='Forward'>Forward: {conclusionForward}</div>
            </div>
        </Main>
    )
}

export default Temp

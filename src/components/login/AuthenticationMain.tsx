import React, { useState, useEffect } from 'react'
import { ForgotMain } from './loginConcept/LoginStyles'
import axios from 'axios'
import { useRouter } from 'next/router'

const Temp = () => {
    const [ment, setMent] = useState('Verifing')
    const router = useRouter()
    const valuecode = router.query.code

    useEffect(() => {
        if (valuecode !== undefined) {
            authentication()
        }
    }, [valuecode])

    const authentication = async () => {
        const url = `https://api.sunwoocoding.com/authorization/check`
        const payload = {
            code: valuecode,
        }
        const authenticationUpmethod = await axios.post(url, payload)
        if (authenticationUpmethod.data.result === true) {
            setMent('verified')
        }
    }

    return (
        <ForgotMain>
            <div className='card'>
                <div className='part1' id='create'>
                    {ment}
                </div>
            </div>
        </ForgotMain>
    )
}

export default Temp

import React from 'react'
import { ForgotMain } from './loginConcept/LoginStyles'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Temp = () => {
    const [cookies, setCookie, removeCookie] = useCookies([])
    const Router = useRouter()
    const handleClick = () => {
        removeCookie(['token'])
        Router.push('/work')
    }

    return (
        <ForgotMain>
            <div className='card'>
                <div id='create'>Your Profile</div>
                <Link href='/changePassword'>
                    <button className='button part1' id='changepassword'>
                        Change Password
                    </button>
                </Link>
                <Link href='/delete'>
                    <button className='button part1' id='deleteID'>
                        Delete ID
                    </button>
                </Link>
                <button
                    className='button part1'
                    id='deleteID'
                    onClick={handleClick}
                >
                    Logout
                </button>
            </div>
        </ForgotMain>
    )
}

export default Temp

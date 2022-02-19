import React from 'react'
import { ForgotMain } from './loginConcept/LoginStyles'
import Link from 'next/link'

const Temp = () => {
    return (
        <ForgotMain>
            <div className='card'>
                <div id='create'>Your profile</div>
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
            </div>
        </ForgotMain>
    )
}

export default Temp

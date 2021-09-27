/** Usage: Profile page */
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { shopifyLogout } from '@shopify/auth'
import { shopifyCustomer } from '@shopify/customer'
import { LoginView } from '@components/auth'

const Layout = ({children}) => { // Take it away
    return <div className='border-4 border-gray-400'>{children}</div>
}

const Profile = () => {
    const [userInfo, setInfo] = useState(null)
    
    async function fetchCustomer() {
        await shopifyCustomer()
            .then(data => {
                setInfo(data)
            })
    }

    async function handleLogout() {
        await shopifyLogout()
            .then(() => {
                setInfo(null)
            })
    }

    useEffect(() => {
        fetchCustomer()
    }, [])

    return (
        <div className='w-full border border-gray-500 h-full'>
        
        {userInfo && (
            <>
            <h2 className='text-xl'>Profile</h2>
            <div className='py-5 flex flex-col gap-4 text-blue-600'>
            <h3 className='font-bold'>User:</h3>
            { userInfo && <p>{userInfo.email}</p>}
            </div>
            <button onClick={handleLogout} className='p-2 m-4 border border-gray-400 '>Logout</button>
            <Link href='/test/cart'>
                <a className='p-2 m-4 border border-gray-400'>Cart</a>
            </Link>
            </>
        )}

        {!userInfo && (
            <LoginView setInfo={setInfo} />
        )}

        </div>
    )
}

Profile.Layout = Layout

export default Profile
/** login & logout functions are ready to use */
import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { useLogin, useLogout } from '@shopify/auth'
import { useCustomer } from '@shopify/customer'
 
const Test: NextPage = () => {
    const [userInfo, setInfo] = useState(null)
    
    async function fetchCustomer() {
        await useCustomer()
            .then(data => {
                console.log(data)
                setInfo(data)
            })
    }

    async function logout() {
        await useLogout()
            .then(() => {
                setInfo(null)
            })
    }

    const [userInput, setInput] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(userInput, event) {
        event.preventDefault()
        if (!(userInput.email.length > 0 && userInput.password.length > 0)) {
            alert('Email or password are missing...')
            return
        }
        await useLogin(userInput)
        await fetchCustomer()
    }

    useEffect(() => {
        fetchCustomer()
    },[])

    return (
        <div className='w-full border border-gray-500 h-full'>
        <h2 className='text-xl'>Log in</h2>
        <form onSubmit={(e) => handleSubmit(userInput, e)}>
            <input
                type="text"
                placeholder='email address'
                value={userInput.email}
                onChange={e => setInput({ 
                    ...userInput, 
                    email: e.target.value
                })}
                className='border-gray-500 border'
            />
            <input
                type="text"
                placeholder='password'
                value={userInput.password}
                onChange={e => setInput({ 
                    ...userInput, 
                    password: e.target.value
                })}
                className='border-gray-500 border'
            />
            <input type="submit" value="Send" className='w-24 border border-gray-500'></input>
        </form>

        <button onClick={logout} className='p-2 m-4 border border-gray-400 '>Logout</button>
        <Link href='/test/cart'>
            <a className='p-2 m-4 border border-gray-400'>Cart</a>
        </Link>

        <div className='py-5 flex flex-col gap-4 text-blue-600'>
            <h3 className='font-bold'>User:</h3>
            { userInfo && <p>{userInfo.email}</p>}
        </div>
        </div>
    )
}
 
export default Test
 
 
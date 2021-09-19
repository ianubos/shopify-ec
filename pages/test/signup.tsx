
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import useSignUp from '@shopify/auth/use-signup'
 
const Test: NextPage = () => {
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
        await useSignUp(userInput)
    }
    return (
        <div className='w-full border border-gray-500 h-full'>
        <h2 className='text-xl'>Sign up</h2>
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
        </div>
    )
}
 
export default Test
 
 
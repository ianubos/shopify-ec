/** Usage: Profile page */
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { shopifyLogin, shopifySignup } from '@shopify/auth'
import { shopifyCustomer } from '@shopify/customer'
import { validate } from 'email-validator'
 
const LoginView = ({ setInfo }) => {
    const [userInput, setInput] = useState({
        email: '',
        password: ''
    })
    const [isLogin, setIsLogin] = useState(true)
    const [disabled, setDisabled] = useState(false)
    
    async function fetchCustomer() {
        await shopifyCustomer()
            .then(data => {
                setInfo(data)
            })
    }

    async function handleValidInput(userInput, e, callback) {
        e.preventDefault()
        if (disabled) {
            alert('Something wrong with email or password...')
            return
        }
        await callback(userInput)
    }

    async function handleSignup(userInput, e) {
        await handleValidInput(userInput, e, async () => {
            await shopifySignup(input)
        })
    }

    async function handleLogin(userInput, e) {
        await handleValidInput(userInput, e, async () => {
            await shopifyLogin(userInput)
            await fetchCustomer()
        })
    }

    const handleValidation = useCallback(() => {
        // const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(userInput.password)
        const validPassword = /^(?=.*[a-zA-Z])/.test(userInput.password)
        setDisabled(!validate(userInput.email) || userInput.password.length < 7 || !validPassword)
        console.log(!validate(userInput.email),userInput.password.length < 7,!validPassword)
    }, [userInput])
    
    useEffect(() => {
        handleValidation()
    }, [handleValidation])
    useEffect(() => {
        setIsLogin(true)
    }, [])

    return (
        <div className='w-full border border-gray-500 h-full'>
            <h2 className='text-xl'>{ isLogin ? 'LOGIN' : 'REGISTER'}</h2>
            <form onSubmit={(e) => {
                if (isLogin) {
                    handleLogin(userInput, e)
                } else {
                    handleSignup(userInput, e)
                }
            }}>
                <input
                    type="text"
                    placeholder='Email'
                    value={userInput.email}
                    onChange={e => setInput({ 
                        ...userInput, 
                        email: e.target.value
                    })}
                    className='border-gray-500 border'
                />
                <input
                    type="text"
                    placeholder='Password'
                    value={userInput.password}
                    onChange={e => setInput({ 
                        ...userInput, 
                        password: e.target.value
                    })}
                    className='border-gray-500 border'
                />
                <input type="submit" value={isLogin ? `Login` : `Create`} className='w-24 border border-gray-500'></input>
            </form>

            <button onClick={() => setIsLogin(false)} className='p-2 m-4 border border-gray-400 '>Create Account</button>
        </div>
    )
}
 
export default LoginView
 
 
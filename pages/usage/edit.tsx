import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import {  } from '@shopify/utils'
import { shopifyCustomer } from '@shopify/customer'

type Profile = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {}
  acceptsMarketing: boolean
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: {
    address1: '',
    address2: '',
    city: '',
    zip: '',
  },
  acceptsMarketing: false
}

const Test: NextPage = () => {
  const [profile, setProfile] = useState(initialState)
  async function getProfile() {
    const data = await shopifyCustomer()
    console.log(data)
    setProfile({
        ...profile,
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phone: data?.phone,
        address: data?.defaultAddress,
    })
  }

  useEffect(() => {
    getProfile()
  }, [])
  return (
    <>
    <div className='w-full border border-gray-500 h-full p-8'>
        <h2 className='text-lg underline'>Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:<input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link href='/test/profile'>
          <a className='px-4 py-2 bg-gray-900 text-white'>Confirm</a>
        </Link>
    </div>
    </>
  )
}



export default Test


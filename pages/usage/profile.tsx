import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import {  } from '@shopify/utils'
import { shopifyCustomer } from '@shopify/customer'

const Test: NextPage = () => {
  const [profile, setProfile] = useState()
  async function getProfile() {
    const data = await shopifyCustomer()
    console.log(data)
    setProfile(data)
  }

  useEffect(() => {
    getProfile()
  }, [])
  return (
    <>
    <div className='w-full border border-gray-500 h-full p-8'>
        <h2 className='text-lg underline'>Profile</h2>
        <div className='flex flex-col m-4'>
          <table className="table-auto">
            <tbody>
              {profile && Object.entries(profile).map((item,i) => (
                <tr key={i}>
                  <td className='font-bold'>{item[0]}</td>
                  <td className={`${!item[1] && 'text-gray-400'}`}>{item[1] ?? 'undefined'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href='/test/edit'>
          <a className='px-4 py-2 bg-gray-900 text-white'>Edit</a>
        </Link>
    </div>
    </>
  )
}



export default Test


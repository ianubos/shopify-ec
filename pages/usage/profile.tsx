import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
// import {  } from '@shopify/utils'

import { useCustomerContext } from '../../contexts'

const Test: NextPage = () => {
  const [state, dispatch] = useCustomerContext()
  console.log(state.profile)
  const [profileState, setState] = useState(null)
  async function asyncProfile() {
    await dispatch({type: 'FETCH'})
    setState(state)
    // console.log(profile)
    console.log(profileState)
  }
  useEffect(() => {
    asyncProfile()
  },[])
  return ( 
    <> 
    <div className='w-full border border-gray-500 h-full p-8'>
        <h2 className='text-lg underline'>Profile</h2>
        <div className='flex flex-col m-4'>
          <table className="table-auto">
            <tbody>
              {profileState && Object.entries(profileState).map((item,i) => (
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
        <button onClick={
          () => { 
            dispatch({type: 'LOGOUT'}) 
            console.log(profile)
        }} className='p-2 m-4 border border-gray-400 '>Logout</button>
        <button onClick={() => asyncProfile()} className='p-2 m-4 border border-gray-400 '>Get Profile</button>
    </div>
    </>
  )
}



export default Test


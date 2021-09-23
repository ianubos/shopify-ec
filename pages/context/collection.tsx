import type { NextPage } from 'next'
import { useState, useEffect } from 'react' 
import { useCollectionContext } from '../../contexts'

const Test: NextPage<Props> = () => {
    const collection = useCollectionContext()
    console.log('collection:', collection)
  return (
    <>
    <div className='w-full border border-gray-500 h-full p-8'>
      <h2 className='text-lg underline'>Collections</h2>
      { collection && collection.map((col,i) => {
          return <p key={i}>{col.title}</p>
      })}
    </div>
    </>
  )
}



export default Test


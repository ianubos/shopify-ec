
// import { FC } from 'react'
import { useState } from 'react'
import { debounce } from '@utils/debounce' 

const Search = ({items, inputed, updateInput, isFetchedRef}) => {
    const [val, setVal] = useState('')
    return (
        <>
        <div className='w-full border border-gray-500 h-full m-8'>
        <input
          type="text"
          value={val}
          onChange={e => {
              setVal(e.target.value)
              debounce(() => {
                  console.log('debouncer...')
                  isFetchedRef.current = false
                  updateInput(e.target.value)
              }, 1000)
            }
          }
          className='border-gray-500 border'
        />
        <h2 className='text-lg underline'>Search By Keyword 'PLA'</h2>
        {
          items && items.length > 0 &&
          items.map((product: {}, index: number) => {
              console.log('collection',product)
              return <div key={index} className='flex flex-col m-4'>
                        <h3>Product: {product?.title}</h3>
                        <h3>Collection: {product?.collection.title}</h3>
                    </div>
            }
          )
        }
        </div>
        </>
    )
}

export default Search
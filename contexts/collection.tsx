import { createContext, useContext, useState, useEffect, FC, useRef } from "react"

import { shopifyCollection } from '@shopify/collection'

export const CollectionContext = createContext()
export const useCollectionContext = () => useContext(CollectionContext);

export const CollectionProvider: FC = ({ children }) => {
    const isLoaded = useRef(false)
    const [collection, setCollection] = useState(null)
    async function getCollection(): Promise<void> {
        const data = await shopifyCollection()
        setCollection(data)
        isLoaded.current = true
    }
    useEffect(() => {
        if (!isLoaded.current) {
            getCollection()
        }
    }, [])
    return (
        <CollectionContext.Provider value={collection}>
            {children}
        </CollectionContext.Provider>
    )
}



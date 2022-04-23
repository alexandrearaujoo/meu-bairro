import { createContext, useContext, useCallback, useState, ReactNode } from "react";
import api from "../../services/api";

interface CommerceProviderProps {
    children: ReactNode
}

interface Commerce {
    name: string
    active: boolean
    avatar: string
}

interface InfoCommerce {
    name: string
    active: boolean
    avatar: string
    address: {
        state: string
        city: string
        neighborhood: string
        street: string
        number: string
        complement: string
    }
    contact:{
        phone1: string
        phone2: string
        instagram: string
        facebook: string
        whatsapp: string
    }
    image: {
        image1: string
        image2: string
        image3: string
        image4: string
    }
}

interface CommerceContextData {
    commerces: Commerce[]
    infoCommerce: InfoCommerce[]
    getAllCommerces: () => Promise<void>
    getOneCommerce: (id: string) => Promise<void>
}

const CommerceContext = createContext<CommerceContextData>({} as CommerceContextData)

const useCommerce = () => {
    const context = useContext(CommerceContext)

    if (!context) {
        throw new Error ('teste')
    }
    return context
}

const CommerceProvider = ({children}: CommerceProviderProps) => {
    const [commerces, setCommerce] = useState<Commerce[]>([])
    const [infoCommerce, setInfoCommerce] = useState<InfoCommerce[]>([])

    const getAllCommerces = useCallback(async () => {
      const res = await api.get('commerce?page=1')
      const filteredCommerces = res.data.data.filter(({active}: any) => active)
      setCommerce(filteredCommerces)
    },[])

    const getOneCommerce = useCallback(async (id: string) => {
        const res = await api.get(`commerce/${id}`)
        setInfoCommerce(res.data.data)
    },[])

    return (
        <CommerceContext.Provider value={{commerces, infoCommerce, getAllCommerces, getOneCommerce}}>
            {children}
        </CommerceContext.Provider>
    )
}

export {CommerceProvider, useCommerce}
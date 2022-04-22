import { createContext, useContext, useState, ReactNode } from "react";
import toast from 'react-hot-toast'
import { useHistory } from "react-router-dom";
import api from "../../services/api";

interface UserProviderProps {
    children: ReactNode
}

interface UserContextData {
    token: string
    createUser: (data: object) => Promise<void>
    loginUser: (data: object) => Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('teste')
    }

    return context
}

const UserProvider = ({children}:UserProviderProps) => {

    const [token, setToken] = useState<string>(localStorage.getItem('MeuBairro:token') || '')
    const history = useHistory<unknown>()
    
    const createUser = async (data:object) => {
        const res = await api.post('user', data)
        .then(() => toast.success('Cadastro realizado'))
        .catch((error) => toast.error(error.message))
    }

    const loginUser = async (data: object) => {
        const res = await api.post('login', data)
        .then(() => {
            toast.success('Login realizado')
            history.push('/dashboard')
        })
        .catch(error => toast.error(error.message))
    }

    return (
        <UserContext.Provider value={{token, createUser, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, useUser}
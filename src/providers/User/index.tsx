import {createContext, useContext, useState, useCallback, ReactNode} from 'react'
import api from '../../services/api'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'

interface UserProviderProps {
    children: ReactNode
}

interface UserCreateProps {
    firstName: string
    lastName: string
    email: string
    password: string
    cell: string
    birthDate: string
}

interface UserLoginProps {
    email: string
    password: string
}

interface UserContextData {
    token: string
    createUser: (data:UserCreateProps) => Promise<void>
    loginUser: (data: UserLoginProps) => Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error ('teste')
    }

    return context
}

const UserProvider = ({children}:UserProviderProps) => {
    const [token, setToken] = useState<string>(localStorage.getItem('@MeuBairro:token') || '')
    const history = useHistory<unknown>()

    const createUser = useCallback(async (data: UserCreateProps) => {
        await api.post('user', data)
        .then(() => toast.success('Cadastro realizado'))
        .catch(() => toast.error('Algo deu errado'))
    },[])

    const loginUser = useCallback(async (data: UserLoginProps) => {
        await api.post('login', data)
        .then(() => {
            toast.success('Login realizado')
            history.push('/dashboard')
        })
        .catch(() => toast.error('Email ou Senha invalidos'))
    },[])

    return (
        <UserContext.Provider value={{token, createUser, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, useUser}

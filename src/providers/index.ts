import { ReactNode } from "react";

interface AppProviderProps {
    children : ReactNode
}

const Provider = ({children}: AppProviderProps) => {
    return (
            {children}
    )
}

export default Provider
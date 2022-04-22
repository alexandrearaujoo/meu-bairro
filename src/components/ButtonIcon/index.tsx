import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import {Button} from './style'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: IconType
}

const ButtonIcon = ({icon: Icon, ...rest}:ButtonIconProps) => {
    return (
        <Button {...rest}>
            <Icon />
        </Button>
    )
}

export default ButtonIcon
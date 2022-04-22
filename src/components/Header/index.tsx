import { useHistory } from 'react-router-dom'
import { Navbar, HeaderStyled} from './style'

const Header = () => {
    const history = useHistory<unknown>()

    return (
        <HeaderStyled>
            <Navbar>
                <div>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul>
                        <li><button onClick={() => history.push('/dashboard')}>Dashboard</button></li>
                        <li><button onClick={() => history.push('/search')}>Search</button></li>
                        <li><button onClick={() => history.push('/profile')}>Profile</button></li>
                    </ul>
                </div>
            </Navbar>
            LOGO
        </HeaderStyled>
    )
}

export default Header
import { Navbar, HeaderStyled} from './style'

const Header = () => {
    return (
        <HeaderStyled>
            <Navbar>
                <div>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </div>
            </Navbar>
            LOGO
        </HeaderStyled>
    )
}

export default Header
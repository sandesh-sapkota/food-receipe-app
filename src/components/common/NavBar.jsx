
import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 80 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" /> 
           <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
           <Menu.Item name="Register" as={Link} to="/Register" />
           <Menu.Item name="Log In" as={Link} to="/Login" />
           <Menu.Item name="Cart" as={Link} to="/Cart" />
        </Menu>
    )
}

export default NavBar;
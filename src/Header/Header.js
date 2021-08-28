import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import { AuthContext ,FirebaseContext } from '../store/FirebaseContext'


const Header = () => {

    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()

    const [{basket}] = useStateValue();
    console.log(basket);

    const handleSignOut =() =>{
        firebase.auth().signOut();
        history.push('/login')
    }

    return (
        <nav className="header">
            {/* logo */}
            <Link to="/">
                <img className="header-logo" src='/images/amazon_logo.png' alt="logo" />
            </Link>

            {/* input field */}
            <div className="header-search">
                <input type="text" className="header-searchInput" />
                <SearchIcon className="header-searchIcon" />
            </div>

            {/* nav options */}
            <div className="header-nav">
                <div className="header-link">
                   
                        <div className="header-option">
                            <span className="display-name">{user ? `Hi, ${user.displayName}` : 
                             <Link to="/login" className="header-link">Login</Link>}</span>
                        </div>
                    
                    <p className="header-option-one logout" onClick={handleSignOut}>{user && 'Logout'}</p>

                    <Link to="/" className="header-link">
                        <div className="header-option">
                            <span className="header-option-one">Returns</span>
                            <span className="header-option-two">& Orders</span>
                        </div>
                    </Link>

                    <Link to="/" className="header-link">
                        <div className="header-option">
                            <span className="header-option-one">Your</span>
                            <span className="header-option-two">Prime</span>
                        </div>
                    </Link>

                    <Link to="/checkout" className="header-link">
                        <div className="header-option-cart">
                            <ShoppingBasket />
                            <span className="header-option-two cart-count">{basket.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header

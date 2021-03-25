import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';  //special syntax in React for importing SVG
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import './header.style.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

//state is the root-reducer
const mapStateToProps = state => ({
    //it's the property that we pass in to 'Header'
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
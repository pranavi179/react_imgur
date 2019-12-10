import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../index.css';

// cd l
import Search from './search';



import '../App.css';


import Button from './Button';
export default class Navbar extends React.Component{
    render(){
        return(
            <nav className='navbar' >
                

                <div className = 'nav-left'>
              <h3 style={{color:'white'}}>imgur </h3>
                <Button content='New Post' color='rgb(34, 131, 34)' margin-right = '10px' style={{alignself:'flex-end'}} />
                 </div>
                <Search />
                <div className='nav-right'>
                    {/* <Icon type="message" style={{cursor:'pointer',alignSelf:'center'}} /> */}
                    <Button content='Sign in' color='rgb(61, 61, 61)' />
                    <Button content='Sign Up' color='rgb(34, 131, 34)' style={{alignSelf:'flex-end'}} />
                    
                </div>
            </nav>
        )
    }
}



// export default Navbar;
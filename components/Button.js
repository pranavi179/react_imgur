import React, { Component } from 'react';
class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button style={{backgroundColor:this.props.color}} onClick={this.props.handleFunction} className='button'>{this.props.content}</button>

         );
    }
}
 
export default Button;
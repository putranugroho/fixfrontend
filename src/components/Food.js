import React, { Component } from 'react'

const bgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
    backgroundSize: 'cover',
    alignSelf: 'stretch'
}

class Food extends Component{

    render(){
        return(
            <div style ={bgStyle}>
            </div>
        )
    }
}
export default Food
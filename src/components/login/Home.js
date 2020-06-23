import React, { Component } from 'react';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    showText = (email) => {
        return `Welcome ${email}!! You are successfully logged in.`;
    }

    render(){
        let { email } = this.props;
        return(
            <div className="container">
                {this.showText(email)}
            </div>
        )
    }
}
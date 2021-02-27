import React, { Component } from 'react';
import './App.css'

class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="personal-info">
                    <h5 className="about-me">About Me</h5>
                    <h2 className="philosophy">My philosophy is always to do your best and <b>never</b> give up.</h2>
                </div>
            </div>
        );
    }
}

export default Bottom;
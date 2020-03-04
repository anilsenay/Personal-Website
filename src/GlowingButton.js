import React, { Component } from 'react'

export default class GlowingButton extends Component {

    state = {
        isGlow:false,
        twitter:"https://twitter.com/anilsenay",
        instagram:"https://instagram.com/anilsenay",
        github:"https://github.com/anilsenay",
        linkedin:"https://linkedin.com/in/anılşenay"
    };

    toggleBox = () => {
        this.setState(prevState => ({ isGlow: !prevState.isGlow }));
    };

    render() {
        const { isGlow } = this.state;

        console.log(this.state['twitter']);
        return (
            <div className={`buttons-display ${isGlow ? "test": ""}`}
                onMouseEnter={() => {this.toggleBox()}}
                onMouseLeave={() => {this.toggleBox()}}>
                <a href={this.state[this.props.social]} className="buttons">
                    <div className="box" ><i className={`fab fa-${this.props.social} icon-margin`} aria-hidden="true"/>
                        <span>{this.props.text}</span>
                    </div>
                </a>
            </div> 
        )
    }
}

import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false};
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        return (
            <footer>
                <p id="noOfItems"></p>
                <button id="all"className="selected"onclick={this.toggle()}>ALL</button>
                <button id="active"onclick={this.toggle()}>ACTIVE</button>
                <button id="completed"onclick={this.toggle()}>COMPLETED</button>
            </footer>
        );
    }
}   
export default Footer;
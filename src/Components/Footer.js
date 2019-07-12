import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false};
    }
    toggle(event) {
        var elems = document.querySelectorAll(".selected");
        [].forEach.call(elems, function(el) {
            el.classList.remove(".selected");
        });
        var elem=event.target;
        elem.classList.add(".selected")
    }
    render() {
        let showAll=<button id="all"className="selected"onClick={this.toggle.bind(this)}>ALL</button>;
        let showAct=<button id="active"onClick={this.toggle.bind(this)}>ACTIVE</button>;
        let showComp=<button id="completed"onClick={this.toggle.bind(this)}>COMPLETED</button>
        return (
            <footer>
                {showAll}
                {showAct}
                {showComp}
            </footer>
        );
    }
}   
export default Footer;

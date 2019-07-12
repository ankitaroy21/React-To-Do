import React from 'react';
class CreateNote extends React.Component {
    constructor(props) { 
        super(props); 
        this.state={};
    } 
    render() {
        let checkBtn=<input type="checkbox"/>;
        let itemName=<span>{this.props.valueTo}</span>;
        let crossBtn=<span id="cross"><strong>X</strong></span>;
        return (
            <li>
                {checkBtn}
                {itemName}
                {crossBtn}
            </li>  
        );
    }
}
export default CreateNote;

import React from 'react';

class CreateNote extends React.Component {
    constructor(props) { 
        super(props); 
    } 
    render() {
        return (
            <li>
                <input type="checkbox"/>
                <span></span>
                <span id="cross"><strong>X</strong></span>
            </li>  
        );
    }
}
export default CreateNote;
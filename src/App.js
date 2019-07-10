import React from 'react';
import CreateNote from './Components/CreateNote';
import Footer from './Components/Footer';
class App extends React.Component 
{ 
    constructor(props) { 
        super(props); 
        this.state = { items: [], filter: '' }; 
    } 
    render() {
      return (
        <div>
          <h1>todos</h1>
          <span></span>
          <input type="text" id="root" placeholder="What needs to be done?"/>
          <input id="checkAll" className="checkBox" type="checkbox"/>
          <ul id="myList"><CreateNote /></ul>
          <Footer />
        </div>
      );
    }
}
export default App;
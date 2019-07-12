import React from 'react';
import CreateNote from './Components/CreateNote';
import Footer from './Components/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: '',
      inputText: '',
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    const { inputText, items } = this.state;
    if (inputText) {
      var newItem = {
        text: inputText
      };
      items.push(newItem);
      this.setState({ items });
    }
    e.preventDefault();
  }
  render() {
    const { items } = this.state;
    let checkAllBtn = <input id="checkAll" className="checkBox" type="checkbox" />;
    let inputBox = <input onInput={(e) => { this.setState({ inputText: e.target.value }); }} type="text" autoFocus={true} id="root" placeholder="What needs to be done?" />;
    let noOfItem = <p id="noOfItems">No of items {this.state.items.length}</p>;
    return (
      <div>
        <h1>todos</h1>
        <span>
          <form onSubmit={this.addItem}>
            {checkAllBtn}
            {inputBox}

          </form>
        </span>
        <ul id="myList">
          {
            items.map((i) => {
              return <CreateNote valueTo={i.text} />;
            })
          }
        </ul>
        {noOfItem}
        <Footer />
      </div>
    );
  }
}
export default App;

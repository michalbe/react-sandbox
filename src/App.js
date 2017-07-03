import React, { Component } from 'react';

import { ListElement } from './ListElement.js';
import { Parser } from './Parser.js';

import './App.css';

var text = "\
page 1\n\
  page 1.1\n\
  page 1.2\n\
    page 1.2.1\n\
page 2\n\
page 3\n\
  page 3.1\n\
  page 3.2\n\
page 4\n\
  page 4.1\n\
    page 4.1.1\n\
      page 4.1.1.1\n\
page 5\
"

class App extends Component {
  constructor(props) {
    super(props);
    this.parser = new Parser();
    this.state = { 
      text,
      data: this.parser.parse(text)
    };

    this.on_text_change = this.on_text_change.bind(this);
  }

  on_text_change(evt) {
    const text = evt.target.value;
    this.setState({
      text,
      data: this.parser.parse(text)
    })
  }

  render() {
    const rows = this.state.data.children.map((el) => {
      return <ListElement 
        title={ el.title } 
        children={ el.children } 
        key={ el.id } 
      />;
    });

    return (
      <div className="container">
        <textarea 
          value={ this.state.text } 
          onChange={ this.on_text_change } 
          className="input-form"
        ></textarea>
        <div className="rows">
          { rows }
        </div>
      </div>
    );
  }
}

export default App;

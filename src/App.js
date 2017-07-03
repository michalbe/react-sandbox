import React, { Component } from 'react';

import { ListElement } from './ListElement.js';
import { Parser } from './Parser.js';

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
    console.log(text);
    this.setState({
      cursor: this.state.cursor,
      text: text,
      data: this.parser.parse(text)
    })
    console.log(arguments);
  }

  render() {
    const rows = this.state.data.children.map((el) => {
      return <ListElement title={el.title} children={el.children} key={JSON.stringify(el)} />;
    });

    return (
      <div>
        {rows}
        <textarea value={ this.state.text } onChange={this.on_text_change} className="input"></textarea>
      </div>
    );
  }
}

export default App;

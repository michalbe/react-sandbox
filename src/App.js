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
  constructor() {
    super();
    this.parser = new Parser();
    this.data = this.parser.parse(text);
    console.log(this.data);
  }

  render() {
    const rows = this.data.children.map((el) => {
      return <ListElement title={el.title} children={el.children} key={JSON.stringify(el)} />;
    });

    console.log(rows);
    return (
      <div>{rows}</div>
    );
  }
}

export default App;

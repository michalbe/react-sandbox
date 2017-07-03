import React, { Component } from 'react';
import './ListElement.css';

export class ListElement extends Component {
  render() {
    const children = this.props.children.map((el) => {
        return <ListElement title={el.title} children={el.children} key={JSON.stringify(el)} />;
    });
    return (
      <details className="list-parent">
        <summary>{ this.props.title }</summary>
        <div className="children">
            {children}
        </div>
      </details>
    );
  }
}



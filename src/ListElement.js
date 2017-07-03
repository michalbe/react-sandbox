import React, { Component } from 'react';
import './ListElement.css';

export class ListElement extends Component {
  render() {
    const children = this.props.children.map((el) => {
        return <ListElement title={el.title} children={el.children} key={JSON.stringify(el)} />;
    });
    return (
      <div className="list-parent">
        { this.props.title }
        <div className="children">
            {children}
        </div>
      </div>
    );
  }
}



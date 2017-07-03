import React, { Component } from 'react';

export class ListElement extends Component {
  render() {
    const children = this.props.children.map((el) => {
        return <ListElement title={el.title} children={el.children} key={JSON.stringify(el)} />;
    });
    return (
      <div>
        { this.props.title }
        <div className="children">
            {children}
        </div>
      </div>
    );
  }
}



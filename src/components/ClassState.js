import React from 'react';

class ClassState extends React.Component {
  constructor() {
    super();
    this.state = {
      state: 'yes',
      style: '32'
    }
  }

  render() {
    let st = 'red';
    if (this.props.mStyle==='green') {
      st = 'green'
    }

    return (
      <div>
        <h1>Class - yes</h1>
        <h3 className={st}>State - {this.state.style}</h3>
        <p>{this.props.author}</p>
      </div>
    )
  }
}

export default ClassState;

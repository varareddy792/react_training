// import React, { useState } from 'react'

// export default function FormAndEventHandler() {

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleNameChange = (event) => {
//     const { value } = event.target;
//     setName(value);
//   }

//   const handleNumberChange = (event) => {
//     const { value } = event.target;
//     setNumber(value);
//   }

//   const handleSubmit = (event) => {
//     alert('Details submitted are: ' + name + " & " + number);
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <label>
//           Number:
//           <input type="number" value={number} onChange={handleNumberChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class FormAndEventHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }

  handleSubmit(event) {
    alert('Details submitted are: ' + this.state.name + " & " + this.state.number);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Number:
          <input type="number" value={this.state.number} onChange={this.handleNumberChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

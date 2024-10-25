import React from "react";
class UserComponent extends React.Component {
  state = {
    name: "Duy",
    age: 25,
    address: "HCM",
  };
  handleClick = () => {
    console.log("HELOOOOOOOOO", this.state);
    this.setState({
      name: "VU DUY",
      age: 18,
    });
  };
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Name</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Age</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserComponent;

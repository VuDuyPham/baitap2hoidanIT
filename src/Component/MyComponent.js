import React from "react";
import UserComponent from "./UserComponent";
class MyComponent extends React.Component {
  //   handleOnMoverOver(event) {
  //     console.log(event);
  //   }

  render() {
    return (
      <div>
        {/* <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click me
        </button> */}

        {/* <button onMouseOver={this.handleOnMoverOver}>hover me</button> */}
        <UserComponent />
      </div>
    );
  }
}
export default MyComponent;

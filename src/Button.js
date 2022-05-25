import React from "react";
class Button extends React.Component {
    render() {
      return (
        <button
          className="button-plus"
          id = {this.props.id}
          onClick={() => this.props.onClick()}
        >
          +
        </button>
      );
    }
  }
  export default Button;
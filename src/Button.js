import React from "react";


class Button extends React.Component {
    render() {
      return (
        <button  
          className="btn btn-outline-secondary btn-sm plus"
          id = {this.props.id}
          onClick={() => this.props.onClick()}
        >
          +
        </button>
      );
    }
  }
  export default Button;
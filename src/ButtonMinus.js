import React from "react";
class ButtonMinus extends React.Component {
    render() {
      return (
        <button
          className="btn btn-outline-secondary btn-sm minus"
          id = {this.props.id}
          onClick={() => this.props.onClick()}
        >
          -
        </button>
      );
    }
  }
  export default ButtonMinus;
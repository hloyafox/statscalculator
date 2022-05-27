import React from "react";
class ButtonClear extends React.Component {
    render() {
      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => this.props.onClick()}
        >
          Очистить
        </button>
      );
    }
  }
  export default ButtonClear;
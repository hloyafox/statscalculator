import React from "react";
class ButtonHint extends React.Component {
    render() {
      return (
        <button
          className="btn btn-info"
          onClick={() => this.props.onClick()}
        >
          Подсказка
        </button>
      );
    }
  }
  export default ButtonHint;
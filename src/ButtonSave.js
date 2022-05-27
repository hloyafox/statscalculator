import React from "react";
class ButtonSave extends React.Component {
    render() {
      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => this.props.onClick()}
        >
          Сохранить
        </button>
      );
    }
  }
  export default ButtonSave;
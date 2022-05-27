import React from "react";

class ButtonDownload extends React.Component {
    render() {
      return (
        <a
          className="btn btn-outline-primary"
          id = "download"
          href = {this.props.href}
          download = {this.props.download}
        >
          Cкачать
        </a>
      );
    }
  }
  export default ButtonDownload;
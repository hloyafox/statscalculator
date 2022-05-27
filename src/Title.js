import React from "react";
class Title extends React.Component {
    render() {
      return (
        <div style={this.props.style}>
        <h2
          className="allscore"
        >
        Количество очков: {this.props.value}, потрачено очков: {this.props.wasted}
        </h2>
        </div>
      );
    }
  }
  export default Title;
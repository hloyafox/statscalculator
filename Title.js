import React from "react";
class Title extends React.Component {
    render() {
      return (
        <h1
          className="allscore"
        >
        Количество очков: {this.props.value}
        </h1>
      );
    }
  }
  export default Title;
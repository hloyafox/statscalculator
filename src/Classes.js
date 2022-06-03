import React from "react";


class Classes extends React.Component {
    render() {
      return (
        <div className="mb-2 mt-2">
             
        <label>
          Выберете класс:
          <select className="form-select mt-2" value={this.props.classes} onChange={(event) => this.props.onChange(event)}>
            <option value="technical">Техничный</option>
            <option value="talant">Талантливый</option>
            <option value="spirit">Духовный</option>
            <option value="grammaton">Грамматон</option>
            <option value="soulinker">Соулинкер</option>
          </select>
        </label>
        &nbsp;&nbsp;<button className="btn btn-outline-secondary btn-sm" onClick = {() => this.props.onClick()}> Выбрать</button>
        
      </div> 

       );
    }
  }
  export default Classes;
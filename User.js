import React from "react"
import {cost} from './components/Math.js'
import BaseDefense from "./BaseDefense.js"

class User extends React.Component {
    constructor(props) { 
        super(props)
        this.state ={ point: 12}
        this.clickButton = this.clickButton.bind(this);
    }

    score(id) {
        let result = this.point - cost[id];
        return result;
    }
    
    newScore(id) {
        this.setState({
            point: this.score(id)
        })
    }

    clickButton(e) {
        e.preventDefault();
        let id = e.currentTarget.id;
        console.log(id);
        this.score(id);
        this.newScore(id);   
    }

    render() {
        return <div><h1>
            {this.state.point}
        </h1>
        <BaseDefense /></div>;
    }

    

}

export default User;
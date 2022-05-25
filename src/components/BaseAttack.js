import React from 'react';

class BaseAttack extends React.Component {
    constructor(props) { 
    super(props)
    this.state = {handAttack: 0,
    lagAttack: 0,
    gunAttack: 0
    }
    }
    render() {
        return <table>
            <thead>
            <tr>
            <th>Атака рукой</th>
            <th>Атака ногой</th>  
            <th>Атака оружием</th>
            </tr>
            </thead>
            <tbody>
            <tr>    
            <td>{this.state.handAttack}</td>
            <td>{this.state.lagAttack}</td>
            <td>{this.state.gunAttack}</td>
            </tr>
            </tbody>
        </table>
    }
    
}
export default BaseAttack;
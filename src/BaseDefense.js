import React from "react"
import Button from './Button'
import Title from "./Title"

class BaseDefense extends React.Component {    
    constructor(props) { 
        super(props)
        this.state = {
            allcost: 12,
            id: ['handDef',
            'legDef',
            'gunDef', 'handCounterattack',
            'legCounterattack',
            'gunCounterattack',
            'headAttack',
            'attackInEye',
            'elbowAttack',
            'kneeAttack',
            'headDef',
            'eyeDef',
            'elbowDef',
            'kneeDef',
            'series2b',
            'seriesSpecial',
            'distance',
            'headCounterattack',
            'eyeCounterattack',
            'elbowCounterattack',
            'kneeCounterattack'],
            count: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            cost: [1, 1, 1, 2.5, 2.5, 2.5, 2, 2, 2, 2, 1, 1, 1, 1, 1.5, 3, 2, 2.5, 2.5, 2.5, 2.5]
    }
       //this.clickButton = this.clickButton.bind(this);
    }

    renderButton(key) {
        return <Button id = {this.state.id[key]}
        onClick={() => this.handleClick(key)}/>
    }

    renderTitle() {
        return <Title value = {this.state.allcost} />
    }

    handleClick(i) {
        let allcost = this.state.allcost;
        if(allcost > 0) {
        const count = this.state.count.slice();
        const costs = this.state.cost.slice();
        count[i] = ++count[i];
        const newcost = allcost - costs[i];
        console.log(newcost);
        this.setState({count: count, allcost: newcost})
    } else {
        alert('Хренушки!');
    }

    }
    // count(id) {
    //     let m = this.state[id];
    //     let n = m+1;
    //     return n;
    // }

    // newPoint(id) {
    //     this.setState({
    //         [id]: this.count(id)
    //     })
    // }

    // clickButton(e) {
    //     e.preventDefault();
    //     let id = e.currentTarget.id;
    //     console.log(id);
    //     this.count(id);
    //     this.newPoint(id);   
    // }


    render() {
        return <div>
            <div>{this.renderTitle()}</div>
        <table>
            <thead>
                <tr>
                    <th>Защита от удара рукой</th>
                    <th>Защита от удара ногой</th>
                    <th>Защита от удара оружием</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.count[0]}</td>
                    <td>{this.state.count[1]}</td>
                    <td>{this.state.count[2]}</td>
                </tr>
                <tr>
                    <td>{this.renderButton(0)}</td>
                    <td>{this.renderButton(1)}</td>
                    <td>{this.renderButton(2)}</td>
                </tr>
            </tbody>
        
            <thead>
                <tr>
                    <th>Контрудар (рука)</th>
                    <th>Контрудар(нога)</th>
                    <th>Контрудар(оружие)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.count[3]}</td>
                    <td>{this.state.count[4]}</td>
                    <td>{this.state.count[5]}</td>
                </tr>
                <tr>
                    <td>{this.renderButton(3)}</td>
                    <td>{this.renderButton(4)}</td>
                    <td>{this.renderButton(5)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>Атака головой</th>
                    <th>Атака в глаза</th>
                    <th>Атака локтем</th>
                    <th>Атака коленом</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.count[6]}</td>
                    <td>{this.state.count[7]}</td>
                    <td>{this.state.count[8]}</td>
                    <td>{this.state.count[9]}</td>
                </tr>
                <tr>
                    <td>{this.renderButton(6)}</td>
                    <td>{this.renderButton(7)}</td>
                    <td>{this.renderButton(8)}</td>
                    <td>{this.renderButton(9)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>Защита от атаки головой</th>
                    <th>Защита от атаки в глаза</th>
                    <th>Защита от атаки локтем</th>
                    <th>Защита от атаки коленом</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.count[10]}</td>
                    <td>{this.state.count[11]}</td>
                    <td>{this.state.count[12]}</td>
                    <td>{this.state.count[13]}</td>
                </tr>
                <tr>
                    <td>{this.renderButton(10)}</td>
                    <td>{this.renderButton(11)}</td>
                    <td>{this.renderButton(12)}</td>
                    <td>{this.renderButton(13)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>Контрудар(голова)</th>
                    <th>Контрудар(глаза)</th>
                    <th>Контрудар(локоть)</th>
                    <th>Контрудар(колено)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.count[17]}</td>
                    <td>{this.state.count[18]}</td>
                    <td>{this.state.count[19]}</td>
                    <td>{this.state.count[20]}</td>
                </tr>
                <tr>
                    <td>{this.renderButton(21)}</td>
                    <td>{this.renderButton(22)}</td>
                    <td>{this.renderButton(23)}</td>
                    <td>{this.renderButton(24)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>Серия (2 базовых)</th>
                    <th>Серия (базовый+средний)</th>
                    <th>Разрыв дистанции</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.count[14]}</td>
                    <td>{this.state.count[15]}</td>
                    <td>{this.state.count[16]}</td>
                </tr>
                <tr>
                    <td>{this.renderButton(14)}</td>
                    <td>{this.renderButton(15)}</td>
                    <td>{this.renderButton(16)}</td>
                </tr>
            </tbody>
        </table>
        </div>
    }
}
export default BaseDefense;
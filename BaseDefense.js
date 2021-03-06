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

            'specialCounterattack',
            'distance'],
            count: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            cost: [1, 1, 1, 2.5, 2.5, 2.5, 2, 2, 2, 2, 1, 1, 1, 1, 1.5, 3, 2]
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
        const count = this.state.count.slice();
        const costs = this.state.cost.slice();
        let allcost = this.state.allcost;
        count[i] = ++count[i];
        const newcost = allcost - costs[i];
        console.log(newcost);
        this.setState({count: count, allcost: newcost})

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
                    <th>???????????? ???? ?????????? ??????????</th>
                    <th>???????????? ???? ?????????? ??????????</th>
                    <th>???????????? ???? ?????????? ??????????????</th>
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
                    <th>?????????????????? (????????)</th>
                    <th>??????????????????(????????)</th>
                    <th>??????????????????(????????????)</th>
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
                    <th>?????????? ??????????????</th>
                    <th>?????????? ?? ??????????</th>
                    <th>?????????? ????????????</th>
                    <th>?????????? ??????????????</th>
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
                    <th>???????????? ???? ?????????? ??????????????</th>
                    <th>???????????? ???? ?????????? ?? ??????????</th>
                    <th>???????????? ???? ?????????? ????????????</th>
                    <th>???????????? ???? ?????????? ??????????????</th>
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
                    <th>?????????? (2 ??????????????)</th>
                    <th>?????????? (??????????????+??????????????)</th>
                    <th>???????????? ??????????????????</th>
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
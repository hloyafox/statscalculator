import React from "react"
import Button from './Button'
import ButtonMinus from "./ButtonMinus"
import Title from "./Title"
import { Table } from "react-bootstrap"
import ButtonSave from "./ButtonSave"
import ButtonClear from "./ButtonClear"
import ButtonDownload from "./ButttonDownload"


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
            cost: [1, 1, 1, 2.5, 2.5, 2.5, 2, 2, 2, 2, 1, 1, 1, 1, 1.5, 3, 2, 2.5, 2.5, 2.5, 2.5],
            href: '',
            newStats: [],
            wasted: 0
    }
       //this.clickButton = this.clickButton.bind(this);
    }

    renderButton(key) {
        return <Button id = {this.state.id[key]}
        onClick={() => this.handleClick(key)}/>
    }

    renderButtonMinus(key) {
        return <ButtonMinus id = {this.state.id[key]}
        onClick={() => this.clickMinus(key)}/>
    }

    renderButtonClear(key) {
        return <ButtonClear
        onClick={() => this.clickClear()}/>
    }

    saveStats = () => {
        let counter = this.state.count.slice();
        let name = document.getElementsByTagName('th');
        let newStats = [];
        
        for(let i = 0; i < counter.length; i++) {
            if(counter[i] > 0) {
            let m = `${name[i].textContent}: ${counter[i]} \n`;
            console.log(m);
            newStats.push(m);
            } 
        }
        let w = `Потрачено очков: ${this.state.wasted}`;
        newStats.push(w);
        let file = new Blob([newStats], {type: 'text/plain'});
        let href = URL.createObjectURL(file);
        let href2 = href.toString()
        this.setState({newStats: newStats, href: href2});    
    }

    renderButtonSave() {
        return <ButtonSave id = 'save'
        onClick={() => this.saveStats()}
        />
    }

    renderButtonDownload() {
        return <ButtonDownload
        href = {this.state.href}
        download = "stats.txt"/>
    }

    renderTitle() {
        return <Title value = {this.state.allcost}
                wasted = {this.state.wasted}
                style={{position: 'sticky',
                        top: 0,
                        background: '#f5f5f5'}}/>
    }

    handleClick(i) {
        let allcost = this.state.allcost;
        const costs = this.state.cost.slice();
        let wast = this.state.wasted;
    if(allcost >= 0 && costs[i] <= allcost) {
        const count = this.state.count.slice();
        count[i] = ++count[i];
        const newcost = allcost - costs[i];
        const newWast = wast + costs[i]
        this.setState({count: count, allcost: newcost, wasted: newWast})
    } else if(allcost >=0 && costs[i] > allcost) {
        this.setState({allcost: allcost});
    } else  {
        this.setState({allcost: 0});
    }

    }

    clickMinus(i) {
        let allcost = this.state.allcost;
        const count = this.state.count.slice();
        let wast = this.state.wasted;
    if(allcost < 12 && count[i] > 0) {
        const costs = this.state.cost.slice();
        count[i] = --count[i];
        const newcost = allcost + costs[i];
        const newWast = wast - costs[i]
        this.setState({count: count, allcost: newcost, wasted: newWast})
    } else {
        this.setState({allcost: allcost});
    }
    }

    clickClear() {
        const count = this.state.count.slice();
        for(let i = 0; i < count.length; i++) {
            count[i] = 0;
        }
        this.setState({count: count, allcost: 12, newStats: [], wasted: 0});
    }
    
    render() {
            return <div>
            {this.renderTitle()}
        <Table striped bordered hover size="sm" id = "stats">
            <thead className= "table-light">
                <tr>
                <td><strong>Прием</strong></td>
                <td><strong>Количество</strong></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Защита от удара рукой</th>
                    <td>{this.state.count[0]}</td>
                    <td>{this.renderButton(0)} &nbsp;
                    {this.renderButtonMinus(0)}</td>
                </tr>
                <tr>    
                    <th>Защита от удара ногой</th>
                    <td>{this.state.count[1]}</td>
                    <td>{this.renderButton(1)} &nbsp;
                    {this.renderButtonMinus(1)}</td>
                </tr>
                <tr>
                    <th>Защита от удара оружием</th>
                    <td>{this.state.count[2]}</td>
                    <td>{this.renderButton(2)}  &nbsp;
                    {this.renderButtonMinus(2)}</td>
                </tr>
                <tr>
                    <th>Контрудар (рука)</th>
                    <td>{this.state.count[3]}</td>
                    <td>{this.renderButton(3)}  &nbsp;
                    {this.renderButtonMinus(3)}</td>
                </tr>
                <tr>
                    <th>Контрудар(нога)</th>
                    <td>{this.state.count[4]}</td>
                    <td>{this.renderButton(4)}  &nbsp;
                    {this.renderButtonMinus(4)}</td>
                    
                </tr>
                <tr>
                    <th>Контрудар(оружие)</th>
                    <td>{this.state.count[5]}</td>
                    <td>{this.renderButton(5)}  &nbsp;
                    {this.renderButtonMinus(5)}</td>
                </tr>
                <tr>
                    <th>Атака головой</th>
                    <td>{this.state.count[6]}</td>
                    <td>{this.renderButton(6)}  &nbsp;
                    {this.renderButtonMinus(6)}</td>
                </tr>
                <tr>
                    <th>Атака в глаза</th>
                    <td>{this.state.count[7]}</td>
                    <td>{this.renderButton(7)}  &nbsp;
                    {this.renderButtonMinus(7)}</td>
                </tr>
                <tr>
                    <th>Атака локтем</th>
                    <td>{this.state.count[8]}</td>
                    <td>{this.renderButton(8)}  &nbsp;
                    {this.renderButtonMinus(8)}</td>
                </tr>
                <tr>
                    <th>Атака коленом</th>                
                    <td>{this.state.count[9]}</td>
                    <td>{this.renderButton(9)}  &nbsp;
                    {this.renderButtonMinus(9)}</td>
                </tr>
                <tr>
                    <th>Защита от атаки головой</th>
                    <td>{this.state.count[10]}</td>
                    <td>{this.renderButton(10)}  &nbsp;
                    {this.renderButtonMinus(10)}</td>
                    
                </tr>
                <tr>
                    <th>Защита от атаки в глаза</th>
                    <td>{this.state.count[11]}</td>
                    <td>{this.renderButton(11)}  &nbsp;
                    {this.renderButtonMinus(11)}</td>
                </tr>
                <tr>
                    <th>Защита от атаки локтем</th>
                    <td>{this.state.count[12]}</td>
                    <td>{this.renderButton(12)}  &nbsp;
                    {this.renderButtonMinus(12)}</td>
                </tr>
                <tr>
                    <th>Защита от атаки коленом</th>
                    <td>{this.state.count[13]}</td>
                    <td>{this.renderButton(13)}  &nbsp;
                    {this.renderButtonMinus(13)}</td>
                </tr>
                <tr>
                    <th>Серия (2 базовых)</th>
                    <td>{this.state.count[14]}</td>
                    <td>{this.renderButton(14)}  &nbsp;
                    {this.renderButtonMinus(14)}</td>
                </tr>
                <tr>
                    <th>Серия (базовый+средний)</th>
                    <td>{this.state.count[15]}</td>
                    <td>{this.renderButton(15)}  &nbsp;
                    {this.renderButtonMinus(15)}</td>
                </tr>
                <tr>
                    <th>Разрыв дистанции</th>
                    <td>{this.state.count[16]}</td>
                    <td>{this.renderButton(16)} &nbsp;
                    {this.renderButtonMinus(16)}</td>
                </tr>
                <tr>
                    <th>Контрудар(голова)</th>
                    <td>{this.state.count[17]}</td>
                    <td>{this.renderButton(17)}  &nbsp;
                    {this.renderButtonMinus(17)}</td>
                </tr>
                <tr>
                    <th>Контрудар(глаза)</th>
                    <td>{this.state.count[18]}</td>
                    <td>{this.renderButton(18)}  &nbsp;
                    {this.renderButtonMinus(18)}</td>
                    
                </tr>
                <tr>                 
                    <th>Контрудар(локоть)</th>
                    <td>{this.state.count[19]}</td>
                    <td>{this.renderButton(19)}  &nbsp;
                    {this.renderButtonMinus(19)}</td>
                    
                </tr>
                <tr>
                    <th>Контрудар(колено)</th>
                    <td>{this.state.count[20]}</td>
                    <td>{this.renderButton(20)}  &nbsp;
                    {this.renderButtonMinus(20)}</td>
                </tr>
            </tbody>
        </Table>
        <div className = "mt-2 mb-4">{this.renderButtonSave()} &nbsp; {this.renderButtonClear()} &nbsp; {this.renderButtonDownload()}</div>
        </div>
    }
}
export default BaseDefense;
import React from "react"
import Button from './Button'
import ButtonMinus from "./ButtonMinus"
import Title from "./Title"
import { Table } from "react-bootstrap"
import ButtonSave from "./ButtonSave"
import ButtonClear from "./ButtonClear"
import ButtonDownload from "./ButttonDownload"
import ButtonHint from "./ButtonHint"
import Classes from "./Classes"
import hint from "./hint.jpg"


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
            wasted: 0,
            classes: '',
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

    renderButtonHint() {
        return <ButtonHint
        onClick={() => this.clickHint()}/>
    }

    renderDropdown () {
        return <Classes
        onClick = {() => this.handleSubmit()}
        onChange={(event) => this.handleChange(event)}
        value = {this.state.classes} 
        id = {this.state.classes}/>
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

    randomIndex(min, max) {
        let m = [];
        for (let i = 0; i < 14; i++) {
            let a = Math.floor(Math.random() * (max - min + 1)) + min;
            m.push(a);
        }
        console.log(m);
        return m;
    }

    generateStatsTalant() {
        let costs = this.state.cost;      
        let random = this.randomIndex(1, 21);
        for(let i = 0; i < random.length; i++) {
            let item = random[i];
            let allcosts = this.state.allcost;
            let counts = this.state.count.slice();
            let wastAll = this.state.wasted;
            if (allcosts >= 0 && costs[item] <= allcosts) {
                let price = costs[item];
                let newAllcost = allcosts - price;
                counts[item] = ++counts[item];
                let newWastAll = wastAll + price;
                this.setState({count: counts, allcost: newAllcost, wasted: newWastAll});
            }  else if(allcosts >=0 && costs[item] > allcosts) {
                break;
            }
        };

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

    clickHint () {
        let img = document.querySelector(".image");
        let btnHint = document.querySelector(".btn-info")
        if(img.style.display === "none") {
        img.style.display = "";
        btnHint.textContent = 'Скрыть'
        } else {
            img.style.display = "none";
            btnHint.textContent = 'Подсказка';
        }
        
    }

    clickClear() {
        let cl = this.state.classes;
        const count = this.state.count.slice();
        for(let i = 0; i < count.length; i++) {
            count[i] = 0;
        }
        if(cl === 'talant') {
        this.setState({count: count, allcost: 14, newStats: [], wasted: 0});
        } else if (cl === 'grammaton') {
            this.setState({count: count, allcost: 8, newStats: [], wasted: 0});
        } else {
            this.setState({count: count, allcost: 12, newStats: [], wasted: 0});
        }
    }

    handleChange(event) {
        let m = event.target.value;
    if (m === 'talant') {
        this.clickClear();
        let n = document.querySelector('#change');
        n.textContent = 'Сгененрировать';
        let minus = document.querySelectorAll('.minus');
        minus.forEach(element => {
             element.setAttribute('disabled', "");
            });
        let plus = document.querySelectorAll('.plus');
        plus.forEach(element => {
            element.setAttribute('disabled', "");
           });
            this.setState({classes: m, allcost: 14});
    } else if (m === 'grammaton') {
        this.clickClear();
            let n = document.querySelector('#change');
                n.textContent = 'Выбрать';
            let minus = document.querySelectorAll('.minus');
                minus.forEach(element => {
                    element.removeAttribute('disabled');
                });
        let plus = document.querySelectorAll('.plus');
            plus.forEach(element => {
                element.removeAttribute('disabled');
            });
        this.setState({classes: m, allcost: 8});
        
    } else {
        this.clickClear();
        let n = document.querySelector('#change');
        n.textContent = 'Выбрать';
        let minus = document.querySelectorAll('.minus');
        minus.forEach(element => {
             element.removeAttribute('disabled');
            });
        let plus = document.querySelectorAll('.plus');
        plus.forEach(element => {
            element.removeAttribute('disabled');
           });
        this.setState({classes: m, allcost: 12});
       }
    }
    
    handleSubmit(){

        let cl = this.state.classes;
        
        if (cl === "technical") {
            this.clickClear();
            console.log(cl);
        } else if (cl === "talant") {
            let n = document.querySelector('#change');
            n.textContent = 'Сгененрировать ещё';
            this.generateStatsTalant();
        } else if (cl === "spirit") {
            this.clickClear();
            console.log(cl);
        } else if (cl === "grammaton") {
            this.clickClear();
            this.setState({allcost: 8})
        } else if (cl === "soulinker") {
            this.clickClear();
            console.log(cl);
        }
        
    }
    
    render() {
            return <div>
            {this.renderTitle()}
            {this.renderDropdown()}
                        
        <Table striped bordered hover size="sm" id = "stats">
            <thead className= "table-light">
                <tr>
                <td><strong>Прием (цена)</strong></td>
                <td><strong>Кол-во</strong></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Защита от удара рукой ({this.state.cost[0]})</th>
                    <td>{this.state.count[0]}</td>
                    <td>{this.renderButton(0)}&nbsp;
                    {this.renderButtonMinus(0)}</td>
                </tr>
                <tr>    
                    <th>Защита от удара ногой ({this.state.cost[1]})</th>
                    <td>{this.state.count[1]}</td>
                    <td>{this.renderButton(1)}&nbsp;
                    {this.renderButtonMinus(1)}</td>
                </tr>
                <tr>
                    <th>Защита от удара оружием ({this.state.cost[2]})</th>
                    <td>{this.state.count[2]}</td>
                    <td>{this.renderButton(2)}&nbsp;
                    {this.renderButtonMinus(2)}</td>
                </tr>
                <tr>
                    <th>Контрудар (рука) ({this.state.cost[3]})</th>
                    <td>{this.state.count[3]}</td>
                    <td>{this.renderButton(3)}&nbsp;
                    {this.renderButtonMinus(3)}</td>
                </tr>
                <tr>
                    <th>Контрудар(нога) ({this.state.cost[4]})</th>
                    <td>{this.state.count[4]}</td>
                    <td>{this.renderButton(4)}&nbsp;
                    {this.renderButtonMinus(4)}</td>
                    
                </tr>
                <tr>
                    <th>Контрудар(оружие) ({this.state.cost[5]})</th>
                    <td>{this.state.count[5]}</td>
                    <td>{this.renderButton(5)}&nbsp;
                    {this.renderButtonMinus(5)}</td>
                </tr>
                <tr>
                    <th>Атака головой ({this.state.cost[6]})</th>
                    <td>{this.state.count[6]}</td>
                    <td>{this.renderButton(6)}&nbsp;
                    {this.renderButtonMinus(6)}</td>
                </tr>
                <tr>
                    <th>Атака в глаза ({this.state.cost[7]})</th>
                    <td>{this.state.count[7]}</td>
                    <td>{this.renderButton(7)}&nbsp;
                    {this.renderButtonMinus(7)}</td>
                </tr>
                <tr>
                    <th>Атака локтем ({this.state.cost[8]})</th>
                    <td>{this.state.count[8]}</td>
                    <td>{this.renderButton(8)}&nbsp;
                    {this.renderButtonMinus(8)}</td>
                </tr>
                <tr>
                    <th>Атака коленом ({this.state.cost[9]})</th>                
                    <td>{this.state.count[9]}</td>
                    <td>{this.renderButton(9)}&nbsp;
                    {this.renderButtonMinus(9)}</td>
                </tr>
                <tr>
                    <th>Защита от атаки головой ({this.state.cost[10]})</th>
                    <td>{this.state.count[10]}</td>
                    <td>{this.renderButton(10)}&nbsp;
                    {this.renderButtonMinus(10)}</td>
                    
                </tr>
                <tr>
                    <th>Защита от атаки в глаза ({this.state.cost[11]})</th>
                    <td>{this.state.count[11]}</td>
                    <td>{this.renderButton(11)}&nbsp;
                    {this.renderButtonMinus(11)}</td>
                </tr>
                <tr>
                    <th>Защита от атаки локтем ({this.state.cost[12]})</th>
                    <td>{this.state.count[12]}</td>
                    <td>{this.renderButton(12)}&nbsp;
                    {this.renderButtonMinus(12)}</td>
                </tr>
                <tr>
                    <th>Защита от атаки коленом ({this.state.cost[13]})</th>
                    <td>{this.state.count[13]}</td>
                    <td>{this.renderButton(13)}&nbsp;
                    {this.renderButtonMinus(13)}</td>
                </tr>
                <tr>
                    <th>Серия (2 базовых) ({this.state.cost[14]})</th>
                    <td>{this.state.count[14]}</td>
                    <td>{this.renderButton(14)}&nbsp;
                    {this.renderButtonMinus(14)}</td>
                </tr>
                <tr>
                    <th>Серия (базовый+средний) ({this.state.cost[15]})</th>
                    <td>{this.state.count[15]}</td>
                    <td>{this.renderButton(15)}&nbsp;
                    {this.renderButtonMinus(15)}</td>
                </tr>
                <tr>
                    <th>Разрыв дистанции ({this.state.cost[16]})</th>
                    <td>{this.state.count[16]}</td>
                    <td>{this.renderButton(16)}&nbsp;
                    {this.renderButtonMinus(16)}</td>
                </tr>
                <tr>
                    <th>Контрудар(голова) ({this.state.cost[17]})</th>
                    <td>{this.state.count[17]}</td>
                    <td>{this.renderButton(17)}&nbsp;
                    {this.renderButtonMinus(17)}</td>
                </tr>
                <tr>
                    <th>Контрудар(глаза) ({this.state.cost[18]})</th>
                    <td>{this.state.count[18]}</td>
                    <td>{this.renderButton(18)}&nbsp;
                    {this.renderButtonMinus(18)}</td>
                    
                </tr>
                <tr>                 
                    <th>Контрудар(локоть) ({this.state.cost[19]})</th>
                    <td>{this.state.count[19]}</td>
                    <td>{this.renderButton(19)}&nbsp;
                    {this.renderButtonMinus(19)}</td>
                    
                </tr>
                <tr>
                    <th>Контрудар(колено) ({this.state.cost[20]})</th>
                    <td>{this.state.count[20]}</td>
                    <td>{this.renderButton(20)}&nbsp;
                    {this.renderButtonMinus(20)}</td>
                </tr>
            </tbody>
        </Table>
        <div className = "mt-2 mb-4">{this.renderButtonSave()} &nbsp; {this.renderButtonClear()} &nbsp; {this.renderButtonDownload()}</div>
        <div className = "mt-2 mb-4">{this.renderButtonHint()}</div>
        <div className="image" style={{display: "none"}}>
        <img src={hint}></img>
    </div>
    </div>
    }
}
export default BaseDefense;
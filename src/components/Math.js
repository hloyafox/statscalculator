import User from "../User"

export const cost = {
    allcost: 12,
    handAttack: 0,
    lagAttack: 0,
    gunAttack: 0,
    handDef: 1,
    lagDef: 1,
    gunDef: 1
}

export function point(buttonId) {
    let user = new User();
    let result = user.point - cost[buttonId];
    return result;
}


import { fromJS } from "immutable";
// const {fromJS} = require('immutable')

export default function accessImmutableObject(object, array) {
    const immutableObj = fromJS(object);
    const valPath = immutableObj.getIn(array);
    return valPath;
}

// const example = accessImmutableObject({
//      name: {
//           first: "Guillaume",
//           last: "Salva"
//      }
// }, ['name', 'first'])

// console.log(example)

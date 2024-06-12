import { List } from "immutable";
export function getListObject(array) {
    return List(array);
}
export function addElementToList(list, element) {
    return appList = list.push(element)
}

// const immutableList = getListObject([1, 2, 3]);
// const updatedList = addElementToList(immutableList, 4);

// console.log(immutableList.toString()); 
// console.log(updatedList.toString()); 

import { List, Map } from "immutable"

export function concatElements(page1, page2){
    return List(page1).concat(List(page2))
}

export function mergeElements(page1, page2){
    return Map(page1).merge(Map(page2))
}

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedList = concatElements(array1, array2);
// console.log(concatenatedList.toString());


// const obj1 = { key1: 'value1', key2: 'value2' };
// const obj2 = { key2: 'newValue2', key3: 'value3' };
// const mergedList = mergeElements(obj1, obj2);
// console.log(mergedList.toString());
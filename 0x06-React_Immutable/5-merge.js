import { List, Map } from "immutable"

export function concatElements(page1, page2){
    const list1 = List(page1)
    const list2 = List(page2)
    return list1.concat(list2)
}

export function mergeElements(page1, page2){
    const map1 = Map(page1)
    const map2 = Map(page2)
    const mergedMap = map1.merge(map2); 
    return List(mergedMap.valueSeq())
}

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedList = concatElements(array1, array2);
// console.log(concatenatedList.toString());


// const obj1 = { key1: 'value1', key2: 'value2' };
// const obj2 = { key2: 'newValue2', key3: 'value3' };
// const mergedList = mergeElements(obj1, obj2);
// console.log(mergedList.toString());
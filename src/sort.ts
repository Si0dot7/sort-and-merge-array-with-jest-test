export type Input = number | string;

export function mergeArray<T extends Input>(arr1: T[],arr2: T[],arr3: T[]): T[]{
    return [...arr1,...arr2,...arr3]
}

export function quickSort<T extends Input>(arr: T[]): T[] {

    if(arr.length <= 1){
        return arr
    }
    
    const pivotIndex = Math.floor(arr.length / 2);
    // console.log(pivotIndex);  
    const pivot = arr[pivotIndex];
    
    const left: T[] = [];
    const middle: T[] = [];
    const right: T[] = [];
    
    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element === pivot) {
            middle.push(element);
        } else {
            right.push(element);
        }
    }
    
    return [...quickSort(left),...middle,...quickSort(right)];
}


// function sortNumber<T extends Input>(arr1: T[],arr2: T[],arr3: T[]): void{
//     console.log(quickSort(mergeArray(arr1,arr2,arr3)));
// }

// function sortString<T extends Input>(arr1: T[],arr2: T[],arr3: T[]): void{
//     console.log(quickSort(mergeArray(arr1,arr2,arr3)));
    
// }

// sortNumber([1,2,3],[5,6,7],[6,4,3])
// sortString(['table','milk','me'],['cat','dog','moodang'],['sun','moon','venut'])


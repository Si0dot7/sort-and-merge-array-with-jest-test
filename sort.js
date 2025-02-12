var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeArray(arr1, arr2, arr3) {
    return __spreadArray(__spreadArray(__spreadArray([], arr1, true), arr2, true), arr3, true);
}
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    // console.log(pivotIndex);  
    var pivot = arr[pivotIndex];
    var left = [];
    var middle = [];
    var right = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (element < pivot) {
            left.push(element);
        }
        else if (element === pivot) {
            middle.push(element);
        }
        else {
            right.push(element);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), middle, true), quickSort(right), true);
}
function sortNumber(arr1, arr2, arr3) {
    console.log(quickSort(mergeArray(arr1, arr2, arr3)));
}
function sortString(arr1, arr2, arr3) {
    console.log(quickSort(mergeArray(arr1, arr2, arr3)));
}
sortNumber([1, 2, 3], [5, 6, 7], [6, 4, 3]);
sortString(['table', 'milk', 'banana'], ['cat', 'dog', 'moodang'], ['sun', 'moon', 'venut']);

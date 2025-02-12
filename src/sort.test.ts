import { mergeArray, quickSort } from "./sort"

describe("mergeArray function", () => {
    test("must be able to merge number array", () => {
        expect(mergeArray([1, 2,3], [3, 4,6], [9,5,3])).toEqual([1,2,3,3,4,6,9,5,3]);
    });

    test("must be able to merge string array", () => {
        expect(mergeArray(["a", "b" , "c"], ["c", "d", "e"], ["g", "f", "e"])).toEqual(["a", "b", "c", "c", "d", "e", "g", "f", "e"]);
    });
});

describe("quickSort function", () => {
    test("the number must be in correct order", () => {
        expect(quickSort([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    });

    test("the string must be in correct order", () => {
        expect(quickSort(["cat", "dog", "moodang"])).toEqual(["cat", "dog", "moodang"]);
    });

    test("must be able to return space", () => {
        expect(quickSort([])).toEqual([]);
    });

    test("must be able to return itself", () => {
        expect(quickSort([555])).toEqual([555]);
    });
});

// test in terminal command: npm test
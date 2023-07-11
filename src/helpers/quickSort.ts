export const quickSort = (setOfNumbers: number[]): number[] => {
    if (setOfNumbers.length <= 1) {
        return setOfNumbers
    }
    const pivot: number = setOfNumbers[0]
    const leftArr: number[] = []
    const rightArr: number[] = []

    for (let i = 1; i < setOfNumbers.length; i++) {
        if (setOfNumbers[i] < pivot) {
            leftArr.push(setOfNumbers[i])
        } else {
            rightArr.push(setOfNumbers[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

//

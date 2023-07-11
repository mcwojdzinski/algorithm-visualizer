export const generateSetOfNumbers = (): number[] => {
    const numberArray: number[] = []

    while (numberArray.length < 100) {
        const randomNumber: number = Math.floor(Math.random() * 100) + 1
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber)
        }
    }

    return numberArray
}

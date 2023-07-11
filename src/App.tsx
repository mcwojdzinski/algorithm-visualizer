import './App.css'
import { Button } from './components/Button/Button.tsx'
import { Bar } from './components/Bar/Bar.tsx'
import { generateSetOfNumbers } from './helpers/generateSetOfNumbers.ts'
import { ChartWrapper } from './components/ChartWrapper/ChartWrapper.tsx'
import { Header } from './components/Header/Header.tsx'
import { useState } from 'react'
import { quickSort } from './helpers/quickSort.ts'

function App() {
    const [numbersArray, setNumbersArray] = useState<number[]>(
        generateSetOfNumbers()
    )

    const regenerateNumbers = () => {
        setNumbersArray(generateSetOfNumbers())
    }

    const runQuickSort = () => {
        setNumbersArray(quickSort(numbersArray))
    }

    return (
        <>
            <Header>Algorithm Visualizer</Header>
            <Button onClick={regenerateNumbers}>Generate your numbers</Button>
            <Button onClick={runQuickSort}>Quick sort</Button>
            <ChartWrapper>
                {numbersArray.map((number, index) => (
                    <Bar heightValue={number} key={index}>
                        {number}
                    </Bar>
                ))}
            </ChartWrapper>
        </>
    )
}

export default App

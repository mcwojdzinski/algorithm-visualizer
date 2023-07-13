import { useState, useEffect, ChangeEvent } from 'react'

import Controls from './components/Controls/Controls.tsx'
import Legends from './components/Legends/Legends'
import Bar from './components/Bar/Bar.tsx'

// Algorithms
import quickSort from './helpers/algorithms/quickSort.ts'
import styled from 'styled-components'

const Wrapper = styled.main`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    @media (min-width: 768px) {
        justify-content: center;
    }
`

const Header = styled.h1`
    font-size: 25px;
    color: white;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin: 10px;

    @media (min-width: 768px) {
        font-size: 40px;
        margin: 15px;
    }
`

const App = () => {
    const [algo, setAlgo] = useState<string>('quickSort')
    const [len, setLength] = useState<number>(30)
    const [blocks, setBlocks] = useState<number[]>([])
    const [sorting, setSorting] = useState<boolean>(false)
    const [completed, setCompleted] = useState<boolean>(true)
    const [speed, setSpeed] = useState<number>(250)
    const [compare, setCompare] = useState<(number | null)[]>([])
    const [swap, setSwap] = useState<(number | null)[]>([])
    const [sortedIndex, setSortedIndex] = useState<number[]>([])

    // Generating shuffled array from 1 to chosen length
    const generateRandomArray = (len: number) => {
        setCompleted(false)
        setSorting(false)
        setSortedIndex([])

        const randomArray: number[] = Array.from(Array(len + 1).keys()).slice(1)

        for (let i = randomArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i - 1))
            const temp = randomArray[i]

            randomArray[i] = randomArray[randomIndex]
            randomArray[randomIndex] = temp
        }

        setBlocks(randomArray)
    }

    // Generating random array every time the length is changed by th user
    useEffect(() => {
        generateRandomArray(len)
    }, [len, algo])

    // setting the selected algorithm
    const handleAlgo = (event: ChangeEvent<HTMLSelectElement>) => {
        setAlgo(event.target.value)
    }

    // handling the length of the array
    const handleLength = (event: ChangeEvent<HTMLInputElement>) => {
        setLength(Number(event.target.value))
    }

    // handling the speed of sorting
    const handleSpeed = (event: ChangeEvent<HTMLInputElement>) => {
        setSpeed(Math.ceil(400 / Number(event.target.value)))
    }

    // Sorting according to the algorithm
    const handleSort = () => {
        const sortAccOrder = (
            order: Array<
                [number | null, number | null, number[] | null, number | null]
            >
        ) => {
            ;(function loop(i: number) {
                setTimeout(function () {
                    const [j, k, arr, index] = order[i]
                    setCompare([j, k])
                    setSwap([])

                    if (index !== null) {
                        setSortedIndex((prevState: number[]): number[] => {
                            return [...prevState, index]
                        })
                    }

                    if (arr) {
                        setBlocks(arr)
                        if (j !== null || k != null) setSwap([j, k])
                    }

                    if (++i < order.length) {
                        loop(i)
                    } else {
                        setSorting(false)
                        setCompleted(true)
                    }
                }, speed)
            })(0)
        }

        setSorting(true)

        algo === 'quickSort'
            ? sortAccOrder(quickSort(blocks))
            : (() => {
                  setSorting(false)
                  setCompleted(true)
              })()
    }

    return (
        <Wrapper>
            <Header>Sorting algorithm visualization </Header>
            <Controls
                generateRandomArray={() => generateRandomArray(len)}
                handleLength={handleLength}
                handleSpeed={handleSpeed}
                handleAlgo={handleAlgo}
                handleSort={handleSort}
                sorting={sorting}
                completed={completed}
                len={len}
                speed={speed}
                algo={algo}
            />

            <Bar
                blocks={blocks}
                compare={sorting && compare}
                swap={sorting && swap}
                sorted={sortedIndex}
            />

            <Legends />
        </Wrapper>
    )
}

export default App

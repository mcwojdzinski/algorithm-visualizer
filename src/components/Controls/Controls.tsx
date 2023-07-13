import './Navbar.css'
import { ControlsProps } from './ControlsTypes.ts'
import {
    Button,
    ControlsWrapper,
    Label,
    Select,
    ControlsGroup,
} from './ControlsUi.tsx'

const Controls = ({
    handleLength,
    handleSpeed,
    handleAlgo,
    generateRandomArray,
    handleSort,
    sorting,
    completed,
    len,
    speed,
    algo,
}: ControlsProps) => {
    return (
        <ControlsWrapper>
            <ControlsGroup>
                <Label>Speed: {speed}</Label>
                <input
                    type="range"
                    onChange={handleSpeed}
                    min="1"
                    max="10"
                    value={Math.ceil(400 / speed)}
                    disabled={sorting}
                ></input>
            </ControlsGroup>

            <ControlsGroup className="group length">
                <Label>Length: {len}</Label>
                <input
                    type="range"
                    onChange={handleLength}
                    min="5"
                    max={100}
                    step="1"
                    disabled={sorting}
                    value={len}
                ></input>
            </ControlsGroup>

            <Select onChange={handleAlgo} disabled={sorting} value={algo}>
                <option value="bubbleSort" disabled>
                    Bubble Sort
                </option>
                <option value="insertionSort" disabled>
                    Insertion Sort
                </option>
                <option value="selectionSort" disabled>
                    Selection Sort
                </option>
                <option value="mergeSort" disabled>
                    Merge Sort
                </option>
                <option value="quickSort">Quick Sort</option>
            </Select>

            <div>
                <Button onClick={generateRandomArray} disabled={sorting}>
                    Randomize
                </Button>
                <Button onClick={handleSort} disabled={sorting || completed}>
                    Sort
                </Button>
            </div>
        </ControlsWrapper>
    )
}

export default Controls

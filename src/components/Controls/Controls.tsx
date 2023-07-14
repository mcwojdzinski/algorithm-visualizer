// Ui
import {
    Button,
    ControlsWrapper,
    Label,
    Select,
    ControlsGroup,
    ButtonWrapper,
    ControlsSliders,
} from './ControlsUi.tsx'

// Interface
import { ControlsProps } from './ControlsTypes.ts'

const Controls = ({
    handleLength,
    handleSpeed,
    handleAlgo,
    generateRandomArray,
    handleSort,
    handleStop,
    sorting,
    completed,
    len,
    speed,
    algo,
}: ControlsProps) => {
    return (
        <ControlsWrapper data-testid="controls">
            <ControlsSliders>
                <ControlsGroup>
                    <Label htmlFor="speed">Speed: {speed} ms</Label>
                    <input
                        id="speed"
                        type="range"
                        onChange={handleSpeed}
                        min="1"
                        max="10"
                        value={Math.ceil(400 / speed)}
                        disabled={sorting}
                    ></input>
                </ControlsGroup>

                <ControlsGroup>
                    <Label htmlFor="length">Length: {len}</Label>
                    <input
                        id="length"
                        type="range"
                        onChange={handleLength}
                        min="5"
                        max={100}
                        step="1"
                        disabled={sorting}
                        value={len}
                    ></input>
                </ControlsGroup>
            </ControlsSliders>
            <ControlsGroup>
                <Select
                    data-testid="algorithm"
                    onChange={handleAlgo}
                    disabled={sorting}
                    value={algo}
                >
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
            </ControlsGroup>

            <ButtonWrapper>
                <Button onClick={generateRandomArray} disabled={sorting}>
                    Randomize
                </Button>
                <Button onClick={handleSort} disabled={sorting || completed}>
                    Sort
                </Button>
                <Button onClick={handleStop} warning={true} disabled={!sorting}>
                    Stop
                </Button>
            </ButtonWrapper>
        </ControlsWrapper>
    )
}

export default Controls

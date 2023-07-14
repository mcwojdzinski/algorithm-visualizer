import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Controls from './Controls'

test('renders the Controls component and handles user interactions', () => {
    const mockHandlers = {
        handleLength: jest.fn(),
        handleSpeed: jest.fn(),
        handleAlgo: jest.fn(),
        generateRandomArray: jest.fn(),
        handleSort: jest.fn(),
        handleStop: jest.fn(),
    }

    const { getByTestId, getByLabelText, getByText } = render(
        <Controls
            {...mockHandlers}
            sorting={false}
            completed={true}
            len={30}
            speed={250}
            algo="quickSort"
        />
    )

    const controlsComponent = getByTestId('controls')
    expect(controlsComponent).toBeInTheDocument()

    // Length input change
    fireEvent.change(getByLabelText('Length: 30'), { target: { value: '40' } })
    expect(mockHandlers.handleLength).toHaveBeenCalledTimes(1)

    // Speed input change
    fireEvent.change(getByLabelText('Speed: 250 ms'), {
        target: { value: '6' },
    })
    expect(mockHandlers.handleSpeed).toHaveBeenCalledTimes(1)

    // Algorithm select change
    fireEvent.change(getByTestId('algorithm'), {
        target: { value: 'bubbleSort' },
    })
    expect(mockHandlers.handleAlgo).toHaveBeenCalledTimes(1)

    // Randomize button click
    fireEvent.click(getByText('Randomize'))
    expect(mockHandlers.generateRandomArray).toHaveBeenCalledTimes(1)

    // Sort button click
    fireEvent.click(getByText('Sort'))
    expect(mockHandlers.handleSort).toHaveBeenCalledTimes(0)

    // Stop button click
    fireEvent.click(getByText('Stop'))
    expect(mockHandlers.handleStop).toHaveBeenCalledTimes(0)
})

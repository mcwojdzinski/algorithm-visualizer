import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bar from './Bar'

test('renders the Bar component with correct bars', () => {
    const blocks = [5, 3, 7, 2, 6]
    const compare = [1, 2]
    const sorted = [0, 3]
    const swap = [2, 4]

    const { getByTestId, getByText } = render(
        <Bar blocks={blocks} compare={compare} sorted={sorted} swap={swap} />
    )

    const barComponent = getByTestId('bar')
    expect(barComponent).toBeInTheDocument()

    // Verify the rendering of individual bars
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
})

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders the App component', () => {
    const { getByText, getByTestId } = render(<App />)

    const headerElement: HTMLElement = getByText(
        'Sorting algorithm visualization'
    )
    const controlsComponent: HTMLElement = getByTestId('controls')
    const barComponent: HTMLElement = getByTestId('bar')
    const legendsComponent: HTMLElement = getByTestId('legends')

    expect(headerElement).toBeInTheDocument()
    expect(controlsComponent).toBeInTheDocument()
    expect(barComponent).toBeInTheDocument()
    expect(legendsComponent).toBeInTheDocument()
})

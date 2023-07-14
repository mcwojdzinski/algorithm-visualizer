import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Legends from './Legends'

test('renders the Legends component', () => {
    const { getByTestId } = render(<Legends />)
    const legendsComponent = getByTestId('legends')

    expect(legendsComponent).toBeInTheDocument()
})

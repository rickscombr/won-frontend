import { render, screen } from '@testing-library/react'

import TextContent from '.'

describe('<TextContent />', () => {
    it('shouder render the heading', () => {
        const { container } = render(<TextContent />)

        expect(
            screen.getByRole('heading', { name: /TextContent/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})

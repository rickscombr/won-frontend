import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
    it('shouder render with label', () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="myLabel" />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            'for',
            'myLabel'
        )
    })

    it('shouder render without label', () => {
        renderWithTheme(<Checkbox />)

        expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
    })

    it('shouder render with black label', () => {
        renderWithTheme(
            <Checkbox
                label="checkbox label"
                labelFor="myLabel"
                labelColor="black"
            />
        )

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({
            color: theme.colors.black
        })
    })

    it('shouder dispatch onCheck when status changes', async () => {
        const onCheck = jest.fn()

        renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)

        expect(onCheck).not.toHaveBeenCalled()

        userEvent.click(screen.getByRole('checkbox'))
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1)
        })

        expect(onCheck).toHaveBeenCalledWith(true)
    })

    it('shouder dispatch onCheck when status changes', async () => {
        const onCheck = jest.fn()

        renderWithTheme(
            <Checkbox label="Checkbox" onCheck={onCheck} isChecked />
        )

        userEvent.click(screen.getByRole('checkbox'))
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1)
        })
        expect(onCheck).toHaveBeenCalledWith(false)
    })

    it('shouder be accessible with TAB', async () => {
        renderWithTheme(<Checkbox label="Checkbox" labelFor="checkbox" />)

        expect(document.body).toHaveFocus()
        userEvent.tab()
        expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
    })
})

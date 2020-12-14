import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
    it('should render the form', () => {
        const { container } = renderWithTheme(<FormSignUp />)

        expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Confirm password')
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /sign up/i })
        ).toBeInTheDocument()

        expect(container.parentElement).toMatchSnapshot()
    })

    it('should render text to sign in if already have an account', () => {
        renderWithTheme(<FormSignUp />)

        expect(
            screen.getByRole('link', { name: /sign in/i })
        ).toBeInTheDocument()
        expect(
            screen.getByText(/already have an account\?/i)
        ).toBeInTheDocument()
    })
})

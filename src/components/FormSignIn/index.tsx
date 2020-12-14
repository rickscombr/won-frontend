import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

import * as S from './style'

const FormSignIn = () => (
    <FormWrapper>
        <form>
            <TextField
                name="txtEmail"
                placeholder="E-Mail"
                type="email"
                icon={<Email />}
            />
            <TextField
                name="txtPassword"
                placeholder="Password"
                type="password"
                icon={<Lock />}
            />
            <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

            <Button size="large" fullWidth>
                Sign In
            </Button>

            <FormLink>
                Don’t have an account?
                <Link href="/sign-up">
                    <a>Sign up</a>
                </Link>
            </FormLink>
        </form>
    </FormWrapper>
)

export default FormSignIn

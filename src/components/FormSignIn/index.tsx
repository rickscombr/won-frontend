import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './style'

const FormSignIn = () => (
    <S.Wrapper>
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

            <S.FormLink>
                Don’t have an account?
                <Link href="/sign-up">
                    <a>Sign up</a>
                </Link>
            </S.FormLink>
        </form>
    </S.Wrapper>
)

export default FormSignIn

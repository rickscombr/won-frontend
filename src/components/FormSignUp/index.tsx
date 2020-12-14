import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
    <FormWrapper>
        <form>
            <TextField
                name="txtName"
                placeholder="Full Name"
                type="name"
                icon={<AccountCircle />}
            />
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
            <TextField
                name="txtConfirm"
                placeholder="Confirm password"
                type="password"
                icon={<Lock />}
            />

            <Button size="large" fullWidth>
                Sign up
            </Button>

            <FormLink>
                Already have an account?
                <Link href="/sign-in">
                    <a>Sign in</a>
                </Link>
            </FormLink>
        </form>
    </FormWrapper>
)

export default FormSignUp

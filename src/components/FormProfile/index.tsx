import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './style'

const FormProfile = () => (
    <>
        <Heading lineBottom color="black" size="small">
            My Profile
        </Heading>

        <S.Form>
            <TextField
                name="txtName"
                placeholder="Name"
                label="Name"
                initialValue="John Doe"
            />
            <TextField
                name="txtEmail"
                placeholder="E-mail"
                label="E-mail"
                initialValue="john-doe@gmail.com"
                disabled
            />
            <TextField
                name="txtPassword"
                type="password"
                placeholder="Type your password"
                label="Password"
            />
            <TextField
                name="txtNewPassword"
                type="password"
                placeholder="Type your new password"
                label="New Password"
            />

            <Button size="large">Save</Button>
        </S.Form>
    </>
)

export default FormProfile

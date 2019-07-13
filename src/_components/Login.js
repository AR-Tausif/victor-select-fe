import React from 'react'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import { AuthConsumer } from '../Auth/authContext'

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <Button
        variant="outlined"
        color="primary"
        align="center"
        onClick={initiateLogin}
      >
        <LockIcon />
        Login
      </Button>
    )}
  </AuthConsumer>
)

export default Login

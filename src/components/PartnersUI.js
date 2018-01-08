import React from 'react'
import { Row, Col } from 'antd'
import WrappedHorizontalLoginForm from './partners/LoginForm'
import RegistrationForm from './partners/RegistrationForm'

const Partners = () => (
  <div>
    <Row>
      <Col span={11}>
        <h2>Sign up</h2>
        <RegistrationForm />
      </Col>
      <Col offset={1} span={11}>
        <h2>Login</h2>
        <WrappedHorizontalLoginForm />
      </Col>
    </Row>
  </div>
)

export default Partners

import React,{ Fragment, useState} from 'react';
import { Alert, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(true)

    const login = user =>{ console.log(user)};

    const error = ''
    console.log(error);

    const onFinish = e => {
        login({userName, password, remember});
      };
  return (
    <Fragment>
        <div className="wrapper">
            <div className="form-wrapper">      
                <h1>INICIAR SESIÓN</h1>
                <Form
                    name="form_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    //onSubmit={onSubmit}
                >
                <Form.Item
                    name="userName"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su nombre de usuario!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
                </Form.Item>
                <Form.Item
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese una contraseña!',
                    },
                    ]}
                >
                    <Input.Password 
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item 
                    name="remember" 
                    value={remember}
                    noStyle>
                    <Checkbox checked={remember} onChange={e => setRemember(Boolean(e.target.checked))}>Recordar</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Olvidó su contraseña
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Iniciar sesión
                    </Button>
                    <a href="/register"> Registrarse!</a>
                </Form.Item>
                </Form>
                {
                    error?
                    <Alert message={error} type="error" />:''
                }
            </div>
        </div>        
    </Fragment>
  );
};
export default LoginForm;
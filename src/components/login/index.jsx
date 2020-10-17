import React,{ Fragment, useState} from 'react';
import { Alert, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AxiosClient from '../../config/axios'

const LoginForm = (props) => {
    const [account, setAccount] = useState({ 
        userName: '', 
        password: ''
    })
    const { userName, password } = account;

    const [error, setError] = useState('')

    const onChangeHandle = e => {
        setAccount({
            ...account,
            [e.target.name] : e.target.value
        });
    }

    const login = async () => { 
        try {
            const response = await AxiosClient.post('api/auth/login', account);
            props.history.push('/customers');
        } catch (error) {
            setError(error.response.data.message);
        }
    };


    const onFinish = e => {
        login();
    };

    const onFinishFailed = e => {
        console.log('Error en el login');
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
                    onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    name="userName"
                    value={userName}
                    onChange={onChangeHandle}
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su nombre de usuario!',
                    },
                    ]}
                >
                    <Input name="userName" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
                </Form.Item>
                <Form.Item
                    name="password"
                    value={password}
                    onChange={onChangeHandle}
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese una contraseña!',
                    },
                    ]}
                >
                    <Input.Password 
                        name="password"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
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
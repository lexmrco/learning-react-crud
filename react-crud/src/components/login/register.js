import React,{ Fragment, useState} from 'react';
import { Alert, Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterForm = () => {
    const [user, setUser] = useState({
      name: '',
      emailAddress: '',
      password: '',
    })

    const login = () =>{ console.log(user)};

    const { name, emailAddress, password } = user;

    const error = ''

    const onChangeHandle = e => {
      setUser({
        ...user,
        [e.target.name] : e.target.value
      });
    }
    const onSubmit = e => {
        console.log('onSubmit');

        e.preventDefault();
        // Validar formulario

        // 

        // Consultar Login
        login();
    }
    const onFinish = e => {
        login();
      };
  return (
    <Fragment>
        <div className="wrapper">
            <div className="form-register-wrapper">      
                <h1>Registrarse</h1>
                <Form
                  {...layout}
                  name="form_login"
                  className="login-form"
                  initialValues={{
                      remember: true,
                  }}
                  onFinish={onFinish}
                  //onSubmit={onSubmit}
                >
                  <Form.Item
                    name="name"
                    label="Nombre de usuario:"
                    value={name}
                    onChange={onChangeHandle}
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su nombre de usuario!',
                    },
                    ]}
                >
                  <Input name="name" id="name" placeholder="Usuario" />
                </Form.Item>
                <Form.Item
                    name="emailAddress"
                    label="Correo electrónico:"
                    value={emailAddress}
                    onChange={onChangeHandle}
                    rules={[
                    {
                      type: 'email',
                      message: 'Dirección de correo electrónico no válido!',
                    },
                    {
                        required: true,
                        message: 'Ingrese su correo elctrónico!',
                    },
                    ]}
                >
                    <Input 
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Correo electrónico" 
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Contraseña:"
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
                      id="password"
                      placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item
                    name="password2"
                    label="Repita la Contraseña"
                    rules={[
                    {
                        required: true,
                        message: 'Repira la contraseña!',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
          
                        return Promise.reject('Las contraseñas no coinciden!');
                      },
                    }),
                    ]}
                >
                    <Input.Password 
                      name="password2"
                      id="password2"
                      placeholder="Repita la Contraseña"
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Guardar
                    </Button>
                    <a href="/">Iniciar sesión!</a>
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
export default RegisterForm;
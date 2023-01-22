import { Fragment, useState } from "react";
import { Row, Form, Button, InputGroup, Spinner, Col } from "react-bootstrap";
import * as Yup from 'yup';
import {  Formik } from "formik";
import axios from "axios";
import Url from '../../common/Url';
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {


    const [toastLoading, setToastLoading] = useState(null);
    

    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('El email es requerido').email('Debe ser de formato Correo'),
        password: Yup.string().required('El password es requerido')
    });




    const initialValues = {
        email: '',
        password: ''
    }
    const handleSubmit = (value) => {
        setToastLoading(toast.loading("Cargando"));
        axios.post(`${Url()}/api/account/login`, value).then(r => {
            if (r.status === 200) {
                localStorage.setItem('token', JSON.stringify(r.data));
                toast.success("Logueado con exito");
                router.push('/');
                
            }
        })
        .catch(e => {
            toast.error("Credenciales no validas");
            console.log(e);
        }).finally(() => toast.dismiss(toastLoading));
    }
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group>
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="mail"
                                        name="email"
                                        values={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </InputGroup>


                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    name="password"
                                    values={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid"
                                >
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col>
                                <Button id="botonLogin" type="submit">
                                    Log In
                                </Button>
                            </Col>
                            <Toaster />


                        </Row>


                    </Form>
                )}
            </Formik>
        </Fragment>
    )
}

export default Login;
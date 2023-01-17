import { Fragment, useState } from "react";
import { Row, Form, Col, Button, InputGroup } from "react-bootstrap";
import * as Yup from 'yup';
import { ErrorMessage, Formik } from "formik";

const Login = (props) => {



    const validationSchema = Yup.object().shape({
        email: Yup.string().required('El email es requerido').email('Debe ser de formato Correo'),
        password: Yup.string().required('El password es requerido')
    });


    const initialValues = {
        email: '',
        password: ''
    }
    const handleSubmit = () => {
        props.onSubmit();
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
                            <Button id = "botonLogin" type="submit">
                                Log In
                            </Button>
                        </Row>


                    </Form>
                )}
            </Formik>
        </Fragment>
    )
}

export default Login;
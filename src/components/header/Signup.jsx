import React from "react";
import Button from "../header/button";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { signUpSchema } from "../header/schemas/index";

import "../header/buttonStyle/Style.css";
import Inputfield from "../header/Inputfield";

const initialValues = {
    username: "",
    displayname: "",
    password: ""
};

function Signup() {
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div>
            <Formik>
                <form onSubmit={handleSubmit} className="text-center">
                    <h1 className="mt-5 fw-semibold">Signup</h1> <br />

                    <label htmlFor="username" className="fw-semibold">Username:</label><br />
                    <Inputfield
                        placeholder={"username"}
                        name={"username"}
                        id={"username"}
                        value={values.username}

                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        style={{ marginBottom: errors.username && touched.username ? "5px" : "15px" }}

                    />
                    {errors.username && touched.username ? (
                        <p className="form-error" style={{ margin: "5px 0" }}>{errors.username}</p>
                    ) : null}
                    <br />

                    <label htmlFor="displayname" className="fw-semibold">Display Name:</label><br />
                    <Inputfield
                        placeholder={"displayname"}
                        name={"displayname"}
                        id={"displayname"}
                        value={values.displayname}

                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        style={{ marginBottom: errors.displayname && touched.displayname ? "5px" : "15px" }}

                    />
                    {errors.displayname && touched.displayname ? (
                        <p className="form-error" style={{ margin: "5px 0" }}>{errors.displayname}</p>
                    ) : null}
                    <br />

                    <label htmlFor="password" className="fw-semibold">Password:</label><br />
                    <Inputfield
                        placeholder={"Password"}
                        name={"password"}
                        id={"password"}
                        value={values.password}

                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        style={{ marginBottom: errors.password && touched.password ? "5px" : "15px" }}

                    />
                    {errors.password && touched.password ? (
                        <p className="form-error" style={{ margin: "5px 0" }}>{errors.password}</p>
                    ) : null}
                    <br />

                    <div>
                        <Button title={'Signup'} />
                        <Link to="../Login" className="loglink">Login</Link>
                    </div>
                </form>
            </Formik>
        </div>
    );
}

export default Signup;

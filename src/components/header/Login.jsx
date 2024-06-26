

import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { signUpSchema } from "../header/schemas/index";
import "../header/buttonStyle/Style.css";
import Inputfield from "./Inputfield"; 

const initialValues = {
    username: "",
    password: ""
};



function Login() {
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
                    <h1 className="mt-5 fw-semibold">Login</h1> <br />

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
                    <Button title={"Login"} />
                
                        <Link to="../Signup" className="loglink">Signup</Link>
                    </div>
                </form>
            </Formik>
        </div>
    );
}

export default Login;


//modal
{/* <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button> */}

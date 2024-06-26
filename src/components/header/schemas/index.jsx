import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please Enter your Username"),
    displayname: Yup.string().min(2).max(25).required("Please Enter your Displayname"),
    password: Yup.string().required("Please Enter Password")
});   
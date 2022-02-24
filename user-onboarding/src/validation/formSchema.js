import * as yup from 'yup'; 


const formSchema = yup.object().shape({
username: yup
.string()
.trim()
.required('Username is required to create profile!')
.min(3, 'Username needs to contain at least 3 characters!' ), 
email: yup
.string()
.email('Valid Email is required')
.required('Email is required'), 
password: yup
.string()
.required('Password is required!')
.min(7, 'Password must be 6 characters long'),

TOS: yup
.boolean()
.oneOf([true], 'Must accept Terms of Service to continue!')




})

export default formSchema
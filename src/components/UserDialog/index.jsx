import React from 'react';

import { object, string } from 'yup'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {useDispatch} from "react-redux";

import {Form, Formik} from "formik";
import FormikTextField from "../FormikTextField";

import {initialUser} from "../../helpers/UserConstants";

import './index.css'
import {createUser, deleteUser, fetchUsers, updateUser} from "../../store/userSlice";
import {useNavigate} from "react-router-dom";


const validationSchema = object().shape({
    name: string().min(4).max(255).email().required().label('Name'),
    username: string().min(4).max(255).email().required().label('Username'),
    email: string().min(4).max(255).email().required().label('Email'),
    address: object().shape({
            street: string().min(4).max(255).email().required().label('Address suite'),
        city: string().min(4).max(255).email().required().label('Address city'),
        zipcode: string().min(4).max(255).email().required().label('Address zipcode'),
        geo: object().shape({
            lat: string().min(4).max(255).email().required().label('Address lat'),
            lng: string().min(4).max(255).email().required().label('Address lng'),

        })}),
    phone: string().min(4).max(255).email().required().label('Phone'),
    website: string().min(4).max(255).email().required().label('Website'),
    company: object().shape({
        name: string().min(4).max(255).email().required().label('Company name'),
        catchPhrase: string().min(4).max(255).email().required().label('Company catchPhrase'),
        bs: string().min(4).max(255).email().required().label('Company bs'),
    })
})
// name: '',
//     username: '',
//     email: "",
//     address: {
//     street: "",
//         suite: "",
//         city: "",
//         zipcode: "",
//         geo: {
//         lat: "",
//             lng: ""
//     }
// },
// phone: "",
//     website: "",
//     company: {
//     name: "",
//         catchPhrase: "",
//         bs: ""
// }
const UserDialog = ({isOpen = false, setIsOpne, isEdit, user}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClose = () => {
        setIsOpne(false);
    };

    return (<div>
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="dialog"
        >
            <DialogTitle
                id="alert-dialog-title"
                style={{textAlign: 'center'}}
            >
                {!isEdit ? "Create user" : "Update user"}
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={isEdit ? user : initialUser}
                    validationSchema={validationSchema}
                    onSubmit={ (values, { resetForm }) => {
                        if (isEdit){
                             dispatch(updateUser({id:user.id, user: values}))
                        }else{
                             dispatch(createUser(values))
                        }

                        setIsOpne(false);
                        resetForm();
                    }}
                >
                    {({values}) => (<Form>
                        <div className='form__inner'>
                            <h3 style={{marginBottom: '15px', marginLeft: '5px'}}>
                                Basic information:
                            </h3>
                            <FormikTextField
                                name="name"
                                label="Name"
                                placeholder="Name"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.name}
                            />
                            <FormikTextField
                                name="username"
                                label="User name"
                                placeholder="User name"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.username}
                            />
                            <FormikTextField
                                name="email"
                                label="Email"
                                placeholder="Email"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.email}
                            />
                            <h3 style={{marginBottom: '15px', marginLeft: '5px'}}>
                                Address:
                            </h3>
                            <FormikTextField
                                name="address.street"
                                label="Address street"
                                placeholder="Address street"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.address.street}
                            />
                            <FormikTextField
                                name="address.suite"
                                label="Address suite"
                                placeholder="Address suite"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.address.suite}
                            />
                            <FormikTextField
                                name="address.city"
                                label="Address city"
                                placeholder="Address city"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.address.city}
                            />
                            <FormikTextField
                                name="address.zipcode"
                                label="Address zipcode"
                                placeholder="Address zipcode"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.address.zipcode}
                            />
                            <div style={{paddingLeft: '25px'}}>
                                <h3 style={{marginBottom: '15px'}}>GEO</h3>
                                <FormikTextField
                                    name="address.geo.lat"
                                    label="Address geo lat"
                                    placeholder="Address geo lat"
                                    variant="outlined"
                                    className='dialog__text-field'
                                    fullWidth
                                    style={{marginBottom: 16}}
                                    value={values.address.geo.lat}
                                />
                                <FormikTextField
                                    name="address.geo.lng"
                                    label="Address geo lng"
                                    placeholder="Address geo lng"
                                    variant="outlined"
                                    className='dialog__text-field'
                                    fullWidth
                                    style={{marginBottom: 16}}
                                    value={values.address.geo.lng}
                                />
                            </div>
                            <FormikTextField
                                name="phone"
                                label="User phone"
                                placeholder="User phone"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.phone}
                            />
                            <FormikTextField
                                name="website"
                                label="User website"
                                placeholder="User website"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.website}
                            />
                            <h3 style={{marginBottom: '15px', marginLeft: '5px'}}>
                                Company:
                            </h3>
                            <FormikTextField
                                name="company.name"
                                label="Company name"
                                placeholder="Company name"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.company.name}
                            />
                            <FormikTextField
                                name="company.catchPhrase"
                                label="Company catchPhrase"
                                placeholder="Company catchPhrase"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.company.catchPhrase}
                            />
                            <FormikTextField
                                name="company.bs"
                                label="Company bs"
                                placeholder="Company bs"
                                variant="outlined"
                                className='dialog__text-field'
                                fullWidth
                                style={{marginBottom: 16}}
                                value={values.company.bs}
                            />
                            <div className="formik_actions">
                                <Button
                                    type='submit'
                                    variant="contained"
                                    className='formik_actions-btn'
                                >{isEdit ? 'Update User' : 'Create User'}</Button>
                                {
                                    isEdit && <Button
                                        variant="outlined"
                                        className='formik_actions-btn btn-delete'
                                        onClick={async () => {
                                            await dispatch(deleteUser(user.id))
                                            navigate('/users')
                                        }
                                        }
                                        color="error"
                                    >Delete User</Button>
                                }
                            </div>
                        </div>
                    </Form>)}
                </Formik>
            </DialogContent>
        </Dialog>
    </div>)
}

export default UserDialog;
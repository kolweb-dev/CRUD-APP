import React from 'react'

import {TextField} from "@mui/material";
import {useField} from 'formik'

const FormikTextField = ({
                             name,
                             margin = 'normal',
                             ignoreTouched = false,
                             ...rest
                         }) => {
    const [field, meta] = useField(name)

    return (
        <TextField
            fullWidth
            variant="outlined"
            {...field}
            error={(ignoreTouched || meta.touched) && Boolean(meta.error)}
            helperText={(ignoreTouched || meta.touched) && meta.error}
            {...rest}
            style={{marginBottom: margin === 'normal' ? 16 : 0}}
        />
    )
}

export default FormikTextField

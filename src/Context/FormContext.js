import React, { createContext } from 'react';

const FormContext = createContext({
    formVisible: false,
    setForm: () => {}
})

export default FormContext;
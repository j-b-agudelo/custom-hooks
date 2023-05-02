import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState( initialForm);

    // Funcion para crear cambios en el input

    const onInputChange = ({ target }) => {
        const { name, value } = target; // Sacamos del target lo que nos interesa
        setformState({
            ...formState,
            [ name ]: value

        })  
    }
    
    const onResetForm = () => {
        setformState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

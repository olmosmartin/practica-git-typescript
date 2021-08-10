import React, { ChangeEvent, useState } from 'react'

//export function useForm<T>(initstate:T){
export const useForm =<T extends Object> (initState:T) => {

    const [form, setForm] = useState(initState)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        
        setForm({
            ...form, //operador de propagación
            [ e.target.name ]: e.target.value
        })
    }

    return {
        form,
        handleChange
    }

}

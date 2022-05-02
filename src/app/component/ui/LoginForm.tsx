import React, {useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/CheckBoxField";
import {LicenseType} from "./RegisterForm";

export type DataType = {
    [key: string]: string | boolean
    email: string
    password: string
    stayOn: boolean
}
export type ErrorsType = {
    [key: string]: string
}

const LoginForm = () => {
    const [data, setData] = useState<DataType>({email: "", password: "", stayOn: false});
    const [errors, setErrors] = useState<ErrorsType>({});

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }


    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен не корректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    }


    useEffect(() => {
        validate();
    }, [data])


    const validate = () => {
        const errors: ErrorsType = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    }
    const handleCheckBoxChange = (target: LicenseType) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    name={"email"}
                    label={"Электронная почта"}
                    value={data.email}
                    error={errors.email}
                />
                <TextField
                    onChange={handleChange}
                    name={"password"}
                    type={"password"}
                    label={"Пароль"}
                    value={data.password}
                    error={errors.password}
                />
                <CheckBoxField
                    value={data.stayOn}
                    onChange={handleCheckBoxChange}
                    name={"stayOn"}
                >
                    Оставаться в системе
                </CheckBoxField>
                <button type={"submit"} disabled={!isValid} className={"btn btn-primary w-100 mx-auto"}>Submit</button>
            </form>
        </>
    );
};

export default LoginForm;

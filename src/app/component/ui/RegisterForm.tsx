import React, {useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/textField";
import {ErrorsType} from "./LoginForm";
import api from "../../api";
import {ProfessionsTypeObject, ProfessionType} from "../../api/fake.api/user.api";
import SelectField from "../common/form/SelectField";
import RadioField from "../common/form/RadioField";
import {QualitiesType} from "../../api/fake.api/qualities.api";
import MultiSelectField from "../common/form/MultiSelectField";
import CheckBoxField from "../common/form/CheckBoxField";


export type QualityType = {
    name: string
    value: string
}
export type LicenseType = {
    name: string
    value: boolean
}
export type DataType = {
    [key: string]: string | any
    email: string
    password: string
    profession: string
    sex: string
    qualities: Array<QualityType>
    licence: boolean
}

const RegisterForm = () => {

    const [data, setData] = useState<DataType>({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });
    const [qualities, setQualities] = useState<QualitiesType | undefined>(undefined);
    const [professions, setProfessions] = useState<undefined | Array<ProfessionType> | ProfessionsTypeObject>(undefined);
    const [errors, setErrors] = useState<ErrorsType>({});

    useEffect(() => {
        api.professions.fetchAll().then((data: any) => setProfessions(data));
        api.qualities.fetchAll().then((data: any) => setQualities(data));
    }, []);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }


    const handleMultiSelectChange = (target: QualityType) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }
    const handleCheckBoxChange = (target: LicenseType) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }


    const onInputChange: React.ChangeEventHandler<HTMLSelectElement> = ({target}) => {
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
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message: "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
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
        console.log(data)
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
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
                <SelectField
                    onChange={onInputChange}
                    value={data.profession}
                    label={"Выберите вашу профессию"}
                    error={errors.profession}
                    defaultOption={"Choose..."}
                    options={professions}
                    name={"profession"}
                />
                <RadioField
                    label={"Выберите ваш пол"}
                    options={[{name: "Male", value: "male"}, {name: "Female", value: "female"}, {
                        name: "Other",
                        value: "other"
                    }]}
                    onChange={handleChange}
                    value={data.sex}
                    name={"sex"}
                />
                <MultiSelectField
                    options={qualities}
                    onChange={handleMultiSelectChange}
                    name={"qualities"}
                    defaultValue={data.qualities}
                    label={"Введите ваши качества"}
                />
                <CheckBoxField
                    value={data.licence}
                    onChange={handleCheckBoxChange}
                    name={"licence"}
                    error={errors.licence}
                >
                    Подтвердите <a>лицензионное соглашение</a>
                </CheckBoxField>
                <button type={"submit"} disabled={!isValid} className={"btn btn-primary w-100 mx-auto"}>Submit</button>
            </form>
        </>
    );
};

export default RegisterForm;

import React from "react";
import Select from "react-select";
import {QualityType} from "../../ui/RegisterForm";
import {QualitiesType} from "../../../api/fake.api/qualities.api";

type PropsType = {
    options: QualitiesType | undefined | any
    onChange: (target: QualityType) => void
    name: string
    defaultValue: Array<QualityType>
    label: string
    values?: any
}

const MultiSelectField: React.FC<PropsType> = ({options, onChange, name, label, defaultValue}) => {

    const optionsArray = !Array.isArray(options) && typeof options === "object" ?
        Object.keys(options).map((optionName) => ({
            label: options[optionName].name,
            value: options[optionName]._id
        })) : options;

    const handleChange = (value: any) => {
        onChange({name: name, value});
    }


    return (
        <div className={"mb-4"}>
            <label className={"form-label"}>
                {label}
            </label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                options={optionsArray}
                defaultValue={defaultValue}
                className={"basic-multi-select"}
                classNamePrefix={"select"}
                onChange={handleChange}
                name={name}
            />
        </div>
    );
};

export default MultiSelectField;

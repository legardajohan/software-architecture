import '../style/select.scss';

const Select = ({ label, options, ...inputProps }) => {
    return (
        <select
            className="input-group"
            { ...inputProps }
        >
            {options.map((option) => (
                <option key={ option } value={ option }>{ option }</option>
            ))}
            <label className="label" htmlFor={ inputProps.id }>{ label }</label>
        </select>
    );
};

export default Select;
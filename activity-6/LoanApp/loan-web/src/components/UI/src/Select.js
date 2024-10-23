import '../style/select.scss';

const Select = ({ label, options, ...inputProps }) => {
    return (   
        <select
            className="select"
            { ...inputProps }
        >
            <option value='' disabled>{ label }</option>
            {options.map((option) => (
                <option key={ option } value={ option }>{ option }</option>
            ))}
        </select>
    );
};

export default Select;
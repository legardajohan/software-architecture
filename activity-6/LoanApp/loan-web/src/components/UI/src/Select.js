import '../style/select.scss';

const Select = ({ label, options, ...inputProps }) => {
    return (
        <div className="select-group">
            <label className="select-label" htmlFor={inputProps.id}>{label}</label>
            <select
                className="select"
                {...inputProps}
            >
                <option value='' disabled>{ inputProps.text }</option>
                {options.map((option) => (
                    <option 
                        key={option} 
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
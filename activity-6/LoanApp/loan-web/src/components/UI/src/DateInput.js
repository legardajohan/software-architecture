import '../style/dateInput.scss';

const DateInput = ({ label, ...inputProps }) => {
    return (
        <div className="date-group">
            <label className="date-label" htmlFor={ inputProps.id }>{ label }</label>
            <input 
                className="date-input" 
                { ...inputProps } 
            />
        </div>
    );
};

export default DateInput;
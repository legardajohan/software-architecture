import '../style/inputg.scss';

const Input = ({ label, ...inputProps }) => {
    return (
        <div className="input-group">
            <input 
                className="input" 
                { ...inputProps } 
            />
            <label className="label" htmlFor={ inputProps.id }>{ label }</label>
        </div>
    );
};

export default Input;
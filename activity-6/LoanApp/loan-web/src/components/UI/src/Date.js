import '../style/date.scss';

const Date = ({ label, ...inputProps }) => {
    return (
        <div className="input-groupD">
            <label className="labelDate" htmlFor={ inputProps.id }>{ label }</label>
            <input 
                className="inputD" 
                { ...inputProps } 
            />
        </div>
    );
};

export default Date;
import '../style/label.scss';

const Label = ({ id, text }) => {
    return (
        <label className="labelUI" htmlFor={ id }>{ text }</label>
    );
};

export default Label;
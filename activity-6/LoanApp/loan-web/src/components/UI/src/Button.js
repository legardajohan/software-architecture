import '../style/button.scss';

const Button = ({ btnType, text }) => {
    return (
        <button 
            type="submit"
            className={ btnType }
        >
            { text }
        </button>
    );
};

export default Button;
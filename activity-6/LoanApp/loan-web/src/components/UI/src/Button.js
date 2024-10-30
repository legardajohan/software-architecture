import '../style/button.scss';

const Button = ({ onClick, type, btnClass, text }) => {
    return (
        <button 
            onClick={ onClick ? onClick : undefined } // Solo agrega onClick si esta definido
            type={ type }
            className={ btnClass }
        >
            { text }
        </button>
    );
};

export default Button;
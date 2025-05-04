import PropTypes from "prop-types";

const Button = ({ reading, onClick }) => {
  return (
    <button
      className="bg-transparent font-bold py-2 px-4 hover:outline-none focus:outline-none"
      onClick={onClick}
    >
      {reading ? "Durdur" : "Konuş"}
    </button>
  );
};

Button.propTypes = {
  reading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

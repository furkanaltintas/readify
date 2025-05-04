import PropTypes from 'prop-types';

const Input = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="bg-transparent py-2 px-4 transition duration-300 ease focus:outline-none"
      placeholder="Metin girin..."
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Input;
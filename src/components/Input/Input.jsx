import s from './Input.module.css';

const Input = ({ inputValue, handleValueChange, ...rest }) => {
  return (
    <input
      className={s.input}
      type="number"
      value={inputValue === 0 ? '' : inputValue}
      onChange={handleValueChange}
      min={0}
      {...rest}
    />
  );
};

export default Input;

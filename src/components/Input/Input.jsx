import clsx from 'clsx';
import s from './Input.module.css';

const Input = ({ inputValue, handleValueChange, className, ...rest }) => {
  return (
    <input
      className={clsx(s.input, className && className)}
      type="number"
      value={inputValue === 0 ? '' : inputValue}
      onChange={handleValueChange}
      min={0}
      {...rest}
    />
  );
};

export default Input;

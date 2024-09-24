import clsx from 'clsx';
import s from './Select.module.css';

const Select = ({ currency, handleCurrencyChange, className, ...rest }) => {
  return (
    <select
      value={currency}
      onChange={handleCurrencyChange}
      className={clsx(s.select, className && className)}
      {...rest}
    >
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="uah">UAH</option>
    </select>
  );
};

export default Select;

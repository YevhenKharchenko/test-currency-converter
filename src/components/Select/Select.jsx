import s from './Select.module.css';

const Select = ({ currency, handleCurrencyChange, ...rest }) => {
  return (
    <select value={currency} onChange={handleCurrencyChange} className={s.select} {...rest}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="uah">UAH</option>
    </select>
  );
};

export default Select;

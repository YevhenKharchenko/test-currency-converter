import s from "./Header.module.css";

const Header = ({ usd, eur }) => {
  return (
    <div className={s.currencyWrapper}>
      <p className={s.currency}>USD: {usd} UAH</p>
      <p className={s.currency}>EUR: {eur} UAH</p>
    </div>
  );
};

export default Header;

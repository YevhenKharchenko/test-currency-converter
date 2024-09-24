import Container from '../Container/Container.jsx';
import s from './Header.module.css';

const Header = ({ usd, eur }) => {
  const date = new Date().toLocaleDateString();

  return (
    <header className={s.header}>
      <Container>
        <div className={s.currencyWrapper}>
          <p className={s.currency}>Exchange rate of: {date}</p>
          <p className={s.currency}>USD: {usd} UAH</p>
          <p className={s.currency}>EUR: {eur} UAH</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;

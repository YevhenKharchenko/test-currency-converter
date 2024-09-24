import { useMemo, useState } from 'react';
import Container from '../Container/Container.jsx';
import Select from '../Select/Select.jsx';
import Input from '../Input/Input.jsx';
import s from './Converter.module.css';

const Converter = ({ usd, eur }) => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState('usd');
  const [secondCurrency, setSecondCurrency] = useState('uah');

  const conversionRates = useMemo(() => {
    const safeUsd = usd > 0 ? usd : 1;
    const safeEur = eur > 0 ? eur : 1;

    return {
      usd: { uah: safeUsd, eur: safeUsd / safeEur, usd: 1 },
      eur: { uah: safeEur, usd: safeEur / safeUsd, eur: 1 },
      uah: { usd: 1 / safeUsd, eur: 1 / safeEur, uah: 1 },
    };
  }, [usd, eur]);

  const getConversionRate = (from, to) => {
    return conversionRates[from][to];
  };

  const handleFirstValueChange = e => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setFirstValue(value);
    const rate = getConversionRate(firstCurrency, secondCurrency);
    setSecondValue((value * rate).toFixed(2));
  };

  const handleSecondValueChange = e => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setSecondValue(value);
    const rate = getConversionRate(secondCurrency, firstCurrency);
    setFirstValue((value * rate).toFixed(2));
  };

  const handleFirstCurrencyChange = e => {
    setFirstCurrency(e.target.value);

    if (firstValue) {
      const rate = getConversionRate(e.target.value, secondCurrency);
      setSecondValue((firstValue * rate).toFixed(2));
    }
  };

  const handleSecondCurrencyChange = e => {
    setSecondCurrency(e.target.value);

    if (firstValue) {
      const rate = getConversionRate(firstCurrency, e.target.value);
      setSecondValue((firstValue * rate).toFixed(2));
    }
  };

  return (
    <main className={s.converter}>
      <Container>
        <form className={s.form}>
          <label className={s.label}>
            From:
            <div className={s.inputWrapper}>
              <Input inputValue={firstValue} handleValueChange={handleFirstValueChange} />
              <Select currency={firstCurrency} handleCurrencyChange={handleFirstCurrencyChange} />
            </div>
          </label>
          <label className={s.label}>
            To:
            <div className={s.inputWrapper}>
              <Input inputValue={secondValue} handleValueChange={handleSecondValueChange} />
              <Select currency={secondCurrency} handleCurrencyChange={handleSecondCurrencyChange} />
            </div>
          </label>
        </form>
      </Container>
    </main>
  );
};

export default Converter;

import { useMemo, useState } from "react";
import s from "./Converter.module.css";

const Converter = ({ usd, eur }) => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState("usd");
  const [secondCurrency, setSecondCurrency] = useState("uah");

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

  const handleFirstValueChange = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setFirstValue(value);
    const rate = getConversionRate(firstCurrency, secondCurrency);
    setSecondValue((value * rate).toFixed(2));
  };

  const handleSecondValueChange = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setSecondValue(value);
    const rate = getConversionRate(secondCurrency, firstCurrency);
    setFirstValue((value * rate).toFixed(2));
  };

  const handleFirstCurrencyChange = (e) => {
    setFirstCurrency(e.target.value);
    if (firstValue) {
      const rate = getConversionRate(e.target.value, secondCurrency);
      setSecondValue((firstValue * rate).toFixed(2));
    }
  };

  const handleSecondCurrencyChange = (e) => {
    setSecondCurrency(e.target.value);
    if (firstValue) {
      const rate = getConversionRate(firstCurrency, e.target.value);
      setSecondValue((firstValue * rate).toFixed(2));
    }
  };

  return (
    <>
      <form className={s.form}>
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            type="number"
            value={firstValue === 0 ? "" : firstValue}
            onChange={handleFirstValueChange}
            min={0}
          />
          <select
            value={firstCurrency}
            onChange={handleFirstCurrencyChange}
            className={s.select}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="uah">UAH</option>
          </select>
        </div>
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            type="number"
            value={secondValue === 0 ? "" : secondValue}
            onChange={handleSecondValueChange}
            min={0}
          />
          <select
            value={secondCurrency}
            onChange={handleSecondCurrencyChange}
            className={s.select}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="uah">UAH</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Converter;

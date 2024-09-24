import { useState, useEffect } from 'react';
import { requestCurrencyRate } from './services/monobank-api.js';
import { CURRENCY_CODE } from './constants/currencyCode.js';
import Header from './components/Header/Header.jsx';
import Converter from './components/Converter/Converter.jsx';

function App() {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() => {
    async function getCurrency() {
      const data = await requestCurrencyRate();

      if (Array.isArray(data)) {
        const usdCurrency = data.find(
          item =>
            item.currencyCodeA === CURRENCY_CODE.USD && item.currencyCodeB === CURRENCY_CODE.UAH
        );
        const eurCurrency = data.find(
          item =>
            item.currencyCodeA === CURRENCY_CODE.EUR && item.currencyCodeB === CURRENCY_CODE.UAH
        );

        setUsd(usdCurrency ? usdCurrency.rateBuy : '');
        setEur(eurCurrency ? eurCurrency.rateBuy : '');

        return;
      } else {
        setUsd('N/A');
        setEur('N/A');
      }
    }

    getCurrency();
  }, []);

  return (
    <>
      <Header usd={usd} eur={eur} />
      <Converter usd={usd} eur={eur} />
    </>
  );
}

export default App;

import { useEffect } from "react";
import Converter from "./components/Converter/Converter.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import axios from "axios";

function App() {
  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");

  useEffect(() => {
    async function getCurrency() {
      try {
        const response = await fetch("https://api.monobank.ua/bank/currency");
        const data = await response.json();

        if (Array.isArray(data)) {
          const usdCurrency = data.find(
            (item) => item.currencyCodeA === 840 && item.currencyCodeB === 980
          );
          const eurCurrency = data.find(
            (item) => item.currencyCodeA === 978 && item.currencyCodeB === 980
          );

          setUsd(usdCurrency ? usdCurrency.rateBuy : "N/A");
          setEur(eurCurrency ? eurCurrency.rateBuy : "N/A");
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
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

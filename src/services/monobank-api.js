export const requestCurrencyRate = async () => {
  try {
    const response = await fetch('https://api.monobank.ua/bank/currency');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching currency data:', error);
    return [];
  }
};

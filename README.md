# Currency Converter

This is a simple currency converter application built using React. It fetches the latest USD and EUR
exchange rates against the Ukrainian Hryvnia (UAH) from the Monobank API and displays them in a
header component. It also provides a converter component where users can input an amount and get the
equivalent amount in the other currency.

## Features

- Fetches the latest USD and EUR exchange rates against UAH from the Monobank API
- Displays the current exchange rates in the header component
- Provides a converter component where users can input an amount and get the equivalent amount in
  the other currency

## Technologies Used

- React for building the user interface
- CSS Modules for styling components in a modular way
- Monobank API for fetching exchange rates

## Installation

1. Clone the repository:

```
git clone https://github.com/YevhenKharchenko/test-currency-converter.git
```

2. Install the dependencies:

```
cd currency-converter
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open the application in your browser at `http://localhost:5173`.

## Usage

1. The application will automatically fetch the latest USD and EUR exchange rates against UAH and
   display them in the header.
2. Use the converter component to input an amount in either USD or EUR, and the equivalent amount in
   the other currency will be displayed.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open a new issue or submit
a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

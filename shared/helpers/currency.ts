const currency = (value: number, locale: string = 'pt-BR', currencyFormat: string = 'BRL') => new Intl.NumberFormat(locale, { style: 'currency', currency: currencyFormat }).format(value);

export default currency;

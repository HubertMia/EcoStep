export const formatCurrency = (
  value: number,
  locale: string = 'pl-PL',
  currency: string = 'PLN'
): string => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${value.toFixed(2)} zł`;
  }
}; 
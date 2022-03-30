export default function centsToDollars(num) {
  let formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return formatter.format((num / 100).toFixed(2));
}

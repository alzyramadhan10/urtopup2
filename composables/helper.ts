export const formatToIDR = (amount: number | string) => {
  if (typeof amount === 'string') amount = parseFloat(amount)

  amount = Math.ceil(amount)
  return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}

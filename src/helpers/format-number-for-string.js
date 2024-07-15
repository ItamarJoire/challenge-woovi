export function formatNumberForString(value) {
  const stringFormat = value.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return stringFormat
}

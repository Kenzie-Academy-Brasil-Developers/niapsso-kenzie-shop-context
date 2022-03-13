export const numberFormatter = (number) =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    Number(number)
  );

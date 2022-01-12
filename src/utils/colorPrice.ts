const colorPrice = (number: string) => {
  if (+number > 9 ) {
    return 'terciary';
  }
  if (+number > 4 && +number < 10) {
    return 'secundary';
  }
  if (+number > 0 && +number < 5) {
    return 'primary';
  }
  return 'primary';
};

export default colorPrice;
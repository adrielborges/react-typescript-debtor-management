const currentDate = (): string => {
  const [date] = new Date().toLocaleString('pt-BR').split(' ');
  return date;
};

export default currentDate;

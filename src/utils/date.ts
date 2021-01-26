const formatDate = (date: string): string => {
  const [formattedDate] = new Date(date).toLocaleString('pt-BR').split(' ');
  return formattedDate;
};

export default formatDate;

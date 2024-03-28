export const convertDate = (input: string | number): string => {
  const date = new Date(input);
  return date.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export const monthList = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

// 1부터 31까지
export const dayList = Array.from(Array(31), (_, i) => String(i + 1));

// 2024년부터 1904년까지
export const yearList = Array.from(Array(121), (_, i) => String(2024 - i));

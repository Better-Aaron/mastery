'use client';

import { ResponsiveCalendar } from '@nivo/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const MyResponsiveCalendar = ({ data }: any) => (
  <ResponsiveCalendar
    data={data}
    from="2023-01-01"
    to="2023-12-31"
    emptyColor="#eeeeee"
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
  />
);

const formamtedData = (date: Date) => {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
  let day = date.getDate().toString().padStart(2, '0');

  // Form the date string in YYYY-MM-DD format
  return `${year}-${month}-${day}`;
};

export function Calendar() {
  const genereateDataForYear2023 = () => {
    const data = [];
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-31');

    while (startDate <= endDate) {
      const value = Math.floor(Math.random() * 301); //

      data.push({
        value: value,
        day: formamtedData(startDate),
      });
      startDate.setDate(startDate.getDate() + 1);
    }
    return data;
  };

  const dataArray = genereateDataForYear2023();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar week</CardTitle>
        <CardDescription>There are the result of this week.</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px] flex items-center w-full">
        <MyResponsiveCalendar data={dataArray} />
      </CardContent>
    </Card>
  );
}

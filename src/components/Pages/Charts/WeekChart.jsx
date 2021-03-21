import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { StandardCalculation } from '../Calculations/StandardCalculation';
import dateRange from '../../Shared/dateRange';

export const WeekChart = () => {
  const [weekData, setWeekData] = useState([]);
  const [weekPrices, setWeekPrices] = useState([]);
  const startDate = dateRange(7).startDate;
  const endDate = dateRange(7).endDate;
  const weekURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

  useEffect(() => {
    const getWeekData = async () => {
      const response = await fetch(weekURL);
      const bitcoinData = await response.json();
      setWeekData(bitcoinData.bpi);
      setWeekPrices(Object.values(bitcoinData.bpi))
    };
    getWeekData();
  }, [weekURL]);

  return <> {weekData ? <><LineChart data={weekData} /><StandardCalculation startDate={startDate} endDate={endDate} prices={weekPrices} /></> : null} </>;
};

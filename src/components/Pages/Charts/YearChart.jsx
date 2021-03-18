import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import dateRange from '../../Shared/dateRange';

export const YearChart = () => {
    const [yearData, setYearData] = useState([]);
    const startDate = dateRange(365).startDate;
    const endDate = dateRange(365).endDate;
    const yearURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
  
    useEffect(() => {
      const getYearData = async () => {
        const response = await fetch(yearURL);
        const bitcoinData = await response.json();
        setYearData(bitcoinData.bpi);
      };
      getYearData();
    }, [yearURL]);
  
    return <> {yearData ? <LineChart data={yearData} /> : null} </>;
}

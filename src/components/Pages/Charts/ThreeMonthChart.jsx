import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import dateRange from '../../Shared/dateRange';

export const ThreeMonthChart = () => {
    const [threeMonthData, setThreeMonthData] = useState([]);
    const startDate = dateRange(90).startDate;
    const endDate = dateRange(90).endDate;
    const threeMonthURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
  
    useEffect(() => {
        
      const getThreeMonthData = async () => {
        const response = await fetch(threeMonthURL);
        const bitcoinData = await response.json();
        setThreeMonthData(bitcoinData.bpi);
      };
      getThreeMonthData();
    }, [threeMonthURL]);
  
    return <> {threeMonthData ? <LineChart data={threeMonthData} /> : null} </>;
}
 
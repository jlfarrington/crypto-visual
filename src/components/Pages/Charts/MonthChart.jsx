import { useState, useEffect } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { StandardCalculation } from '../Calculations/StandardCalculation';

export const MonthChart = () => {
    const [monthData, setMonthData] = useState([]);
    const [monthPrices, setMonthPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const monthURL = 'https://api.coindesk.com/v1/bpi/historical/close.json';

    useEffect(() => {
        const getMonthData = async () => {
          const response = await fetch(monthURL);
          const bitcoinData = await response.json();
          setMonthData(bitcoinData.bpi);
          setMonthPrices(Object.values(bitcoinData.bpi))
        };
        getMonthData();
        setIsLoading(false);
      }, [monthURL]);

      return (
        <div className='crypto-page'>
          {monthData && !isLoading ? <>
            <LineChart data={monthData} /><StandardCalculation time='month' prices={monthPrices} /></>
            : <div className="loader"></div>} </div>
      );
}

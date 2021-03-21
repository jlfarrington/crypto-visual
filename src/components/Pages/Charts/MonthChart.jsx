import { useState, useEffect } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { StandardCalculation } from '../Calculations/StandardCalculation';

export const MonthChart = () => {
    const [monthData, setMonthData] = useState([]);
    const [monthPrices, setMonthPrices] = useState([]);
    const monthURL = 'https://api.coindesk.com/v1/bpi/historical/close.json';

    useEffect(() => {
        const getMonthData = async () => {
          const response = await fetch(monthURL);
          const bitcoinData = await response.json();
          setMonthData(bitcoinData.bpi);
          setMonthPrices(Object.values(bitcoinData.bpi))
        };
        getMonthData();
      }, [monthURL]);

    return <> {monthData ? <><LineChart data={monthData}/> <StandardCalculation time='month' prices={monthPrices} /></> : <></>} </>
}

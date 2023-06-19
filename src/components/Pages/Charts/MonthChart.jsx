import { useState, useEffect } from 'react';
import { LineChart } from '../../Shared/LineChart';
import moment from 'moment';
import { StandardCalculation } from '../Calculations/StandardCalculation';

export const MonthChart = () => {
    const [monthData, setMonthData] = useState([]);
    const [monthPrices, setMonthPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const today = moment();
    const todayUnix = today.unix()
    console.log("today's date in UTC " + today)

    const monthAgo = today.subtract(1, 'months');
    const monthAgoUnix = monthAgo.unix();
    console.log("a month ago in UTC is: " + monthAgoUnix)

    const monthURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${monthAgoUnix}&to=${todayUnix}&precision=2`;

    useEffect(() => {
        const getMonthData = async () => {
          const response = await fetch(monthURL);
          const bitcoinData = await response.json();
          setMonthData(bitcoinData.prices);
          setMonthPrices(bitcoinData.prices.map(price => price[1]))
        };
        getMonthData();
        setIsLoading(false);
      }, []);

      return (
        <div className='crypto-page'>
          {monthData && !isLoading ? <>
            <LineChart data={monthData} chartType="1m" /><StandardCalculation time='month' prices={monthPrices} /></>
            : <div className="loader"></div>} </div>
      );
}

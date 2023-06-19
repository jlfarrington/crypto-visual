import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { StandardCalculation } from '../Calculations/StandardCalculation';
import moment from 'moment';

export const YearChart = () => {
  const [yearData, setYearData] = useState([]);
  const [yearPrices, setYearPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  
  const today = moment();

    const todayUnix = today.unix()

    const yearAgo = today.subtract(1, 'years');
    const yearAgoUnix = yearAgo.unix();

    const yearURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${yearAgoUnix}&to=${todayUnix}&precision=2`;


  useEffect(() => {
    const getYearData = async () => {
      const response = await fetch(yearURL);
      const bitcoinData = await response.json();
      setYearData(bitcoinData.prices);
      setYearPrices(bitcoinData.prices.map(price => price[1]))
    };
    getYearData();
    setIsLoading(false);
  }, []);

  return (
    <div className='crypto-page'>
      {yearData && !isLoading ? <>
        <LineChart data={yearData} /><StandardCalculation time='year' prices={yearPrices} /></>
        : <div className="loader"></div>} </div>
  );
}

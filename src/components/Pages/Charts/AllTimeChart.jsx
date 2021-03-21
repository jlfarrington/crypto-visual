import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import dateRange from '../../Shared/dateRange';
import { StandardCalculation } from '../Calculations/StandardCalculation';

export const AllTimeChart = () => {
  const [allTimeData, setAllTimeData] = useState([]);
  const [allTimePrices, setAllTimePrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const startDate = '2013-09-20';
  const endDate = dateRange(7).endDate;
  const yearURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

  useEffect(() => {
    const getAllTimeData = async () => {
      const response = await fetch(yearURL);
      const bitcoinData = await response.json();
      const filtered = filterData(bitcoinData.bpi);
      setAllTimeData(filtered);
      setAllTimePrices(Object.values(filtered))
    };
    getAllTimeData();
    setIsLoading(false);
  }, [yearURL]);

  // we have to filter our data for performance reasons, chart tends to lag when dealing with a year or more of data
  const filterData = (bitcoinData) => {
    let filteredDates = Object.getOwnPropertyNames(bitcoinData).filter(date => {
      // get days from date string
      let splitDate = date.split('-');
      // get one day from every week of the year
      return splitDate[2] % 28 === 0;
    })

    // make sure to include most recent date
    const allowedDates = [...filteredDates, dateRange(7).yesterday];
    // filter object to only include bitcoin price from filtered dates above
    const filtered = Object.keys(bitcoinData)
      .filter(key => allowedDates.includes(key))
      .reduce((obj, key) => {
        obj[key] = bitcoinData[key];
        return obj;
      }, {});

    return filtered;
  }

  return (
    <div className='crypto-page'>
      {allTimeData && !isLoading ? <>
        <LineChart data={allTimeData} /><StandardCalculation time='all' prices={allTimePrices} /></>
        : <div className="loader"></div>} </div>
  );
}

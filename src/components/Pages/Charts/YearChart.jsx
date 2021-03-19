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
      const filtered = filterData(bitcoinData.bpi);
      setYearData(filtered);
    };
    getYearData();
  }, [yearURL]);

  // we have to filter our data for performance reasons, chart tends to lag when dealing with a year or more of data
  const filterData = (bitcoinData) => {
    let filteredDates = Object.getOwnPropertyNames(bitcoinData).filter(date => {
      // get days from date string
      let splitDate = date.split('-');
      // get one day from every week of the year
      return splitDate[2] % 7 === 0;
    })

    const allowedDates = filteredDates;
    // filter object to only include bitcoin price from filtered dates above
    const filtered = Object.keys(bitcoinData)
      .filter(key => allowedDates.includes(key))
      .reduce((obj, key) => {
        obj[key] = bitcoinData[key];
        return obj;
      }, {});

    return filtered;
  }

  return <> {yearData ? <LineChart data={yearData} /> : null} </>;
}

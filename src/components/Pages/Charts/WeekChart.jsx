import React, { useEffect, useState } from "react";
import { LineChart } from "../../Shared/LineChart";
import dateRange from '../../Shared/dateRange'

export const WeekChart = () => {
  const [data, setData] = useState([]);
  
  const startDate = dateRange(7).startDate
  const endDate = dateRange(7).endDate

  // set fetch url
  const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

  // fetch data
  const initBitcoinData = async () => {
    const response = await fetch(url);
    const bitcoinData = await response.json();
    setData(bitcoinData.bpi);
    console.log(bitcoinData.bpi);
  };

  useEffect(() => {
    initBitcoinData();
  }, []);

  return <>{data ? <LineChart data={data} /> : null}</>;
};

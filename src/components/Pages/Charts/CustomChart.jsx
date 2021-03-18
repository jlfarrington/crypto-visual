import { useEffect, useState } from "react";
import { LineChart } from "../../Shared/LineChart";

export const CustomChart = () => {
  const [customData, setCustomData] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const customURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

  useEffect(() => {
    const getCustomData = async () => {
      const response = await fetch(customURL);
      const bitcoinData = await response.json();
      setCustomData(bitcoinData.bpi);
    };
    getCustomData();
  }, [customURL]);

  return <>
  <div>
      <label for="start-date">Start date:</label>
      <input type="date" id="start-date" onChange={(e) => setStartDate(e.target.value)} />
      <label for="end-date">End date:</label>
      <input type="date" id="end-date" onChange={(e) => setEndDate(e.target.value)} />
  </div>
  
  
  {customData ? <LineChart data={customData} /> : null}
  </>;
};

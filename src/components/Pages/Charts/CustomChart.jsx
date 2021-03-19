import { useEffect, useState } from "react";
import { LineChart } from "../../Shared/LineChart";

export const CustomChart = () => {
  const [customData, setCustomData] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [customPrices, setCustomPrices] = useState([]);
  const customURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;


    const getCustomData = async () => {
      const response = await fetch(customURL);
      const bitcoinData = await response.json();
      setCustomData(bitcoinData.bpi);
      setCustomPrices(Object.values(bitcoinData.bpi))
      console.log(customData)
      console.log(customPrices)
    };

    

  return (
   
    <>
    {console.log(customData)}
      <div>
        <label htmlFor="start-date">Start date:</label>
        <input
          type="date"
          id="start-date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date">End date:</label>
        <input
          type="date"
          id="end-date"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={() => getCustomData()}>Submit</button>
      </div>

      {customData ? (
        <div>
          <div>
            <LineChart data={customData} />
          </div>
          <div>
            <h3>Change in price from {startDate} to {endDate}:</h3>
            <h3>{customPrices[customPrices.length-1] -  customPrices[1]}</h3>
          </div>
        </div>
      ) : null}
    </>
  );
};

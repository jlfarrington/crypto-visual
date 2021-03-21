import { useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { CustomCalculation } from '../Calculations/CustomCalculation';

export const CustomChart = () => {
  const [customData, setCustomData] = useState();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customPrices, setCustomPrices] = useState([]);
  const customURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

  const getCustomData = async () => {
    const response = await fetch(customURL)
    .then(data => data.json())
    .then(bitcoinData => {
      setCustomData(bitcoinData.bpi);
      setCustomPrices(Object.values(bitcoinData.bpi))
    })
    .catch(() => alert('please enter accurate date'));
    return response;

  };

  return (
    <div className='crypto-page'>
    <h2>Select Start and End Dates to View Bitcoin Data:</h2>
      <div className="custom-date-input">
        
        <label htmlFor='start-date'>Start date:</label>
        <input
          type='date'
          id='start-date'
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor='end-date'>End date:</label>
        <input
          type='date'
          id='end-date'
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={() => getCustomData()}>Submit</button>
      </div>

      {customData ? (
        <div>
          <div>
            <LineChart data={customData} />
          </div>
            <CustomCalculation startDate={startDate} endDate={endDate} prices={customPrices} />
        </div>
      ) : <></>}
    </div>
  );
};

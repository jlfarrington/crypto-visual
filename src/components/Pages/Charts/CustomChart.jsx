import { useState, useEffect } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { CustomCalculation } from '../Calculations/CustomCalculation';
import moment from 'moment';


export const CustomChart = () => {
  const [customData, setCustomData] = useState();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customPrices, setCustomPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let customURL;

  useEffect(() => {
    customURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${moment(startDate).unix()}&to=${moment(endDate).unix()}&precision=2`;
  }, [startDate, endDate])

  const getCustomData = async () => {
    setCustomData({});
    setIsLoading(true);
    const response = await fetch(customURL)
      .then(data => data.json())
      .then(bitcoinData => {
        setCustomData(bitcoinData.prices);
        setCustomPrices(bitcoinData.prices.map(price => price[1]));
        setIsLoading(false);
      })
      .catch(() => {
        alert('please enter accurate date');
        setIsLoading(false);
      });
    return response;
  };

  return (
    <div className='crypto-page'>
      <div className='calc dates'>
        <h2 className='calc-text'>Select Start and End Dates to View Bitcoin Data</h2>
        <div className='custom-date-input'>
          <label htmlFor='start-date'>Start date:</label>
          <input
            type='date'
            id='startdate'
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor='end-date'>End date:</label>
          <input
            type='date'
            id='enddate'
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className='submit-btn' onClick={() => getCustomData()}>Submit</button>
      </div>

      {customData && !isLoading ? (
        <div>
          <div>
            <LineChart data={customData} chartType="custom" />
          </div>
          {
            customData ?
              <CustomCalculation startDate={startDate} endDate={endDate} prices={customPrices} />
              : <></>
          }
        </div>
      ) : isLoading ? <div className="loader"></div> : <div></div>}
    </div>
  );
};

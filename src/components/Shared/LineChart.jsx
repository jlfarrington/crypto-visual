import { useState, useEffect } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

export const LineChart = (props) => {
  const [dates, setDates] = useState([]);
  const [payout, setPayout] = useState([]);

  useEffect(() => {
    const unsortedData = props.data;
    const chartType = props.chartType;
    let dates = [];
    let payout = [];

    if (chartType === "1m" || chartType === "1w"){
    let delta = 24;
    // the returned data is hourly for dates less than 90 apart. we only need one per day,
    // so we get every 24th price
    for (let i=0; i < unsortedData.length; i=i+delta) {
      let bitcoinDate = moment(unsortedData[i][0]).format('MMM DD');
      let bitcoinPrice = unsortedData[i][1];

      dates.push(bitcoinDate);
      payout.push(bitcoinPrice);
    }
  } else {
    for (let item of unsortedData) {
      let bitcoinDate = moment(item[0]).format('MMM DD');
      dates.push(bitcoinDate);
      payout.push(item[1]);
    }

  }
    setDates(dates);
    setPayout(payout);
  }, [props])

  let data = {
    labels: dates,
    datasets: [{
      data: payout,
      backgroundColor: '#C9EBC1',
      borderColor: '#67CA53',
      borderWidth: 2
    }]
  }

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }
          label += Math.round(tooltipItem.yLabel * 100) / 100;
          return "$" + label;
        },
      },
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              return "$" + value;
            },
          },
        },
      ],
    },
  }

  return (
    <div className="chart-container" style={{ margin: 'auto', height: '60vh', width: '80%' }}>
      <Line data={data} options={options} />
    </div>

  )
}
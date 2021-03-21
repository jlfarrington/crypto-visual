import { useState, useEffect } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

export const LineChart = (props) => {
  const [dates, setDates] = useState([]);
  const [payout, setPayout] = useState([]);

  useEffect(() => {
    const unsortedData = props.data;
    let dates = [];
    let payout = [];
    for (let item in unsortedData) {
      let bitcoinDates = moment(item).format('MMM DD');
      dates.push(bitcoinDates);
      payout.push(unsortedData[item]);
    }
    setDates(dates);
    setPayout(payout);
  }, [props.data])

  let data = {
    labels: dates,
    datasets: [{
      data: payout,
      backgroundColor: '#d9514e80',
      borderColor: '#d9514e',
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
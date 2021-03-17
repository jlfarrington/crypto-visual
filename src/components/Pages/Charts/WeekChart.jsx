import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import moment from 'moment';

export const WeekChart = () => {
    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);
    const [data, setData] = useState([]);


    // get date strings
    let todayDate = new Date();
    let dd = todayDate.getDate();
    let mm = todayDate.getMonth()+1;
    let yyyy = todayDate.getFullYear();

    if(dd < 10){dd = '0' + dd};
    if(mm < 10){mm = '0' + mm};

    todayDate = yyyy + '-' + mm + '-' + dd;

    let weekFromToday = new Date();
    let dd1w = weekFromToday.getDate() - 7;
    let mm1w = weekFromToday.getMonth()+1;
    let yyyy1w = weekFromToday.getFullYear();

    if(dd1w < 10){dd1w = '0' + dd1w};
    if(mm1w < 10){mm1w = '0' + mm1w};    

    weekFromToday = yyyy1w + '-' + mm1w + '-' + dd1w;

    // set fetch url
    const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${weekFromToday}&end=${todayDate}`


    // fetch data
    const initBitcoinData = async () => {
        const response = await fetch(url)
        const bitcoinData = await response.json();
        setData(bitcoinData.bpi);
        console.log(bitcoinData.bpi)
    }

    useEffect(() => {
        initBitcoinData();
    }, [])


    // format dates in returned data
  useEffect(() => {
    const unsortedData = data;
    let dates = [];
    let payout = [];
    for (let item in unsortedData) {
        let bitcoinDates = moment(item).format('MMM DD');
      dates.push(bitcoinDates);
      payout.push(unsortedData[item])
    };
    setDates(dates);
    setPayout(payout);
  }, [data]);


    //   build chart
  useEffect(() => {
    var chartContext = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(chartContext, {
    type: 'line',
    data: {
    labels: dates,
    datasets: [{
    data: payout,
    backgroundColor: '#7D8CD780', 
    borderColor: '#7D8CD7',
    borderWidth: 2
    }]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return '$' + label;
                }
            }
        },
        legend: {
            display: false
        },
    scales: {
    yAxes: [{
    ticks: {
    callback: function(value, index, values) {
        return '$' + value;
    }
    }
    }]
    }
    }
    });
  }, [dates])

  return <>{data ? <canvas id="myChart"></canvas> : null}</>;
};

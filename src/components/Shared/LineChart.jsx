import { useState, useEffect } from 'react';
import moment from 'moment';
import { Chart } from 'chart.js';

export const LineChart = (props) => {
    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);
    const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth });
    const [isLoading, setIsLoading] = useState(false);

    // working on responsive design 

    // function debounce(fn, ms) {
    //     let timer;
    //     return () => {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             timer = null
    //             fn.apply(this, arguments)
    //         }, ms)
    //     };
    // }

    // useEffect(() => {
    //     setIsLoading(true);
    //     const debouncedHandleResize = debounce(function handleResize() {
    //         setDimensions({
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //         })
    //     }, 1000);

    //     window.addEventListener('resize', debouncedHandleResize);
    //     setIsLoading(false);
    //     return () => {
    //         window.removeEventListener('resize', debouncedHandleResize);
    //     }
    // })

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
        legend: {
            display: false
        },
        scales: {
            yAxis: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

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

    useEffect(() => {
        Chart.Line('chart', {
            options: options,
            data: data
        })
    }, [dates, payout, data, options]);


    return (
        <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '80vw' }}>
            {
                isLoading ?  <></> :
                <canvas id='chart' aria-label="Bitcoin Chart" role="img"> </canvas>
            }
        </div>

    )
}
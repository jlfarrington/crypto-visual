import { useState, useEffect } from 'react';
import { LineChart } from '../../Shared/LineChart';

export const MonthChart = () => {
    const [data, setData] = useState();
    const [fetchingData, setFetchingData] = useState(true);

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then(response => response.json())
            .then(data => {
                setData(data.bpi);
                setFetchingData(false);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <>
            {!fetchingData ? <LineChart data={data}/>: null}
        </>
    )
}

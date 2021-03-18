import { Link } from 'react-router-dom';
import { Routes } from '../../Navigation/Routes';

export const Charts = () => {
    return (
        <div>
            <h1>Crypto App</h1>
            <Link to="/">1 week</Link>
            <Link to="/month">1 Month</Link>
            <Link to="/threemonth">3 Months</Link>
            <Link to="/year">1 Year</Link>
            <Link to="/alltime">All Time</Link>
            <Link to="/custom">Custom</Link>
            <Routes />
        </div>
    )
}

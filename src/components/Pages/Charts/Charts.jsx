import { Link } from 'react-router-dom';
import { Routes } from '../../Navigation/Routes';

export const Charts = () => {
    return (
        <div>
            <h1>Crypto App</h1>
            <Link to="/">1 Month</Link>
            <Link to="/week">1 Week</Link>
            <Routes />
        </div>
    )
}

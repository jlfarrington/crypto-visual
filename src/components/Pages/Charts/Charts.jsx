import { Link } from 'react-router-dom';
import { Routes } from '../../Navigation/Routes';

export const Charts = () => {
    return (
        <div>
            <h1>Charts</h1>
            <Link to="/">Monthly</Link>
            <Link to="/week">Weekly</Link>
            <Routes />
        </div>
    )
}

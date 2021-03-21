import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  return (
    <div className='site-page-header'>
        <h1 className='logo'>{<FontAwesomeIcon size="1x" icon={faBitcoin} />} Hindsight</h1>
        <p className='slogan'>Bitcoin Data Visualizer</p>
    </div>
  );
};

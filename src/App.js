import { Charts } from './components/Pages/Charts/Charts';
import  Layout from 'antd/lib/layout';
import { Navbar } from './components/Navigation/Navbar';
import './css/main.css';
import { Copyright } from './components/Navigation/Copyright';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className='nav-section'>
        <Navbar />
      </Header>
      <Content className='site-content'>
        <Charts />
      </Content> 
      <Footer className='footer-section'>
        <Copyright />
      </Footer>
    </Layout>
  );
}

export default App;

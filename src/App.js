import { Charts } from './components/Pages/Charts/Charts';
import  Layout from 'antd/lib/layout';
import { Navbar } from './components/Navigation/Navbar';
import './css/main.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Charts />
      </Content> 
      <Footer />
    </Layout>
  );
}

export default App;

import { Charts } from './components/Pages/Charts/Charts';
import { Layout } from 'antd';
import { Navbar } from './components/Navigation/Navbar'
import 'antd/dist/antd'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header><Navbar /></Header>
     <Content><Charts /></Content> 
     <Footer></Footer>
    </Layout>
  );
}

export default App;

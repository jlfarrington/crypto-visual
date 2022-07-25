import Tabs from 'antd/lib/tabs';
import { CustomChart } from '../Charts/CustomChart';
import { MonthChart } from '../Charts/MonthChart'
import { WeekChart } from '../Charts/WeekChart';
import { ThreeMonthChart } from '../Charts/ThreeMonthChart';
import { YearChart } from '../Charts/YearChart';
import { AllTimeChart } from '../Charts/AllTimeChart';
import 'antd/dist/antd.css';

export const Charts = () => {
  const { TabPane } = Tabs;

  return (
    <div className='charts-page'>
      <Tabs className="ant-tabs" defaultActiveKey='1'>
        <TabPane tab='1M' key='2'>
          <MonthChart />
        </TabPane>
        <TabPane tab='3M' key='3'>
          <ThreeMonthChart />
        </TabPane>
        <TabPane tab='1Y' key='4'>
          <YearChart />
        </TabPane>
        <TabPane tab='All' key='5'>
          <AllTimeChart />
        </TabPane>
        <TabPane tab='Custom' key='6'>
          <CustomChart />
        </TabPane>
      </Tabs>
    </div>
  );
};

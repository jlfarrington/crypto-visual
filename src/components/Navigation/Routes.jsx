import { Switch, Route } from 'react-router-dom';
import { MonthChart } from '../Pages/Charts/MonthChart';
import { WeekChart } from '../Pages/Charts/WeekChart';
import { ThreeMonthChart } from '../Pages/Charts/ThreeMonthChart';
import { YearChart } from '../Pages/Charts/YearChart';
import { AllTimeChart } from '../Pages/Charts/AllTimeChart';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/"><WeekChart/></Route>
                <Route exact path="/month"><MonthChart /></Route>
                <Route exact path="/threemonth"><ThreeMonthChart /></Route>
                <Route exact path="/year"><YearChart /></Route>
                <Route exact path="/alltime"><AllTimeChart /></Route>
            </Switch>
        </>
    )
}

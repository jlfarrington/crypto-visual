import { Switch, Route } from 'react-router-dom';
import { MonthChart } from '../Pages/Charts/MonthChart'
import { WeekChart } from '../Pages/Charts/WeekChart'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/"><MonthChart /></Route>
                <Route exact path="/week"><WeekChart /></Route>
            </Switch>
        </>
    )
}

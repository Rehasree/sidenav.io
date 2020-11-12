import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                 <Route exact path={SLUGS.TrafficAnalysis} component={DashboardComponent} />
                <Route exact path={SLUGS.SocialStudio} render={() => <div>Social Studio</div>} />
                <Route exact path={SLUGS.NewsLetter} render={() => <div>NewsLetter</div>} />
                <Route exact path={SLUGS.Leads} render={() => <div>Leads</div>} />
                <Route exact path={SLUGS.LandingPage} render={() => <div>LandingPage</div>} />
                
                <Route exact path={SLUGS.Cmr} render={() => <div>Cmr</div>} />
                <Redirect to={SLUGS.TrafficAnalysis} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;

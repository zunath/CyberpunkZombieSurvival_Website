import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Logs from './components/admin/logs/Logs';
import ChatLogs from './components/admin/logs/ChatLogs';
import ConnectionLogs from './components/admin/logs/ConnectionLogs';
import QuickBuildLogs from './components/admin/logs/QuickBuildLogs';
import Features from './components/Features';
import Admin from './components/Admin';
import Downloads from './components/Downloads';
import NotFound from './components/NotFound';

export const routes =
    <Layout>
        <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/downloads" component={Downloads} />
            <Route component={NotFound} />
        </Switch>
    </Layout>;

import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Logs from './components/admin/logs/Logs';

export const routes =
    <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/logs" component={Logs} />
    </Layout>;

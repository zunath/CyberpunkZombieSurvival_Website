import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Lore from './components/Lore';
import UserProfile from './components/UserProfile';
import Logs from './components/admin/logs/Logs';
import ChatLogs from './components/admin/logs/ChatLogs';
import ConnectionLogs from './components/admin/logs/ConnectionLogs';
import QuickBuildLogs from './components/admin/logs/QuickBuildLogs';
import QuestEditor from './components/admin/quest-editor/QuestEditor';
import QuestDetails from './components/admin/quest-editor/QuestDetails';
import QuestPrerequisites from './components/admin/quest-editor/QuestPrerequisites';
import QuestRewards from './components/admin/quest-editor/QuestRewards';
import QuestStates from './components/admin/quest-editor/QuestStates';
import Features from './components/Features';
import Admin from './components/Admin';
import Downloads from './components/Downloads';
import NotFound from './components/NotFound';

export const routes =
    <Layout>
        <Switch>

            /* Client Routes */

            /* Public Routes */
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/lore" component={Lore} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/downloads" component={Downloads} />

            /* User Logged-In Routes */
            <Route exact path="/user-profile" component={UserProfile} />

            /* DM Routes */
            <Route exact path="/admin/logs" component={Logs} />
            <Route exact path="/admin/chat-logs" component={ChatLogs} />
            <Route exact path="/admin/connection-logs" component={ConnectionLogs} />
            <Route exact path="/admin/quick-build-logs" component={QuickBuildLogs} />

            /* Admin Routes */
            <Route exact path="/admin/quest-editor" component={QuestEditor} />
            <Route exact path="/admin/quest-editor/quest-details" component={QuestDetails} />
            <Route exact path="/admin/quest-editor/quest-prerequisites" component={QuestPrerequisites} />
            <Route exact path="/admin/quest-editor/quest-rewards" component={QuestRewards} />
            <Route exact path="/admin/quest-editor/quest-states" component={QuestStates} />

            <Route component={NotFound} />
        </Switch>
    </Layout>;

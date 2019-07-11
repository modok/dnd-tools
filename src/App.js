import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CombatManager from "./containers/CombatManager/CombatManager";
import Layout from "./containers/Layout/Layout";


const app = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" component={CombatManager} />
                    </Switch>
                </Layout>
            </div>
        </BrowserRouter>
    );
};

export default app;

import React, { Component, Fragment } from "react";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";


class Layout extends Component {
    state = {
        showSideDraw: false,
    };

    sidedrawerClosedHandler = () => {
        this.setState({
            showSideDraw: false,
        });
    };

    sidedrawerOpenedHandler = () => {
        this.setState({
            showSideDraw: true,
        });
    };

    render() {
        return (
            <Fragment>
                <Toolbar openSideDrawer={this.sidedrawerOpenedHandler} />
                <Sidedrawer
                    isOpen={this.state.showSideDraw}
                    closed={this.sidedrawerClosedHandler}
                />
                <main className="Content">{this.props.children}</main>
            </Fragment>
        );
    }
}
export default Layout;

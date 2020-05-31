import React from 'react';
import routeEvent from './eventManager';

export class RouterLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        window.history.pushState("", this.props.name, this.props.url);
        routeEvent.emit("routeUpdate", this.props.url);
    }
    render() {
        return <a href={this.props.url} onClick={this.handleClick}>{this.props.name}</a>;
    }
}


export class Router extends React.Component {
    constructor(props) {
        super(props);
        this.routeOptions = this.props.routeOptions;

        this.state = {
            currPage: this.routeOptions[0].component
        };

        routeEvent.on("routeUpdate", (route) => {
            const pages = this.routeOptions.filter((a) => a.route === route);
            console.log(pages, route);
            if (pages.length > 0) {
                this.setState({
                    currPage: pages[0].component
                });
            }
        });
    }

    componentDidMount() {
        const defaultPage = this.routeOptions.filter((a) => a.default);
        if (defaultPage.length > 0) {
            this.setState({
                currPage: defaultPage[0].component
            });
        }
    }
    render() {
        return <div>
            <div>
                {this.state.currPage}
            </div>
        </div>;
    }

}
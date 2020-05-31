import React from 'react';
import './navbar.css';
import {RouterLink} from '../Router';;

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.generateLinks = this.generateLinks.bind(this);
        this.generateLinks();
    }
    generateLinks() {
        this.links = [];
        for (const index in this.props.items) {
            this.links.push(<li key={index}>
                <RouterLink url={this.props.items[index].url} name={this.props.items[index].name}/>
            </li>);
        }
    }
    render() {
        return <ul className="header-navbar">
            {this.links}
        </ul>;
    }
}


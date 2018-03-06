import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        let socials = this.props.socials;
        let createSoc = socials.map(el => {
            return <a href={el + '.html'}><i class={'fab fa-' + el} /></a>
        })

        return(
            <footer>
                <div className="footer-container">
                    <div className="social-links">
                        {createSoc}
                    </div>
                </div>
            </footer>
        )
    }
}
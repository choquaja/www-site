import React from 'react';
import styles from './footer.styles.scss';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let classes = '';

        let Styles = null;

        if (this.props.style) {
            Styles = this.props.style;
        }
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }
        return (
            <footer className={"footer-main " + classes}>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="footer-main-wrapper" style={Styles}>
                    <div className="footer-main-section">
                        <div className="footer-main-section-wrapper">
                            <div className="copyright">
                                Copyright © 2015-2017 3Blades.io, Made with love in Atlanta.
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-section">
                        <div className="footer-main-section-wrapper">
                            <div className="footer-main-links">
                                <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

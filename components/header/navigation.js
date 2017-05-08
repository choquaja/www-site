import React from 'react';
import Link from 'next/link';
import styles from './navigation.styles.scss';
import Buttons from '../buttons/buttons';

const navButtons = [
    {
        label: 'Request Early Access',
        title: '',
        icon: null,
        target: '_blank',
        link: 'https://www.getdrip.com/forms/1759481/submissions/new',
        button: {
            classes: 'button button-primary'
        }
    }
];

export default class Navigation extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false
        };

    }


    mobileMenuClasses() {
        if (this.state.mobileMenu === true) {
            return 'mobile-menu-active';
        }
        if (this.state.mobileMenu === false) {
            return '';
        }
    }

    mobileMenuButtonText() {
        if (this.state.mobileMenu === true) {
            return 'Close';
        }
        if (this.state.mobileMenu === false) {
            return 'Menu';
        }
    }

    toggleMobileMenu(event) {
        event.preventDefault();
        this.setState({
            mobileMenu: !this.state.mobileMenu,
        });
        document.body.classList.toggle('no-scroll', !this.state.mobileMenu);
    }

    render() {
        return (
            <div className="navigation-main">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="navigation-main-wrapper">
                    <div className="navigation-main-section">
                    </div>
                    <div className="navigation-main-section">
                        <div className='nav-item mobile-menu-button'
                             onClick={this.toggleMobileMenu.bind(this)}>
                            <div className='nav-item-wrapper'>
                                <div className='nav-item-label'>
                                    <div className='nav-item-label-text'>
                                        {this.mobileMenuButtonText()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className={"navigation " + this.mobileMenuClasses()}>
                            {/* <Link href="/showcase">Showcase</Link> */}
                            <Link href="/about" prefetch><a>About</a></Link>
                            <a href="https://blog.3blades.io" target="_blank">Blog</a>
                            <a href="https://docs.3blades.io/en/latest/" target="_blank">Docs</a>
                            <Buttons items={navButtons}/>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

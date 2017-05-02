import React from 'react';
import Link from 'next/link';
import styles from './navigation.styles.scss';
import Buttons from '../buttons/buttons';

const navButtons = [
    {
        label: 'Sign In',
        title: '',
        icon: null,
        target: '_blank',
        link: 'https://go.3blades.io/auth/login?next=%2F',
        button: {
            classes: 'button button-primary'
        }
    }
];

export default () => {
    "use strict";
    return (
        <div className="navigation-main">
            <style dangerouslySetInnerHTML={{__html: styles}}/>
            <div className="navigation-main-wrapper">
                <div className="navigation-main-section">
                </div>
                <div className="navigation-main-section">
                    <nav>
                        {/*<Link href="/about">*/}


                        {/* <Link href="/showcase">
                            <a>Showcase</a>
                        </Link> */}
                        <Link href="/about" prefetch>
                            <a>About</a>
                        </Link>
                        <a href="https://blog.3blades.io">Blog</a>
                        <a href="https://support.3blades.io/hc/en-us" target="_blank">Support</a>

                        <Buttons items={navButtons}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}

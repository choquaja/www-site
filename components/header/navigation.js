import React from 'react';
import Link from 'next/link';
import styles from './navigation.styles.scss';
import Buttons from '../buttons/buttons';

const navButtons = [
    {
        label: 'Request Beta Access',
        title: '',
        icon: null,
        target: '_blank',
        link: 'https://www.getdrip.com/forms/1759481/submissions/new',
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
                        {/* <Link href="/showcase">Showcase</Link> */}
                        <Link href="/about" prefetch>About</Link>
                        <a href="https://blog.3blades.io" target="_blank">Blog</a>
                        <a href="https://docs.3blades.io/en/latest/" target="_blank">Docs</a>
                        <Buttons items={navButtons}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}

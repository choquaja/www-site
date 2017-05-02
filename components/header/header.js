import React from 'react'
import Logo from '../logo/logo';
import Navigation from './navigation';
import styles from './header.styles.scss';
import {color, font, unit} from '../../styles/styles.config';

export default (props) => {

    let classes = '';

    if('light' in props){
        classes += ' light';
    }
    if('dark' in props){
        classes += ' dark';
    }


    return(
        <header className={'header-main' + classes}>
            <style dangerouslySetInnerHTML={{__html: styles}} />
            <div className="header-main-wrapper icon is-twitter">
                <Logo {...props} />
               <Navigation {...props} />
            </div>
        </header>
    )
}

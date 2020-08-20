import React from 'react';
import NewsletterForm from './newsletter-form/newsletter-form.component'

import { ReactComponent as FbLogo } from '../../assetts/icons/facebook.svg'
import { ReactComponent as InstaLogo } from '../../assetts/icons/instagram.svg'
import { ReactComponent as LinkedinLogo } from '../../assetts/icons/linkedin.svg'
import { ReactComponent as TwitterLogo } from '../../assetts/icons/twitter.svg'
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-wrapper'>
                <div className='left-footer-container'>
                    <div className='footer-title-container'>
                            <h1> CONSULT NAME </h1>
                    </div>
                    <div className='footer-text-columns'>
                        <div className='footer-address-container'>
                            <h4 className='footer-strong-text'>Helsinki</h4>
                            <p>Tammasaarenkatu 3</p>
                            <p>00180 Helsinki</p>
                            <p>Finland</p>
                        </div>
                        <div className='footer-terms-container'>
                            <p><strong><a> Privacy Policy </a></strong></p>
                            <p><strong><a> Terms and Conditions </a></strong></p>
                        </div>
                    </div>
                </div>
                <div className='footer-newsletter-container'>
                    <h4 className='footer-strong-text'>Sign up for our newsletter</h4>
                    <NewsletterForm />
                    <p>Would you like more information on how we handle your personal information? See our <a>privacy policy.</a></p>
                    <div className='icons-container'>
                        <div className='svg-container'>  <FbLogo /> </div>
                        <div className='svg-container'> <InstaLogo /> </div>
                        <div className='svg-container'> <TwitterLogo /> </div>
                        <div className='svg-container'> <LinkedinLogo /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
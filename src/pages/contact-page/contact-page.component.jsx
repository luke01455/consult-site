import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component'
import SquadCard from '../../components/squad-card/squad-card.component'
import Footer from '../../components/footer/footer.component'
import './contact-page.styles.scss';

const ContactPage = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);
    return (
        <div className='contact-page-container'>
            <Header scrollLocation={scrollTop} />
            <div className='contact-page-wrapper'>
                <h1> Contact Us </h1>
                <div className='contact-text-wrapper'>
                    <p>Contact us and we’ll talk more about successful marketing!</p>
                </div>
                <div className='contact-card-container'>
                    <SquadCard name='Sebastian Östman' title='COO and Co-founder' 
                     number='+358 50 308 4196' email='sebastian@genero.fi' imgLoc='sebastian-ostman-4-520x540-c-default'/>
                    <SquadCard name='Rasmus Östman' title='CEO and Co-founder'
                     number='+358 40 742 9523' email='rasmus@genero.fi' imgLoc='rasmus-ostman-4-520x540-c-default'/>
                    <SquadCard name='Jonathan Björkskog' title='Co-founder and Director'
                     number='+358 50 539 4288' email='jonathan@genero.fi' imgLoc='jonathan-bjorkskog-5-520x540-c-default'/>
                    <SquadCard name='Christopher Oksman' title='Country Manager Sweden'
                     number='+358 40 736 0733' email='christopher@genero.fi' imgLoc='christopher-oksman-5-520x540-c-default'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactPage;
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component'
import SquadCard from '../../components/squad-card/squad-card.component'
import Footer from '../../components/footer/footer.component'
import './squad-page.styles.scss';

const SquadPage = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);
    return (
        <div className='squad-page-container'>
            <Header scrollLocation={scrollTop} />
            <div className='squad-page-wrapper'>
                <h1> Our Squad </h1>
                <div className='squad-text-wrapper'>
                    <p>Our crew currently includes almost 50 talented individuals.</p>
                    <p>Our team consists of account managers, growth hackers, designers,
                        copywriters and web developers. Our combined skills and expertise are guaranteed to grow your company and improve your sales figures!</p>
                </div>
                <div className='squad-card-container'>
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
export default SquadPage;
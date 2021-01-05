import React from 'react';
import './About.css';
import AboutImg from '../AboutImg/AboutImg';
import {Trans} from '@lingui/macro';


function About() {
    return (
        <>
            <section className='about'>
                <div className='about-content'>
                    <h1 className='about__title'><Trans>Some text</Trans></h1>
                    <p className='about__text'><Trans>A diverse and rich experience consultation with a wide asset provides
                        a wide range. Everyday practice shows that the implementation of planned tasks
                        largely determines the creation of a development model. Comrades! the existing structure
                        The organization is an interesting experiment of checking the directions of progressive
                        development.
                        The significance of these problems is so obvious that the further development of various forms
                        of activity
                        provides a wide range of (specialists) participation in the formation of new proposals. It
                        should not
                        be forgotten, however, that the further development of various forms of activity contributes to
                        the preparation and
                        implementation of forms of development.</Trans></p>

                    <p className='about__text'><Trans>On the
                        other hand, the strengthening and development of the structure ensures participation in
                        the formation of
                        mass participation systems. Ideological considerations of the highest order, as well as the
                        strengthening and development of the structure
                        It plays an important role in the formation of significant financial and administrative
                        conditions.</Trans></p>

                </div>
                <div className='about__images'>
                    <AboutImg/>

                </div>

            </section>
        </>
    )

}


export default About;

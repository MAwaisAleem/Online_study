import React from 'react';
import './Hero.css';
import Heading from '../../common/heading/Heading';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* Corrected the Heading component usage */}
            <Heading subtitle='WELCOME TO ACDAEMIA' title='Best online Education' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas maiores dicta amet illum earum exercitationem magnam facere, laudantium quibusdam facilis.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='primary-btn'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;

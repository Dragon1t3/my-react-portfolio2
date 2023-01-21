import React from 'react'
import './services.css'
import {SlCheck} from 'react-icons/sl'

function services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

            <ul className='service__list'>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

            <ul className='service__list'>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
        </article>
        {/* END OF WEBDEVELPOMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

            <ul className='service__list'>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <SlCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default services
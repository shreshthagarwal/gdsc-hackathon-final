import React, { Component } from "react";
import './Organizer.css';
import './team.css';

const organizersData = [
  {
    imgUrl: "https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg",
    name: 'Organizer 1',
    position: 'Position 1',
    linkedin: 'linkedin-link',
    github: 'github-link',
    website: 'website-link'
  },
  {
    imgUrl: "https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg",
    name: 'Organizer 1',
    position: 'Position 1',
    linkedin: 'linkedin-link',
    github: 'github-link',
    website: 'website-link'
  },
  {
    imgUrl: "https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg",
    name: 'Organizer 1',
    position: 'Position 1',
    linkedin: 'linkedin-link',
    github: 'github-link',
    website: 'website-link'
  },
  {
    imgUrl: "https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg",
    name: 'Organizer 1',
    position: 'Position 1',
    linkedin: 'linkedin-link',
    github: 'github-link',
    website: 'website-link'
  },
  // Add more organizers as needed
];

class Team extends Component {
  render() {
    return (
    <section className='our__team'>
      <div className='container'>
        <div className='team__wrapper'>
          {organizersData.map((item, index) => (
            <div className='team__item' key={index}>
              <div className='team__img'>
                <img src={item.imgUrl} alt='' />
              </div>
              <div className='team__details'>
                <h4>{item.name}</h4>
                <p className='description'>{item.position}</p>

                <div className='team__member-social'>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <span><i className='ri-linkedin-line'></i></span>
                  </a>
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <span><i className='ri-twitter-line'></i></span>
                  </a>
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    <span><i className='ri-facebook-line'></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  }
}

class Organizer extends Component {
  render() {
    return (
      <div className="Organizer">
        <Team />
      </div>
    );
  }
}

export default Organizer;

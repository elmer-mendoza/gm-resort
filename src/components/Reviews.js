import React, { useState } from 'react';
import {reviews as people} from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight,FaQuoteLeft } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  

  return (
    <section className="review-container ">
      <article className='review'>
       <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
       </div>
     </article> 

    <article className='review'>
      <div className='imgReview-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
    </article>

    <article className='review reviewQuote'>
     <span className='quote-icon'>
          <FaQuoteRight />
        </span> 
      <p className='reviewInfo'>" {text} "</p>
     <span className='quote-icon'>
          <FaQuoteLeft />
        </span> 
    </article>
    <article className='review'>
       <div className='button-container'>
        <button className='prev-btn-show' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={prevPerson}>
           <FaChevronRight />
        </button>
       </div>
     </article>
  </section>
  );
};

export default Review;
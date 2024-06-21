import React from 'react';

const StarRating = ({ rating }) => {
  const displayStars = (rating) => {
    const numStars = Math.round(rating);
    const stars = '⭐'.repeat(numStars);
    return stars;
  };

  return (
    <div className="star-rating">{displayStars(rating)}</div>
  );
};

const Slide = ({ image, name, comment_text, rating }) => {
  return (
    <div className="bg-white p-6 lg:p-10">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        What clients are saying
      </h1>
      <div className="flex justify-center mx-auto mt-4 lg:mt-6">
        <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 lg:mt-8">
        <img className="object-cover rounded-full w-20 h-20 lg:w-24 lg:h-24" src={image} alt="" />
        <div className="mt-2 lg:mt-4 text-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>
        </div>
        <div className="w-full px-4 mt-2 lg:mt-4 text-center">
          <h1 className="font-semibold text-gray-800 dark:text-white">"{comment_text}"</h1>
        </div>
        <div className="mt-2 lg:mt-4 text-center">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Slide;

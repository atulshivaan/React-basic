import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './colourcard.css';

const ColorCard = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  return (
    <div className='card w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

ColorCard.propTypes = {
  initialColor: PropTypes.string,
};

ColorCard.defaultProps = {
  initialColor: 'olive',
};

export default ColorCard;

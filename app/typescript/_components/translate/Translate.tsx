import React from 'react';
import { AllTypes } from './Translate.types';

const Translate = ({ toTranslate }: AllTypes) => {
  return (
    <div>
      <h2 className="text-3xl font-bold p-6 bg-white text-black">{toTranslate}</h2>
    </div>
  );
};

export default Translate;

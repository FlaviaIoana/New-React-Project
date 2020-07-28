import React from 'react';
export const SingleInput = ({ name, onChange }) => (

  <input
    type='text'
    name={name}
    onChange={onChange}
  />
)
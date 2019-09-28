import React from 'react';

function TextInput({ name, value, label, placeholder, onChange }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input 
          name={name} 
          className="input" 
          type="text" 
          placeholder={placeholder} 
          onChange={onChange} 
          value={value} />
      </div>
    </div>
  );
}

export default TextInput;
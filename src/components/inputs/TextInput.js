import React from 'react';

function TextInput({ value, label, placeholder, onChange }) {
  return (
    <div class="field">
      <label class="label">{label}</label>
      <div class="control">
        <input class="input" type="text" placeholder={placeholder} onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default TextInput;
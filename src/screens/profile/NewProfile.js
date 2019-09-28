import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import TextInput from 'components/inputs/TextInput';
import UploadImageInput from 'components/inputs/UploadImageInput'


function NewProfile({ t }) {

  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({...values, [name]: value})
  }

  return (
    <div>
      <p>New profile page</p>

      <TextInput 
        label={t('firstName.label')} 
        placeholder={t('firstName.placeholder')} 
        name="firstName"
        value={values.firstName} 
        onChange={handleInputChange} />
      <TextInput 
        label={t('lastName.label')} 
        placeholder={t('lastName.placeholder')} 
        name="lastName"
        value={values.lastName} 
        onChange={handleInputChange}/>

      <UploadImageInput/>

    </div>
  );
};

export default withTranslation()(NewProfile);
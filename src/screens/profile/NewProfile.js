import React from 'react';
import { withTranslation } from 'react-i18next';
import TextInput from 'components/inputs/TextInput';


class NewProfile extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  render() {

    const { t } = this.props;
    const { firstName, lastName } = this.state;

    return (
      <div>
        <p>New profile page</p>

        <TextInput label={t('firstName.label')} placeholder={t('firstName.placeholder')} value={firstName} />
        <TextInput label={t('lastName.label')} placeholder={t('lastName.placeholder')} value={lastName} />

      </div>
    );
  }
};

export default withTranslation()(NewProfile);
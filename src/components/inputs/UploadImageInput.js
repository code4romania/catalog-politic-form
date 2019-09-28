import React from 'react';

class UploadImageInput extends React.Component {
  
  state = {
    uploadedImageURL:''
  }

  displayImage = (event) => {
    const files = Array.from(event.target.files);

    const file = files[0];
    const imageType = /image.*/;
    if (!file.type.match(imageType)) {
      return;
    }

    const fileURL = URL.createObjectURL(event.target.files[0])
    this.setState({
      uploadedImageURL: fileURL
    });
  };

  render() {

    const { uploadedImageURL } = this.state;

    return (
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="control uploader">
              <a className="button button is-dark is-fullwidth is-medium">
                  <span className="icon is-small">
                      <i className="fas fa-upload"></i>
                  </span>
                  <span>Upload image</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={this.displayImage} 
                    value=""
                    className="button button is-dark chooseFile" />
              </a>
            </p>
          </div>
          <div className="field">
            <img id="thumbnail" src={uploadedImageURL} />
          </div>

        </div>
      </div>
    );
  }
}

export default UploadImageInput;
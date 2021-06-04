import React from 'react';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';

const ImagePicker = ({ onDrop }) => {
  return (
    <ImageUploader
      withPreview={true}
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
    />
  );
};

ImagePicker.propTypes = { onDrop: PropTypes.func };

export default ImagePicker;

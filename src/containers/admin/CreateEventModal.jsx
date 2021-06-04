import React, { useState } from 'react';
import { CustomCheckBox, CustomModal, DateSelector, TextInput } from '../../components';
import { ImagePicker } from '../../containers';
import { Textarea } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CreateEventModal = ({ isOpen, onOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [pictures, setPictures] = useState([]);
  const [carousel, setCarousel] = useState(false);

  const onDrop = (picture) => {
    console.log(picture);
    setPictures(picture);
  };

  const onSubmit = () => {
    if (!title) {
      alert('Title can not be empty');
      return;
    }
    if (!location) {
      alert('Location can not be empty');
      return;
    }
    if (!date) {
      alert('Date can not be empty');
      return;
    }
    if (!description) {
      alert('Description can not be empty');
      return;
    }

    alert('Event Created');
    onClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      title="Create Event"
      leftButtonText="Close"
      leftButtonAction={onClose}
      rightButtonText="Create Event"
      rightButtonAction={onSubmit}
      body={
        <>
          <div className="row col-12">
            <div className="col-7">
              <TextInput
                placeholder="Enter event title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-5 mt-2">
              <CustomCheckBox
                isDisabled={false}
                label="Show on Carousel"
                isChecked={carousel}
                onChange={(e) => setCarousel(e.target.checked)}
              />
            </div>
          </div>
          <div className="row col-12 my-4">
            <div className="col-6">
              <TextInput
                placeholder="Enter event location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-6">
              <DateSelector
                placeholderText="Select event date"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>
          <Textarea
            placeholder="Enter event description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ImagePicker onDrop={onDrop} />
        </>
      }
    />
  );
};

CreateEventModal.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default CreateEventModal;

import React, { useEffect, useState } from 'react';
import { CustomCheckBox, CustomModal, DateSelector, TextInput } from '../../components';
import { ImagePicker } from '../../containers';
import { Textarea } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

const CreateEventModal = ({ isOpen, onOpen, onClose, data }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [pictures, setPictures] = useState([]);
  const [carousel, setCarousel] = useState(false);
  const firestore = useFirestore();

  useEffect(() => {
    if (data && data !== null) {
      console.log('data: ', data);
      setTitle(data.title);
      setLocation(data.location);
      setDescription(data.description);
      setDate(data.date.toDate());
      setCarousel(data.carousel);
    }
  }, [data]);

  const onDrop = (picture) => {
    console.log(picture);
    setPictures(picture);
  };

  const updateCreateEvent = () => {
    const event = {
      title,
      location,
      date,
      description,
      carousel,
    };

    if (data && data !== null) {
      firestore
        .update(`events/${data.id}`, event)
        .then((result) => {
          console.log(result);
          clearStates();
          onClose();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      firestore
        .collection('events')
        .add(event)
        .then((result) => {
          console.log(result);
          clearStates();
          onClose();
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

    updateCreateEvent();
  };

  const clearStates = () => {
    setTitle('');
    setLocation('');
    setDescription('');
    setDate('');
    setPictures([]);
    setCarousel(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      title="Create Event"
      leftButtonText="Close"
      leftButtonAction={onClose}
      rightButtonText={data && data !== null ? 'Update Event' : 'Create Event'}
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

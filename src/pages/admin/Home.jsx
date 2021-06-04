import React, { useState } from 'react';
import { EventsTable, CustomButton, CustomSpinner } from '../../components';
import { Heading } from '@chakra-ui/react';
import { CreateEventModal } from '../../containers';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Typography } from '@material-ui/core';

const eventsQuery = {
  collection: 'events',
  limitTo: 10,
};

const Home = () => {
  const [eventModalOpen, setEventModalOpen] = useState(false);

  //Attach Events Listener
  useFirestoreConnect(() => [eventsQuery]);
  // Get Events from redux store
  const events = useSelector(({ firestore: { ordered } }) => ordered.events);
  console.log('events: ', events);
  // Show a message while events are loading
  if (!isLoaded(events)) {
    return (
      <div className="mt-5 text-center">
        <CustomSpinner />
      </div>
    );
  }

  // Show a message if there are no events

  // return '';
  // }
  return (
    <>
      <div style={{ float: 'right', margin: 20 }}>
        <CustomButton
          label="Create Event"
          colorScheme="green"
          onClick={() => setEventModalOpen(true)}
        />
      </div>
      <br></br>
      <div>
        <Heading style={{ marginLeft: 20 }}>Events Created</Heading>
        {isEmpty(events) ? (
          <Typography variant="h5" className="mt-4 text-center">
            Events list is empty
          </Typography>
        ) : (
          <EventsTable data={events} />
        )}
      </div>
      <CreateEventModal isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />
    </>
  );
};

export default Home;

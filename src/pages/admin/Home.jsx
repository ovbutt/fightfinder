import React, { useState } from 'react';
import { EventsTable, CustomButton } from '../../components';
import { Heading } from '@chakra-ui/react';
import { CreateEventModal } from '../../containers';

const tableData = [
  {
    id: 1,
    title: 'King Fight Event',
    location: 'USA',
    date: ' 21 - 06 - 2021',
    carousel: true,
  },
  {
    id: 2,
    title: 'King Fight Event',
    location: 'USA',
    date: ' 21 - 06 - 2021',
    carousel: true,
  },
  {
    id: 3,
    title: 'King Fight Event',
    location: 'USA',
    date: ' 21 - 06 - 2021',
    carousel: true,
  },
  {
    id: 4,
    title: 'King Fight Event',
    location: 'USA',
    date: ' 21 - 06 - 2021',
    carousel: true,
  },
  {
    id: 5,
    title: 'King Fight Event',
    location: 'USA',
    date: ' 21 - 06 - 2021',
    carousel: true,
  },
];

const Home = () => {
  const [eventModalOpen, setEventModalOpen] = useState(false);

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
        <EventsTable data={tableData} />
      </div>
      <CreateEventModal isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />
    </>
  );
};

export default Home;

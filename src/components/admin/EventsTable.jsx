import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import { CustomCheckBox, IconBtn } from '../index';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { ConfirmDialogue } from '..';
import { useFirestore } from 'react-redux-firebase';
import { CreateEventModal } from '../../containers';

const EventsTable = ({ data }) => {
  const [confirmDialogue, setConfirmDialogue] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [eventModalOpen, setEventModalOpen] = useState(false);

  const firestore = useFirestore();

  function deleteEvent(id) {
    firestore.delete(`events/${id}`);
  }
  return (
    <Table variant="simple">
      {/* <TableCaption placement="top"><Heading> Events Created</Heading></TableCaption> */}
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Title</Th>
          <Th>Location</Th>
          <Th>Date</Th>
          <Th>Carousel</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{item.title}</Td>
            <Td> {item.location}</Td>
            <Td> {item.date.toDate().toDateString()}</Td>
            <Td>
              <CustomCheckBox isChecked={item.carousel} isDisabled={true} />
            </Td>
            <Td>
              <IconBtn
                colorScheme="blue"
                icon={<EditIcon />}
                onClick={() => {
                  setSelectedItem(item);
                  setEventModalOpen(true);
                }}
              />
              <IconBtn
                className="ml-3"
                colorScheme="red"
                icon={<DeleteIcon />}
                onClick={() => {
                  setConfirmDialogue(true);
                  setSelectedItem(item);
                }}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>{/* <BasicPagination /> */}</Tfoot>
      <ConfirmDialogue
        isOpen={confirmDialogue}
        onClose={() => setConfirmDialogue(false)}
        rightButtonAction={() => deleteEvent(selectedItem.id)}
      />
      <CreateEventModal
        data={selectedItem}
        isOpen={eventModalOpen}
        onClose={() => setEventModalOpen(false)}
      />
    </Table>
  );
};

EventsTable.propTypes = {
  data: PropTypes.array,
};

EventsTable.defaultProps = {
  data: [],
};

export default EventsTable;

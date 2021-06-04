import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import { CustomCheckBox, IconBtn } from '../index';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ConfirmDialogue from '../ConfirmDialogue';
import { useFirestore } from 'react-redux-firebase';

const EventsTable = ({ data }) => {
  const [confirmDialogue, setConfirmDialogue] = useState(false);
  const [selectedId, setSelectedId] = useState('');
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
              <IconBtn colorScheme="blue" icon={<EditIcon />} />
              <IconBtn
                className="ml-3"
                colorScheme="red"
                icon={<DeleteIcon />}
                onClick={() => {
                  setConfirmDialogue(true);
                  setSelectedId(item.id);
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
        rightButtonAction={() => deleteEvent(selectedId)}
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

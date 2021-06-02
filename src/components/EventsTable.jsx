import React from "react";
import PropTypes from "prop-types";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td} from "@chakra-ui/react";
import {  CustomCheckBox, IconBtn } from "./index";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const EventsTable = ({ data }) => {
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
          <Tr>
            <Td>{item.id}</Td>
            <Td>{item.title}</Td>
            <Td> {item.location}</Td>
            <Td> {item.date}</Td>
            <Td>
              {" "}
              <CustomCheckBox isChecked={item.carousel} isDisabled={true} />
            </Td>
            <Td>
              {" "}
              <IconBtn colorScheme="blue" icon={<EditIcon />} />{" "}
              <IconBtn colorScheme="red" icon={<DeleteIcon />} />{" "}
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
      {/* <BasicPagination /> */}
      </Tfoot>
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

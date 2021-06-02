import React from "react";
import { EventsTable, CustomButton } from "../../components";

const tableData = [
  {
    id: 1,
    title: "King Fight Event",
    location: "USA",
    date: " 21 - 06 - 2021",
    carousel: true,
  },
  {
    id: 2,
    title: "King Fight Event",
    location: "USA",
    date: " 21 - 06 - 2021",
    carousel: true,
  },
  {
    id: 3,
    title: "King Fight Event",
    location: "USA",
    date: " 21 - 06 - 2021",
    carousel: true,
  },
  {
    id: 4,
    title: "King Fight Event",
    location: "USA",
    date: " 21 - 06 - 2021",
    carousel: true,
  },
  {
    id: 5,
    title: "King Fight Event",
    location: "USA",
    date: " 21 - 06 - 2021",
    carousel: true,
  },
];

const Home = () => {
  return (
    <>
      <CustomButton label="Create Event" colorScheme="red" />
      <EventsTable data={tableData} />
    </>
  );
};

export default Home;

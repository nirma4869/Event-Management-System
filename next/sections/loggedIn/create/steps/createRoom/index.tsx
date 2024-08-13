import { Container } from "@mui/material";
import { useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import RoomArea from "./RoomArea";
import CreateRoomToolbar from "./Toolbar";

// ----------------------------------------------------------------------

export const CreateRoom = () => {
  const [currentSelectedTableId, setCurrentSelectedTableId] =
    useState<string>();

  return (
    <Container sx={{ width: 1, pt: 3 }}>
      <CreateRoomToolbar currentSelectedTableId={currentSelectedTableId} />

      <RoomArea
        currentSelectedTableId={currentSelectedTableId}
        setCurrentSelectedTableId={setCurrentSelectedTableId}
      />
    </Container>
  );
};

export default CreateRoom;

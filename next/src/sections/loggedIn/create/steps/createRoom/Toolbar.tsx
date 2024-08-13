import RHFInputField from "@/components/hook-form/RHFInputField";
import { Field, InputFieldType } from "@/components/hook-form/types";
import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import { Table, createNewTable } from "@/models/table";
import { NestedKeyOf } from "@/models/typeHelper";
import { Button, Fade, IconButton, Stack, Tooltip } from "@mui/material";
import isEmpty from "lodash/isEmpty";
import { Trans } from "next-i18next";
import { useEffect, useState } from "react";
import { useEventCreateContentContext } from "../..";

// ----------------------------------------------------------------------

type Props = {
  currentSelectedTableId: string | undefined;
};

// ----------------------------------------------------------------------

export const CreateRoomToolbar = ({ currentSelectedTableId }: Props) => {
  const { methods } = useEventCreateContentContext();
  const [currentSelectedTable, setCurrentSelectedTable] = useState<Table>();
  const [selectedTableIndex, setSelectedTableIndex] = useState<number>();

  const { watch, setValue } = methods;
  const tables = watch("tables");

  const onTableAddTable = () => {
    const newTable = createNewTable(watch("id"));
    const newTableArray = [...tables];
    newTableArray.push(newTable);
    setValue("tables", newTableArray);
  };

  const onDeleteTable = () => {
    if (currentSelectedTable) {
      const newTableArray = [...tables].filter(
        (item) => item !== currentSelectedTable
      );
      setValue("tables", newTableArray);
      setCurrentSelectedTable(undefined);
    }
  };

  const TOOLBAR_FIELDS: Field<NestedKeyOf<Event>>[] = [
    {
      name: `tables.${selectedTableIndex ?? 0}.publicId`,
      translation: i18n.t("loggedIn.createEvent.stepTwo.toolbar.tableName"),
      inputType: InputFieldType.TextField,
      required: true,
      size: "small",
    },
    {
      name: `tables.${selectedTableIndex ?? 0}.capacity`,
      translation: i18n.t("loggedIn.createEvent.stepTwo.toolbar.capacity"),
      inputType: InputFieldType.TextField,
      required: true,
      size: "small",
    },
  ];

  useEffect(() => {
    if (currentSelectedTableId && !isEmpty(tables)) {
      const currentTableById = tables.find(
        (table) => table.id === parseInt(currentSelectedTableId)
      );
      if (currentTableById) {
        setSelectedTableIndex(
          tables.findIndex((table) => table.id === currentTableById.id)
        );
        setCurrentSelectedTable(currentTableById);
      }
    } else {
      setCurrentSelectedTable(undefined);
    }
  }, [currentSelectedTableId, tables]);

  return (
    <Stack direction={"row"} sx={{ pb: 2, justifyContent: "space-between" }}>
      <Button
        disableRipple
        endIcon={<Iconify icon="material-symbols:add" />}
        style={{ textTransform: "none" }}
        onClick={onTableAddTable}
      >
        {i18n.t("loggedIn.createEvent.stepTwo.toolbar.addTable")}
      </Button>

      {currentSelectedTable && (
        <Stack direction={"row"} spacing={2}>
          <Tooltip
            title={
              <Trans
                i18nKey={"loggedIn.createEvent.stepTwo.toolbar.info"}
                components={{ 1: <p />, 2: <b /> }}
              />
            }
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            leaveDelay={250}
          >
            <IconButton disableRipple>
              <Iconify icon="ic:baseline-info" color="gray" />
            </IconButton>
          </Tooltip>
          {TOOLBAR_FIELDS.map((field) => (
            <Stack key={field?.name} direction={"row"} spacing={2}>
              <RHFInputField field={field} />
            </Stack>
          ))}

          <IconButton
            disableRipple
            color="error"
            style={{ textTransform: "none" }}
            onClick={onDeleteTable}
          >
            <Iconify icon="ic:baseline-delete" />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};

export default CreateRoomToolbar;

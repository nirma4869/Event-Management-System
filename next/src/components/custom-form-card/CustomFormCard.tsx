import i18n from "@/locales/i18n";
import { useCreateFormulaContext } from "@/sections/loggedIn/create/steps/createFormula";
import { FormTypes } from "@/sections/loggedIn/create/steps/createFormula/types";
import { getDraggableSx } from "@/sections/loggedIn/create/steps/createFormula/utils";
import { localizeFormTypes } from "@/utils/enumLocalization";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Iconify from "../iconify";
import { CustomFormCardProps } from "./types";

// ----------------------------------------------------------------------

export const CustomFormCard = ({ formIndex }: CustomFormCardProps) => {
  const theme = useTheme();

  const { createdForms, setCurrentSelectedForm, setIsEdit } =
    useCreateFormulaContext();

  const {
    transform,
    transition,
    isDragging,
    setNodeRef,
    attributes,
    listeners,
  } = useSortable({
    id: createdForms[formIndex].id,
  });

  const currentForm = createdForms[formIndex];
  const { name, type, options } = currentForm;
  const style = { transform: CSS.Transform.toString(transform), transition };

  const handleEditForm = () => {
    setIsEdit(true);
    setCurrentSelectedForm(currentForm);
  };

  return (
    <Grid
      container
      alignItems={"center"}
      sx={getDraggableSx(transform, transition, isDragging)}
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
    >
      <Grid item xs={1}>
        <IconButton
          disableRipple
          size="small"
          sx={{
            cursor: "grab",
            color: theme.palette.grey[600],
          }}
        >
          <Iconify icon="nimbus:drag-dots" />
        </IconButton>
      </Grid>
      <Grid item xs={11}>
        <Card
          sx={{
            p: 1.5,
            border: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Typography>{name}</Typography>
              <Breadcrumbs separator={<Separator />}>
                <Typography>{localizeFormTypes(type)}</Typography>
                {[
                  FormTypes.CHECKBOX,
                  FormTypes.DROPDOWN,
                  FormTypes.RADIOBUTTON,
                ].includes(type) && (
                  <Typography
                    color={
                      options && options.every((option) => option === "")
                        ? theme.palette.warning.main
                        : "textDisabled"
                    }
                  >
                    {options
                      ? options.every((option) => option === "")
                        ? i18n.t(
                            "loggedIn.createEvent.stepThree.createForm.noAnswers"
                          )
                        : options.length > 1
                        ? `${options[0]}, ...`
                        : options[0]
                      : ""}
                  </Typography>
                )}
              </Breadcrumbs>
            </Stack>
            <Stack direction={"row"}>
              <Button onClick={handleEditForm} disableRipple>
                {i18n.t("loggedIn.createEvent.stepThree.createForm.edit")}
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CustomFormCard;

// ----------------------------------------------------------------------

const Separator = () => {
  return (
    <Box
      component="span"
      sx={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        bgcolor: "text.disabled",
      }}
    />
  );
};

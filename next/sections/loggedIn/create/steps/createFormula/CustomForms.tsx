import { CustomFormCard } from "@/components/custom-form-card";
import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import {
  DndContext,
  DragOverEvent,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Stack, Typography } from "@mui/material";
import isEmpty from "lodash/isEmpty";
import { useCreateFormulaContext } from ".";

// ----------------------------------------------------------------------

export const CustomForms = () => {
  const { createdForms, setCreatedForms } = useCreateFormulaContext();

  const handleDragEnd = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      setCreatedForms((forms) => {
        const activeIndex = forms.findIndex((form) => form.id === active.id);
        const overIndex = forms.findIndex((form) => form.id === over.id);
        return arrayMove(forms, activeIndex, overIndex);
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );
  return (
    <>
      {isEmpty(createdForms) ? (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Iconify icon="ic:outline-info" />
          <Typography color="textDisabled">
            {i18n.t("loggedIn.createEvent.stepThree.createForm.emptyForms")}
          </Typography>
        </Stack>
      ) : (
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <Stack direction={"column"} spacing={3}>
            <SortableContext
              items={createdForms}
              strategy={verticalListSortingStrategy}
            >
              {createdForms.map((form, index) => (
                <CustomFormCard key={form.id} formIndex={index} />
              ))}
            </SortableContext>
          </Stack>
        </DndContext>
      )}
    </>
  );
};

export default CustomForms;

import {
  CustomToolbar,
  CustomToolbarButtonItem,
} from "@/components/custom-toolbar";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import { createEvent } from "@/redux/slices/event";
import { dispatch, useSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useEventCreateContentContext } from ".";

// ----------------------------------------------------------------------
export const CreateEventToolbar = () => {
  const { methods } = useEventCreateContentContext();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { create } = useSelector((state) => state.event.status.events);

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleCreate = async (data: Event) => {
    try {
      await dispatch(createEvent({ ...data }));
      enqueueSnackbar(i18n.t("messages.success.createEvent"), {
        variant: "success",
      });
      router.push("/dashboard");
    } catch (error) {
      enqueueSnackbar(i18n.t("messages.error.createEvent.failed"), {
        variant: "error",
      });
    }
  };

  const handleSave = () => {
    if (!isValid) {
      enqueueSnackbar(i18n.t("messages.error.createEvent.missingFields"), {
        variant: "info",
      });
    }

    handleSubmit(handleCreate)();
  };

  const toolButtons: CustomToolbarButtonItem[] = [
    {
      props: {
        name: "abort",
        variant: "outlined",
        color: "error",
        children: i18n.t("loggedIn.createEvent.toolbar.abort"),
      },
      link: "/dashboard",
    },
  ];

  const workflowButtons: CustomToolbarButtonItem[] = [
    {
      props: {
        name: "save",
        variant: "contained",
        color: "primary",
        loading: create === "loading",
        onClick: handleSave,
        children: i18n.t("loggedIn.createEvent.toolbar.create"),
      },
    },
  ];

  return (
    <CustomToolbar
      name="CreateEventToolbar"
      tools={toolButtons}
      workflow={workflowButtons}
    />
  );
};

export default CreateEventToolbar;

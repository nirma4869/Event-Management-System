import {
  CustomToolbar,
  CustomToolbarButtonItem,
} from "@/components/custom-toolbar";
import i18n from "@/locales/i18n";
import { EventRegistration } from "@/models/eventRegistration";
import { createEventRegistration } from "@/redux/slices/event";
import { dispatch, useSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { UseFormReturn } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = {
  methods: UseFormReturn<EventRegistration, any>;
};

// ----------------------------------------------------------------------

export const EventSignUpToolbar = ({ methods }: Props) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { create } = useSelector(
    (state) => state.event.status.eventsRegistrations
  );

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleCreate = async (data: EventRegistration) => {
    try {
      await dispatch(createEventRegistration({ ...data }));
      enqueueSnackbar(i18n.t("messages.success.eventRegistrationSignUp"), {
        variant: "success",
      });
      router.push("/dashboard");
    } catch (error: any) {
      /* enqueueSnackbar(i18n.t("messages.error.eventRegistrationSignUp.failed"), {
        variant: "error",
      }); */
      enqueueSnackbar(error.message),
        {
          variant: "error",
        };
    }
  };

  const handleSave = () => {
    if (!isValid) {
      enqueueSnackbar(
        i18n.t("messages.error.eventRegistrationSignUp.missingFields"),
        {
          variant: "error",
        }
      );
    }

    handleSubmit(handleCreate)();
  };

  const toolButtons: CustomToolbarButtonItem[] = [
    {
      props: {
        name: "abort",
        variant: "outlined",
        color: "error",
        children: i18n.t("loggedIn.eventSignUp.toolbar.abort"),
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
        sx: { textTransform: "none" },
        children: i18n.t("loggedIn.eventSignUp.toolbar.create"),
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

export default EventSignUpToolbar;

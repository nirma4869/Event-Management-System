import { Container, Divider, Grid, useTheme } from "@mui/material";
import isEmpty from "lodash/isEmpty";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import CreateNewForm from "./CreateNewForm";
import CustomForms from "./CustomForms";
import { CustomFormProps, initialCustomForm } from "./types";

// ----------------------------------------------------------------------

type CreateFormulaContextType = {
  createdForms: CustomFormProps[];
  currentSelectedForm: CustomFormProps;
  isEdit: boolean;
  setCreatedForms: Dispatch<SetStateAction<CustomFormProps[]>>;
  setCurrentSelectedForm: Dispatch<SetStateAction<CustomFormProps>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

export const CreateFormulaContext = createContext<CreateFormulaContextType>(
  {} as CreateFormulaContextType
);

export const useCreateFormulaContext = () => {
  const context = useContext(CreateFormulaContext);
  if (!context) {
    throw new Error(
      "useCreateFormulaContext must be used within a CreateFormulaContext"
    );
  }
  return context;
};

// ----------------------------------------------------------------------

export const CreateFormula = () => {
  const theme = useTheme();
  const [createdForms, setCreatedForms] = useState<CustomFormProps[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentSelectedForm, setCurrentSelectedForm] =
    useState<CustomFormProps>(initialCustomForm);

  const contextValue: CreateFormulaContextType = useMemo(
    () => ({
      createdForms,
      currentSelectedForm,
      isEdit,
      setCreatedForms,
      setCurrentSelectedForm,
      setIsEdit,
    }),
    [createdForms, currentSelectedForm, isEdit]
  );

  return (
    <CreateFormulaContext.Provider value={contextValue}>
      <Container>
        <Grid container spacing={6} sx={{ pt: 3, pb: 3 }}>
          <Grid item xs={5.5}>
            <CreateNewForm />
          </Grid>
          <Grid
            item
            xs={1}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Divider
              orientation="vertical"
              sx={{ borderRightWidth: 5, bgcolor: theme.palette.primary.main }}
            />
          </Grid>

          <Grid
            item
            xs={5.5}
            container={isEmpty(createdForms)}
            justifyContent={isEmpty(createdForms) ? "center" : "flex-start"}
            alignItems={isEmpty(createdForms) ? "center" : "flex-start"}
          >
            <CustomForms />
          </Grid>
        </Grid>
      </Container>
    </CreateFormulaContext.Provider>
  );
};

export default CreateFormula;

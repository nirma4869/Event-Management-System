import { Stack, Toolbar } from "@mui/material";
import Tools from "./Tools";
import Workflow from "./Workflow";
import { CustomToolbarProps } from "./types";

// ----------------------------------------------------------------------

const CustomToolbar = ({
  name,
  tools,
  workflow,
  toolbarProps,
}: CustomToolbarProps) => {
  return (
    <Toolbar sx={{ my: { xs: 2, sm: 1 } }} {...toolbarProps}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
        spacing={{ xs: 2, sm: 2 }}
        sx={{ width: 1 }}
      >
        {tools && <Tools name={name} items={tools} />}
        {workflow && <Workflow name={name} items={workflow} />}
      </Stack>
    </Toolbar>
  );
};

export default CustomToolbar;

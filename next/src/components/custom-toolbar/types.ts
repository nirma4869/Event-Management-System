import { LoadingButtonProps } from "@mui/lab";
import {
  BoxProps,
  ButtonProps,
  IconButtonProps,
  MenuItemProps,
  ToolbarProps,
} from "@mui/material";
import { ComponentType } from "react";

// ----------------------------------------------------------------------

export type CustomButtonProps = Omit<
  ButtonProps & LoadingButtonProps & IconButtonProps & MenuItemProps,
  "name"
> & { name: string };

export type CustomToolbarButtonItem = {
  props?: CustomButtonProps;
  link?: string;
  Component?: ComponentType<BoxProps>;
};

export type CustomToolbarToolProps = {
  name: string;
  items: CustomToolbarButtonItem[];
};

export type CustomToolbarWorkflowProps = {
  name: string;
  items: CustomToolbarButtonItem[];
};

export type CustomToolbarProps = {
  name: string;
  tools?: CustomToolbarButtonItem[];
  workflow?: CustomToolbarButtonItem[];
  toolbarProps?: ToolbarProps;
};

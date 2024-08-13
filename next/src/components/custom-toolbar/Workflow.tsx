import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { CustomToolbarWorkflowProps } from "./types";

// ----------------------------------------------------------------------

const Workflow = ({ name, items }: CustomToolbarWorkflowProps) => {
  const isIconButton = (
    button: ButtonProps | LoadingButtonProps | IconButtonProps
  ): button is IconButtonProps =>
    (button as IconButtonProps).edge !== undefined;

  const isLoadingButton = (
    button: ButtonProps | LoadingButtonProps | IconButtonProps
  ): button is LoadingButtonProps =>
    (button as LoadingButtonProps).loading !== undefined;

  return (
    <Stack direction="row" spacing={0.5}>
      <>
        {items.map((item, index) => {
          const styling = {
            ...(items.length > 1 && {
              ...((index === 0 && {
                borderTopRightRadius: "2px",
                borderBottomRightRadius: "2px",
              }) ||
                (index === items.length - 1 && {
                  borderTopLeftRadius: "2px",
                  borderBottomLeftRadius: "2px",
                }) || { borderRadius: "2px" }),
            }),
            ...item.props?.sx,
          };

          if (item.Component) {
            return (
              <item.Component
                key={
                  item.Component.defaultProps?.key ??
                  item.Component.defaultProps?.children?.toString() ??
                  `${name}-workflow-item-${index}`
                }
                sx={styling}
              />
            );
          }

          if (item.props) {
            return (
              (isIconButton(item.props) &&
                (item.link ? (
                  <Link href={item.link} key={item.props.name}>
                    <IconButton {...item.props} sx={styling} />
                  </Link>
                ) : (
                  <IconButton
                    key={item.props.name}
                    {...item.props}
                    sx={styling}
                  />
                ))) ||
              (isLoadingButton(item.props) &&
                (item.link ? (
                  <Link href={item.link} key={item.props.name}>
                    <LoadingButton {...item.props} sx={styling} />
                  </Link>
                ) : (
                  <LoadingButton
                    key={item.props.name}
                    {...item.props}
                    sx={styling}
                  />
                ))) ||
              (item.link ? (
                <Link href={item.link} key={item.props.name}>
                  <Button {...(item.props as ButtonProps)} sx={styling} />
                </Link>
              ) : (
                <Button
                  key={item.props.name}
                  {...(item.props as ButtonProps)}
                  sx={styling}
                />
              ))
            );
          }
        })}
      </>
    </Stack>
  );
};

export default Workflow;

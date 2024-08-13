import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { CustomToolbarToolProps } from "./types";

// ----------------------------------------------------------------------

const Tools = ({ name, items }: CustomToolbarToolProps) => {
  const isIconButton = (
    button: ButtonProps | LoadingButtonProps | IconButtonProps
  ): button is IconButtonProps =>
    (button as IconButtonProps).edge !== undefined;

  const isLoadingButton = (
    button: ButtonProps | LoadingButtonProps | IconButtonProps
  ): button is LoadingButtonProps =>
    (button as LoadingButtonProps).loading !== undefined;

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ ...(items.length > 0 && { mr: 3 }) }}
    >
      <>
        {items.map((item, index) => {
          if (item.Component) {
            return (
              <item.Component
                key={
                  item.Component.defaultProps?.key ??
                  item.Component.defaultProps?.children?.toString() ??
                  `${name}-tools-item-${index}`
                }
              />
            );
          }

          if (item.props) {
            return (
              (isIconButton(item.props) &&
                (item.link ? (
                  <Link href={item.link} key={item.props.name}>
                    <IconButton {...item.props} />
                  </Link>
                ) : (
                  <IconButton key={item.props.name} {...item.props} />
                ))) ||
              (isLoadingButton(item.props) &&
                (item.link ? (
                  <Link href={item.link} key={item.props.name}>
                    <LoadingButton {...item.props} />
                  </Link>
                ) : (
                  <LoadingButton key={item.props.name} {...item.props} />
                ))) ||
              (item.link ? (
                <Link href={item.link} key={item.props.name}>
                  <Button {...(item.props as ButtonProps)} />
                </Link>
              ) : (
                <Button
                  key={item.props.name}
                  {...(item.props as ButtonProps)}
                />
              ))
            );
          }
        })}
      </>
    </Stack>
  );
};

export default Tools;

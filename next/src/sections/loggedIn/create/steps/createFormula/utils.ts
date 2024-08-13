import { Transform } from "@dnd-kit/utilities";

// ----------------------------------------------------------------------

export const getDraggableSx = (
  transform: Transform | null,
  transition: string | undefined,
  isDragging: boolean
) => {
  return {
    transform: `translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))`,
    transition: [transition].filter(Boolean).join(", "),
    "--translate-x": transform ? `${Math.round(transform.x)}px` : undefined,
    "--translate-y": transform ? `${Math.round(transform.y)}px` : undefined,
    backgroundColor: "background.paper",
    opacity: isDragging ? 0.5 : 1,
  };
};

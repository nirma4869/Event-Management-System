import isEmpty from "lodash/isEmpty";
import { useEffect, useRef, useState } from "react";
import Moveable, { OnDragEnd, OnResizeEnd, OnRotateEnd } from "react-moveable";
import Selecto from "react-selecto";
import { useEventCreateContentContext } from "../..";
import { CustomEventTableProps } from "./types";

// ----------------------------------------------------------------------

export const RoomArea = ({
  currentSelectedTableId,
  setCurrentSelectedTableId,
}: CustomEventTableProps) => {
  const { methods } = useEventCreateContentContext();
  const moveableRef = useRef<Moveable>(null);
  const testRef = useRef<number[]>([]);

  const [selectedTables, setSelectedTables] = useState<
    (HTMLElement | SVGElement)[]
  >([]);

  const { setValue, watch } = methods;

  const tables = watch("tables");

  const customOnResizeEnd = (e: OnResizeEnd) => {
    if (!isEmpty(tables) && currentSelectedTableId) {
      const currentSelectedTableIndex = tables.findIndex(
        (table) => table.id === parseInt(currentSelectedTableId)
      );
      if (currentSelectedTableIndex !== -1) {
        setValue(
          `tables.${currentSelectedTableIndex}.origin.${2}`,
          parseInt(e.target.style.width)
        );
        setValue(
          `tables.${currentSelectedTableIndex}.origin.${3}`,
          parseInt(e.target.style.height)
        );
      }
    }
  };

  const customOnDragEnd = (e: OnDragEnd) => {
    if (currentSelectedTableId && !isEmpty(tables)) {
      const currentSelectedTableIndex = tables.findIndex(
        (table) => table.id === parseInt(currentSelectedTableId)
      );
      if (currentSelectedTableIndex !== -1) {
        setValue(
          `tables.${currentSelectedTableIndex}.origin.${0}`,
          testRef.current[0]
        );

        setValue(
          `tables.${currentSelectedTableIndex}.origin.${1}`,
          testRef.current[1]
        );
      }
    }
  };

  const customOnRotateEnd = (e: OnRotateEnd) => {
    if (!isEmpty(tables) && currentSelectedTableId) {
      const currentSelectedTableIndex = tables.findIndex(
        (table) => table.id === parseInt(currentSelectedTableId)
      );
      if (currentSelectedTableIndex !== -1) {
        setValue(
          `tables.${currentSelectedTableIndex}.rotation`,
          e.moveable.getRect().rotation
        );
      }
    }
  };

  useEffect(() => {
    if (isEmpty(selectedTables)) {
      setCurrentSelectedTableId(undefined);
    } else {
      const currentSelectedTableId = selectedTables[0].getAttribute("id");
      if (currentSelectedTableId) {
        setCurrentSelectedTableId(currentSelectedTableId);
      }
    }
  }, [selectedTables, setCurrentSelectedTableId]);

  return (
    <div
      className="elements"
      style={{
        position: "relative",
        width: "100%",
        height: "1000px",
        border: "3px solid #ccc",
      }}
    >
      <Moveable
        ref={moveableRef}
        target={selectedTables[0]}
        draggable={true}
        resizable={true}
        rotatable={true}
        snappable={true}
        snapRotationDegrees={[0, 90, 180, 270]}
        isDisplaySnapDigit={true}
        isDisplayInnerSnapDigit={false}
        snapGap={true}
        snapDirections={{
          top: true,
          left: true,
          bottom: true,
          right: true,
          center: true,
          middle: true,
        }}
        elementSnapDirections={{
          top: true,
          left: true,
          bottom: true,
          right: true,
          center: true,
          middle: true,
        }}
        elementGuidelines={[".target"]}
        onDrag={(e) => {
          testRef.current[0] = e.translate[0];
          testRef.current[1] = e.translate[1];
          e.target.style.transform = e.transform;
        }}
        onRender={(e) => {
          e.target.style.cssText += e.cssText;
        }}
        onDragEnd={customOnDragEnd}
        onResize={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
        onResizeEnd={customOnResizeEnd}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
        onRotateEnd={customOnRotateEnd}
      />

      <Selecto
        dragContainer={".elements"}
        selectByClick={true}
        hitRate={0}
        selectableTargets={[".target"]}
        selectFromInside={true}
        ratio={0}
        onDragStart={(e) => {
          const moveable = moveableRef.current!;
          const target = e.inputEvent.target;
          if (
            moveable.isMoveableElement(target) ||
            selectedTables.some((t) => t === target || t.contains(target))
          ) {
            e.stop();
          }
        }}
        onSelectEnd={(e) => {
          const moveable = moveableRef.current!;

          if (e.isDragStart) {
            e.inputEvent.preventDefault();

            moveable.waitToChangeTarget().then(() => {
              moveable.dragStart(e.inputEvent);
            });
          }
          setSelectedTables(e.selected);
        }}
      />

      {tables.map((table) => {
        const { id, origin, publicId, rotation } = table;
        return (
          <div
            key={id}
            id={id.toString()}
            className="target"
            style={{
              transform: `translate(${
                (origin[0], origin[1])
              }) rotate(${rotation}deg)`,
              width: `${origin[2]}px`,
              height: `${origin[3]}px`,
              backgroundColor: "#e6e8e6",
              alignContent: "flex-start",
              textAlign: "center",
              justifyContent: "center",
              fontWeight: "bold",
              border: "2px solid #333",
              position: "absolute",
            }}
          >
            {publicId}
          </div>
        );
      })}
    </div>
  );
};

export default RoomArea;

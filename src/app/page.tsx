"use client"

import { Button, HStack } from "@chakra-ui/react";
import { normalizeProps, useMachine } from "@zag-js/react";
import * as tooltip from "@zag-js/tooltip"
import { Tooltip } from "./Tooltip";

export function CustomTooltip() {
  const service = useMachine(tooltip.machine, {
    id: "1", closeOnClick: false, closeOnPointerDown: false
  })

  const api = tooltip.connect(service, normalizeProps)
  // console.log("props", { ...api.getTriggerProps() })

  return (
    <>
      <button {...api.getTriggerProps()}
      >Hover me</button>
      {api.open && (
        <div {...api.getPositionerProps()}>
          <div {...api.getContentProps()}>Tooltip</div>
        </div>
      )}
    </>
  )
}

export default function Home() {

  return (
    <HStack>
      <Button bg="black.100">black.100</Button>
      <Button bg="red.100">red.100</Button>
      <Tooltip content="Tooltip on red.100" closeOnClick={false}>
        <div>{"red.100"}</div>
      </Tooltip>
      <CustomTooltip />
    </HStack>
  );
}

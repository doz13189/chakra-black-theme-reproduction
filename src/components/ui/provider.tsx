"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        black: {
          100: { value: "#EE0F0F" }
        },
        red: {
          100: { value: "#EE0F0F" }
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  console.log("colors.black.100", system.token("colors.black.100"))
  // output: undefined

  console.log("colors.red.100", system.token("colors.red.100"))
  // output: #EE0F0F

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

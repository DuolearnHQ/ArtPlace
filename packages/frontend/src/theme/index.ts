import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

import { Typography } from './typography'
import { ColorPallete } from './colors'
import "@fontsource/commissioner"; 
import "@fontsource/inter";
const OverrideTheme = {
  ...chakraTheme,
  ...Typography,
  ...ColorPallete,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
      body: {
        bg: '#0D1018',
        color: 'white',
        fonts: {
          body: `'Commissioner','Inter'`,
        },
      },
    },
  },
}

const ArtPlaceTheme = extendTheme(OverrideTheme)
export default ArtPlaceTheme

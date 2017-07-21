import { lighten, modularScale } from 'polished'
export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    greylight: '#F0F1F1',
    greybase: '#31383F',
    greyblue: '#182752',
    orangelight: '#FAAC18',
    orangebase: '#F26522',
    orangedark: '#F26522',
    graphitebase: '#3B3B3B',
    graphitebase2: '#5E5E5E',
    graphitemid: '#8C8C8C',
  },

  fonts: {
    headings: '"filson-soft", sans-serif',
    body: '"Fira Sans, sans-serif',
    code: '"Fira Mono", monospace',
  },

  units: {
    base: '10',
    basetwo: '10',
    gutter: '20px',
    globalWidth: '1440px',
    headerheight: '88px',
  },

  borders: {
    border: '1px solid darken(3%, whitesmoke )',
  },

  animations: {
    timing: '0.38s',
    easing: 'cubic-bezier(.24, .8, 0, .97)',
    transition: '$timing all $easing',

    dropShadowTransparent: '0px 0px 0px rgba($color-grey-base, 0)',
    dropShadow: '0px 2px 8px rgba($color-grey-base, 0.4)',
    dropShadowxl: '0px 10px 20px rgba($color-grey-base, 0.4)',
    dropShadowxlLight: '0px 10px 20px rgba($color-grey-base, 0.08)',
    dropShadowl: '0px 6px 14px rgba($color-grey-base, 0.4)',
    dropShadowlLight: '0px 6px 14px rgba($color-grey-base, 0.08)',
    dropShadowPressed: '0px 2px 2px rgba($color-grey-base, 0.15)',
    dropShadowShallow: '0px 2px 4px rgba($color-grey-base, 0.08)',
    textShadowDefault: '0px 1px 2px rgba($color-grey-base, 0.5)',
  },
  mobileSizes: {
    handheld: '540px',
    tablet: '768px',
    desktop: '1060px',
    midSized: '1200px',
    largeDisplay: '1440px',
  },
}

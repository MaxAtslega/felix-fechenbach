const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`
const customMediaQueryMin = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`

// for passing of custom value
const customValue = (val: number) => `${val}rem`

interface IMediaQueriesBreakpoints {
  custom: (maxNumber: number) => string
  xs: string
  sm: string
  smMin: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const media: IMediaQueriesBreakpoints = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  smMin: customMediaQueryMin(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200),
}

const colors = {
  neutral: '#000000',
  white: '#ffffff',

  background: {
    default: '#000000',
  },
}

const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '22px',
  custom: customValue,
}

const spacing = {
  xs: '10px',
  sm: '14px',
  md: '22px',
  custom: customValue,
}

export const theme = {
  colors,
  fontSizes,
  media,
  spacing,
}

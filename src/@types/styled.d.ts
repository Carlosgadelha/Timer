import 'styled-components'
import {defaultTheme as defaultTheme} from '../styles/theme/default'

type ThemeType = typeof defaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}
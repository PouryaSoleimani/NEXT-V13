import { createContext } from "react"

const Theme = {
  primary: '#fabb14',
  secondary: "#4132f2",
  textPrimary: '#141414',
  textSecondary: '#404040',
}

export const ThemeContext = createContext(Theme)
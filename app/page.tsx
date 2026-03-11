import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import PortfolioPage from "./page-client"

export default function Page() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioPage />
      </LanguageProvider>
    </ThemeProvider>
  )
}

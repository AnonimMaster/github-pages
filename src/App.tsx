import {Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import { useState, useEffect } from 'react'
import { navigatorDetector } from 'typesafe-i18n/detectors'
import TypesafeI18n from './i18n/i18n-react'
import { detectLocale } from './i18n/i18n-util'
import { loadLocale } from './i18n/i18n-util.sync'

function App() {
    const locale = detectLocale(navigatorDetector)

    const [localesLoaded, setLocalesLoaded] = useState(false)
    useEffect(() => {
        loadLocale(locale)
        setLocalesLoaded(true)
    }, [locale])

    if(!localesLoaded) {
        return null
    }

  return (
    <>
        <TypesafeI18n locale={locale}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={< HomePage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </TypesafeI18n>
    </>
  )
}

export default App

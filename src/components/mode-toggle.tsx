import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import {Toggle} from "@/components/ui/toggle.tsx";

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <Toggle onPressedChange={pressed => pressed ? setTheme("light") : setTheme("dark")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Toggle>
    )
}
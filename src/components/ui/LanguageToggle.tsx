import React, {useState} from 'react';
import {useI18nContext} from "@/i18n/i18n-react.tsx";
import {loadLocaleAsync} from "@/i18n/i18n-util.async.ts";
import {locales} from "@/i18n/i18n-util.ts";

const LanguageToggle: React.FC = () => {

    const { LL, setLocale } = useI18nContext()
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);

    const toggleLanguage = async () => {
        const nextIndex = (currentLanguageIndex + 1) % locales.length;
        setCurrentLanguageIndex(nextIndex);
        const locale = locales[currentLanguageIndex]
        localStorage.setItem('lang', locale)
        await loadLocaleAsync(locale)
        setLocale(locale)
    };

    return (
        <button onClick={toggleLanguage}>{LL.Language()}</button>
    );
};

export default LanguageToggle;
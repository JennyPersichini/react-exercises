import { LanguageContext } from './LanguageContext';
import { useContext } from 'react';

export function DisplayLanguage() {
    const language = useContext(LanguageContext)

    return (
        <div>
            <h1>Current language: {language}</h1>
        </div>
    )
}
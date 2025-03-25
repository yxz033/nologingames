'use client'

import { createContext, useContext, ReactNode } from 'react'
import { en } from '@/locales/en'

type LanguageContextType = {
  t: (key: string) => string
}

type TranslationType = {
  [key: string]: TranslationType | string
}

const translations: TranslationType = en

const LanguageContext = createContext<LanguageContextType>({
  t: () => ''
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: TranslationType | string = translations
    
    for (const k of keys) {
      if (typeof value === 'string') return key
      value = value[k]
      if (!value) return key
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext) 
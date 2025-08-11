1 - INSTALL
2 - tsconfig.json ==> strict : true
3 - WRITING LOCALES ==> en.ts || fa.ts
4 - app / [locale] / layout.tsx ==> AS THE DOCUMENT
5 - locales ==> client.ts || server.ts
6 - middleware.ts
7 - import { useI18n, useScopedI18n } from '@/locales/client.ts'
8 - const t = useI18n() ; const scopedT = useScopedI18n('hello')
9 - <p>{t('hello')}</p>

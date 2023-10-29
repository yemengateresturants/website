import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'ar', 'fr'] as const;
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/menu/[branch]': '/menu/[branch]',
    '/about-us': '/about-us',
    '/branches/[branch]': '/branches/[branch]',
    '/contact-us': '/contact-us',   
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, pathnames});
'use client';
import {usePathname} from 'next-intl/client';
import { FC, useState } from "react";
import Image from "next/image";
import Link from 'next-intl/link'
import { LangParamProps } from "@/interfaces/commonProps.interface";
import {useTranslations} from 'next-intl';

const Nav: FC<LangParamProps> = ({ params: {locale} }) => {

    const t = useTranslations('navigation');

    const langsArray = ["en", "ar", "fr"];

    const currentPathname = usePathname();

    const [menuToggle, setMenuToggle] = useState(false);

    const generateFlagIcon = (locale: string): string => {
        if(locale === 'fr') {
            return '/images/france_flag.png';
        } else if (locale === 'ar') {
            return '/images/yemen_flag.jpg';
        } else {
            return '/images/canada_flag.png';
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link className="" href='/' locale={locale} onClick={() => setMenuToggle(false)}>
                    <Image src="/images/brown-logo.png" alt="Yemeni Gate" width="75" height="60" />
                </Link>

                <input checked={menuToggle} type="checkbox" id="navigation" onClick={() => setMenuToggle(!menuToggle)} />
                <label htmlFor="navigation" className="hamburger hamburger--htx" >
                    <span className="show-mobile">menu</span>
                </label>

                <ul className="nav-menu-container desktop-hide menu">
                    <Link className="nav-link" href={`/`} locale={locale} onClick={() => setMenuToggle(false)}>
                        {t('home')}
                    </Link>
                    <div className="nav-link dropdown-wrapper">
                        <div className="vert-center">
                            {t('menu')}
                            <Image className="arrow" src='/images/down.png' width="15" height="15" alt="arrow icon" />
                        </div>
                        <ul className="dropdown">
                            <li key="Bank St"><Link href={`/menu/bank-st`} locale={locale} onClick={() => setMenuToggle(false)}>Bank St.</Link></li>
                            <li key="St_Joseph_Blvd"><Link href={`/menu/st-joseph-blvd`} locale={locale} onClick={() => setMenuToggle(false)}>St Joseph Blvd (Orleans)</Link></li>
                        </ul>
                    </div>
                    <Link className="nav-link" href={`/contact-us`} locale={locale} onClick={() => setMenuToggle(false)}>
                        {t('contact')}
                    </Link>
                    {/* <Link className="nav-link" href={`/about-us`} locale={locale} onClick={() => setMenuToggle(false)}>
                        {t('about')}
                    </Link> */}
                    <div className="nav-link dropdown-wrapper">
                            <div className="vert-center">
                                <Image className="lang_flag" src={generateFlagIcon(locale)} width="25" height="25" alt="language flag" />
                                {locale?.toUpperCase()}
                                <Image className="arrow" src='/images/down.png' width="15" height="15" alt="arrow icon" />
                            </div>
                        <ul className="dropdown">
                        {
                            langsArray.map((anotherLang) => {
                                if(anotherLang !== locale) {
                                    return (
                                        <li key={anotherLang}>
                                            <Link className="flex" href={`${currentPathname}`} locale={anotherLang} onClick={() => setMenuToggle(false)}>
                                                <Image className="lang_flag" src={generateFlagIcon(anotherLang)} width="25" height="25" alt="language flag" />
                                                {anotherLang.toUpperCase()}
                                            </Link>
                                        </li>
                                    )
                                }})
                        }
                        </ul>
                    </div>

                </ul>
            </div>

        </nav>
    )
}

export default Nav;
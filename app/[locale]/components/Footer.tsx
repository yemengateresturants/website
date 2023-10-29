import { FC } from "react";
import Image from "next/image";
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { SiTiktok } from 'react-icons/si';
import { useTranslations } from "next-intl";

const Footer: FC = () => {

    const t = useTranslations('footer');

    return (
        <div className="footer-container">

            <Image 
                src="/images/black-logo.png" 
                alt="Yemeni Gate logo" 
                width="50"
                height="45"
                className="footer-logo"
            />

            <div className="footer-wrapper">
                <div>
                    <div className="contact-wrapper">
                        <p className="text-left">{t('contact')}:</p>
                        <a href="mailto:Info@yemengate.ca" className="link">
                            info@yemengate.ca
                        </a>
                    </div>

                    <p className="text-left">{t('rightsReserved')}</p>
                </div>

                <div className="social-media-container">
                    <p className="text-left">{t('follow')}:</p>
                    <div>
                        <a 
                        href="https://m.facebook.com/Yemengateottawa" 
                        target="_blank"
                        className="social-media-icon facebook">
                            <ImFacebook2 />
                        </a>
                        <a 
                        href="https://www.instagram.com/yemengate/" 
                        target="_blank"
                        className="social-media-icon instagram">
                            <GrInstagram />
                        </a>
                        <a 
                        href="https://www.tiktok.com/@yemen_gate1" 
                        target="_blank"
                        className="social-media-icon tiktok">
                            <SiTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
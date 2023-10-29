import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {

    const t = useTranslations('page');

    return (
      <div className="page-not-found-container">
        <Image 
        src="/images/404.svg" 
        className="page-not-found-image"
        width="350" 
        height="300" 
        alt="image shows the 404 error" />
        <Link href="/" className="brown-btn">
          {t('notFound.backButton')}
        </Link>
      </div>
    )
  }

  export default PageNotFound;
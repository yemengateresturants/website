import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {

    return (
      <div className="page-not-found-container">
        <Image
        src="/images/404.svg"
        className="page-not-found-image"
        width="350"
        height="300"
        alt="image shows the 404 error" />
        <Link href="/" className="brown-btn">
          Back Home
        </Link>
      </div>
    )
  }

  export default PageNotFound;
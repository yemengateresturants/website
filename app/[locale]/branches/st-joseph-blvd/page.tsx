import { useTranslations } from "next-intl";
import Link from "next/link";

const StJosephBlvdBranch = () => {
  const t = useTranslations('page.branch');

  return (
    <div className="card_box_container center-text">
      <div className="blank_block"></div>
      <div className="branch_bg_container bank_st_bg">
        <h1>St. Jspeph Blvd</h1>
      </div>

       <div className="branch_details_container">
        <h2>{t('title')}</h2>
        <div className="order_btns_wrapper">
          <div>
            <div className="mb-3">
              <h2>{t('location')}</h2>
              <Link href="https://maps.app.goo.gl/NMfxcYDqY9wFLwin8">2871 St Joseph Blvd, Orléans, ON K1C 1G8, Canada</Link>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.771783481342!2d-75.5190325!3d45.474401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce11e1a12c3473%3A0xf6b2f88517e08448!2zWWVtZW4gR2F0ZSDYqNin2Kgg2KfZhNmK2YXZhg!5e0!3m2!1sen!2seg!4v1698608274748!5m2!1sen!2seg" width="600" height="450" style={{border:0, width: '100%'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <h2>{t('phone')}</h2>
              <Link href="tel:+16137001177">+1 613 700 1177</Link>
            </div>
            <div>
              <h2>{t('workHours')}</h2>
              <div>
                <h3>{t('mon')} : <span>1 PM - 9 PM</span></h3>
                <h3>{t('tues')} : <span>1 PM - 9 PM</span></h3>
                <h3>{t('wed')} : <span>1 PM - 9 PM</span></h3>
                <h3>{t('thu')} : <span>1 PM - 9 PM</span></h3>
                <h3>{t('fri')} : <span>1 PM - 10 PM</span></h3>
                <h3>{t('sat')} : <span>1 PM - 10 PM</span></h3>
                <h3>{t('sun')} : <span>1 PM - 9 PM</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StJosephBlvdBranch;
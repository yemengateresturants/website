import { CardBox } from "../../components/Card";
import { Meal, MealKey, MealWithPrice } from "@/interfaces/meal.interface";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const StJospehMenu = ({ params }: { params: { locale: string } }) => {
  const canonicalUrl: string = `/${params.locale}/branch/st-joseph-blvd`;

  const t = useTranslations();
  const translateObj = require(`../../../../messages/${params.locale}.json`); // Import menu data
  const menuData = require('./menu.json'); // Import menu data
  const menuObj = translateObj.menu;

  const categories = Object.keys(menuData);

  const generateMeals = (category: string): Meal[] => {
    const categoryData = menuData[category];
    const branchMenu: MealWithPrice[] = [];

    // Filter and create a new object with matching keys
    Object.fromEntries(
      Object.entries(menuObj).filter(([key, _]: any) => {
        categoryData.forEach((mealKey: MealKey) => {
          const meal: Meal = _[0][mealKey.key];
          if (!meal) return;
          if (mealKey.key === meal.mealKey) {
            branchMenu.push({ ...meal, price: mealKey.price })
          }
        })
      }));

    return branchMenu;
  };

  return (
    <div className="card_box_container">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="blank_block"></div>
      <div className="branch_bg_container st_joseph_bg">
        <h1>St. Joseph Blvd <br /> (Orleans) {t('page.menu.menuTitle')}</h1>
      </div>
      {categories.map((category: string) => (
        <div className="category_container" key={category}>
          <h2 className="category_title">{t(`category.${category}`)}</h2>
          {generateMeals(category).map((meal: Meal) => {
            return <CardBox key={meal.mealKey} meal={meal} />
          })
          }
        </div>
      ))}
      <div className="order_btns_container">
        <h2>{t('page.menu.orderHeader')}</h2>
        <div className="order_btns_wrapper">
          <Link href="https://www.ubereats.com/ca/store/%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D9%85%D9%86-yemen-gate-orleans/EhgbbBiDW96XNXaZ8N1xOw">
            <Image className="order-btn" src="/images/uber_eats.jpg" width='150' height='75' alt="Uber Eats Button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StJospehMenu;
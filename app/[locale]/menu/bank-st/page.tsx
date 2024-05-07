import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { CardBox } from '../../components/Card';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import { Meal, MealKey, MealWithPrice } from '@/interfaces/meal.interface';
import Link from 'next/link';
import Image from 'next/image';

const BankStMenu: FC<LangParamProps> = ({ params }: { params: { locale: string } }) => {
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
      <div className="blank_block"></div>
      <div className="branch_bg_container bank_st_bg">
        <h1>Bank St. <br /> {t('page.menu.menuTitle')}</h1>
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
          <Link href="https://www.ubereats.com/ca/store/yemen-gate-bank-st/OmTvklAUU_urFj2CD2SOgQ">
            <Image className="order-btn" src="/images/uber_eats.jpg" width='150' height='75' alt="Uber Eats Button" />
          </Link>
          <Link href="https://www.skipthedishes.com/yemen-gate-bank">
            <Image className="order-btn" src="/images/skip.png" width='150' height='75' alt="Doordash Button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankStMenu;
'use client'
import { Meal, MealKey } from "@/interfaces/meal.interface";
import { useTranslations } from "next-intl";
import MealCard from "./MealCard";
import { useState } from "react";


const MealsCarousel = ({locale, menuData}: {locale: string, menuData: any}) => {
    const initialCategory = menuData.traditional_dishes ? 'traditional_dishes' : 'main_dishes';
    const [currentCategory, setCurrentCategory] = useState(initialCategory);


    const t = useTranslations();
    const translateObj = require(`../../../messages/${locale}.json`); // Import menu data
    const menuObj = translateObj.menu;
    const categories = Object.keys(menuData);

    const generateMeals = (category: string): Meal[] => {
        const categoryData = menuData[category];
        
        const branchMenu: Meal[] = [];
        console.log("menuObj: ", menuObj);

        if (!categoryData) {
            console.error("Category data not found for: ", category);
            return []; // Return empty array if category data is not found
        }
    
        // Filter and create a new object with matching keys
        Object.fromEntries(
          Object.entries(menuObj).filter(([key, _]: any) => {
            console.log("key: ", key);
            console.log("_: ", _);

            categoryData.forEach((mealKey: MealKey) => {
                console.log("menu: ", _)
              const meal: Meal = _[mealKey.key];
              if (!meal) return;
              if (mealKey.key === meal.mealKey) {
                branchMenu.push({ ...meal, price: mealKey.price, isVege: mealKey.isVege })
              }
            })
          }));
    
        return branchMenu;
      };

    return (
        <section className="ag-card-block">
            <div className="ag-format-container">
                <div className="ag-category-carousel_box">

                <ul id="js-category-carousel" className="js-category-carousel ag-category-carousel_list">
                    {
                        categories.map((category: string, i: number) => (
                            <li key={i} className="ag-category-carousel_item" onClick={() => setCurrentCategory(category)}>
                                <p className={`${category == currentCategory ? 'active-link': ''} ag-base_btn`}>
                                    {t(`category.${category}`)}
                                </p>
                            </li>
                        ))
                    }
                </ul>
                </div>

                <div className="ag-card_box">
                    <ul className="ag-card-grid_list">
                        {
                            generateMeals(currentCategory).map((meal: Meal) => {
                                console.log("meal: ", meal);
                                return <MealCard key={meal.mealKey} meal={meal} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MealsCarousel;
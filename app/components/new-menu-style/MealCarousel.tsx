'use client'
import { Meal, MealKey } from "@/interfaces/meal.interface";
import { useTranslations } from "next-intl";
import MealCard from "./MealCard";
import { useState } from "react";

const MealsCarousel = ({ locale, menuData }: { locale: string, menuData: any }) => {
    const initialCategory = menuData.soups ? 'soups' : 'signature_dishes';
    const [currentCategory, setCurrentCategory] = useState(initialCategory);

    const t = useTranslations();
    const translateObj = require(`../../../messages/${locale}.json`);
    const menuObj = translateObj.menu;
    const categories = Object.keys(menuData);

    const generateMeals = (category: string): Meal[] => {
        const categoryData = menuData[category];
        const branchMenu: Meal[] = [];

        if (!categoryData) return [];

        Object.fromEntries(
            Object.entries(menuObj).filter(([key, _]: any) => {
                categoryData.forEach((mealKey: MealKey) => {
                    const meal: Meal = _[mealKey.key];
                    if (!meal) return;
                    if (mealKey.key === meal.mealKey) {
                        branchMenu.push({ ...meal, price: mealKey.price, isVege: mealKey.isVege })
                    }
                })
            }));

        return branchMenu;
    };

    const meals = generateMeals(currentCategory);

    return (
        <div className="menu-section">
            {/* Category Navigation */}
            <div className="menu-categories-wrapper">
                <nav className="menu-categories">
                    {categories.map((category: string) => (
                        <button
                            key={category}
                            className={`menu-category-pill ${category === currentCategory ? 'active' : ''}`}
                            onClick={() => setCurrentCategory(category)}
                        >
                            {t(`category.${category}`)}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Meal Count */}
            <p className="menu-count">
                {meals.length} {meals.length === 1 ? 'item' : 'items'}
            </p>

            {/* Meals Grid */}
            <div className="menu-grid">
                {meals.map((meal: Meal) => (
                    <MealCard key={meal.mealKey} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default MealsCarousel;

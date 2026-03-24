import { CardParamProps, Meal, MealKey } from "@/interfaces/meal.interface";
import { useTranslations } from "next-intl";
import { FC } from "react";

const MealCard: FC<CardParamProps> = ({ meal }: { meal: Meal }) => {
    const t = useTranslations("price");

    const generatePrice = (price: any) => {
        if (typeof price === 'string') {
            return <span className="menu-price-single">${price}</span>;
        }
        return (
            <div className="menu-price-options">
                {price.map((p: MealKey) => (
                    <div key={p.key} className="menu-price-option">
                        <span className="menu-price-label">{t(p.key)}</span>
                        <span className="menu-price-value">${p.price}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="menu-card">
            <div className="menu-card-image">
                <img
                    src={`/images/${meal.mealKey}.png`}
                    alt={`${meal.title} - ${meal.description || ''}`}
                    loading="lazy"
                />
                {meal?.isVege && (
                    <span className="menu-card-badge-vege">
                        <img src="/images/vege.png" alt="Vegetarian" width="14" height="14" />
                        Vege
                    </span>
                )}
            </div>
            <div className="menu-card-body">
                <h3 className="menu-card-title">{meal?.title}</h3>
                {meal?.description && (
                    <p className="menu-card-desc">{meal.description}</p>
                )}
                <div className="menu-card-price">
                    {generatePrice(meal?.price)}
                </div>
            </div>
        </div>
    );
};

export default MealCard;

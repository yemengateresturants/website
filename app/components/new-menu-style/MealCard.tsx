import { CardParamProps, Meal, MealKey } from "@/interfaces/meal.interface";
import { useTranslations } from "next-intl";
import { FC } from "react";


const MealCard: FC<CardParamProps> = ({ meal } : { meal: Meal }) => {

    const t = useTranslations("price");

    const generatePrice = (price: any) => {
        if(typeof price == 'string') {
            return '$' + price;
        } else {
            return price.map((p: MealKey) => {
                return <div key={p.key}>{t(p.key)}: ${p.price}</div>
            })
        }
    }

    return (
        <li className="ag-card-grid_item">
          <figure>
                <img src={`/images/${meal.mealKey}.png`} width="362" height="235" className="ag-card_img" alt={`${meal.title} - ${meal.description}`}/>
            </figure>

            <div className="ag-card_info">
                <div className="ag-card_descr">
                    <div className="flex">
                        <h2 className="ag-card_title">
                            {meal?.title}
                        </h2>
                        {
                            meal?.isVege &&
                            <img className="vege_icon" src="/images/vege.png" alt="Vegeterian option" />
                        }
                    </div>
                <div className="ag-card_text">
                    {meal?.description}
                </div>
                </div>

                <div className="ag-card_date">
                    { generatePrice(meal?.price) }
                </div>
            </div>
        </li>
    )
}

export default MealCard;
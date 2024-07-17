import { CardParamProps, MealKey, MealWithPrice } from "@/interfaces/meal.interface"
import { useTranslations } from "next-intl";
import Image from "next/image"
import { FC } from "react";

export const CardBox: FC<CardParamProps> = ({ meal }: { meal: MealWithPrice }) => {

  const t = useTranslations("price");
  const generatePrice = (price: any) => {
    if (typeof price == 'string') {
      return '$' + price;
    } else {
      return price.map((p: MealKey) => {
        return <div className="mb-07" key={p.key}>{t(p.key)}: ${p.price}</div>
      })
    }
  }

  return (
    <div className="card_box">
      <Image className="card-img" src={`/images/${meal?.mealKey}.png`} width="1200" height="600" alt="A hand hold the creamy tumbler on the kitchen shelf" />
      <div>
        <h2>
          {meal?.title}
        </h2>
        <p>{meal?.description}</p>
        <br />
        {!!meal.price &&
          generatePrice(meal?.price)
        }
      </div>
    </div>
  )
}
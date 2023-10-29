import { CardParamProps, Meal } from "@/interfaces/meal.interface"
import Image from "next/image"
import { FC } from "react";

export const CardBox: FC<CardParamProps> = ({ meal } : { meal: Meal }) => {
  
    return (
        <div className="card_box">
          <Image className="card-img" src={`/images/${meal?.mealKey}.png`} width="1200" height="600" alt="A hand hold the creamy tumbler on the kitchen shelf" />
          <div>
            <h2>
                {meal?.title}
            </h2>
            <p>{meal?.description}</p>
            
          </div>
        </div>
    )
}
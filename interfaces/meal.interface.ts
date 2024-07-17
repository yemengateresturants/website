
export interface Meal {
    title: string,
    description?: string,
    mealKey?: string,
    price?: string
}

export interface MealWithPrice extends Meal {
    price?: string
}

export interface MealKey {
    id: string,
    key: string
    price: string
}

export interface CardParamProps {
    meal: Meal
}


export interface Meal {
    title: string,
    isVege: boolean,
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
    price: string,
    isVege: boolean
}

export interface CardParamProps {
    meal: Meal
}


export interface Meal {
    title: string,
    description?: string,
    mealKey?: string
}

export interface MealKey {
    id: string,
    key: string
}

export interface CardParamProps {
    meal: Meal
  }

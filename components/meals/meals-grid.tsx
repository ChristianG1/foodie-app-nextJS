import MealItem from "./meal-item"
import classes from "./meals-grid.module.css"

type Props = {
  meals: {
    id: string
    title: string
    slug: string
    image: string
    summary: string
    creator: string
  }[]
}

export default function MealsGrid({ meals }: Props) {
  return (
    <ul className={classes.meals}>
      {meals?.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}

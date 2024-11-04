type Props = {
  params: {
    mealSlug: string
  }
}

export default function MealDetailsPage({ params }: Props) {
  return (
    <main>
      <h2>Meal individual here</h2>
      <p>{params?.mealSlug}</p>
    </main>
  )
}

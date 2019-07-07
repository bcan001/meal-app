export function calculateTotalDayCalories(meals) {
	let totalCalorieCount = 0;
	meals.map(meal => (
    totalCalorieCount += calculateTotalMealCalories(meal)
  ));
	return totalCalorieCount
}

export function calculateAverageDayHealthRating(meals) {
	let totalHealthRating = 0.00;
  let totalMealsCount = 0;
  meals.map(meal => (
    totalHealthRating += meal.health_rating,
    totalMealsCount += 1
  ));
  return totalHealthRating / totalMealsCount
}

export function calculateTotalMealCalories(foods) {
	let totalCalorieCount = 0;
	foods.map(food => (
    totalCalorieCount += food.total_calories
  ))
  return totalCalorieCount
}




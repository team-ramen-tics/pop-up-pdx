const foods = {
  LATIN: 'Latin', 
  VEGETARIAN: 'Vegetarian', 
  ASIAN: 'Asian', 
  DESSERT: 'Dessert', 
  AMERICAN: 'American', 
  FRENCH: 'French',
  CARIBBEAN: 'Caribbean',
  SOUTHERN: 'Southern'
};

const getAllFoods = () => Object.values(foods);

module.exports = { foods, getAllFoods };

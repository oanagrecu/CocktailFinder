const collection = [
  {
    name: "Gin Smash",
    category: ["Ordinary Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/iprva61606768774.jpg",
    ingredients: [
      "gin",
      "carbonated water",
      "sugar",
      "mint",
      "orange",
      "cherry",
    ],
    instruction: [
      "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
    ],
    measures: [
      "6 cl of gin, 3 cl of carbonated water, 1 cube of sugar, 4 mint, 1 slice of orange, 1 cherry ",
    ],
  },
  {
    name: "Texas Sling",
    category: ["Shake", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg",
    ingredients: [
      "kahlua",
      "irish cream",
      "amaretto",
      "151 proof rum",
      "cream",
    ],
    instruction: [
      "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
    ],
    measures: [
      "1.50 cl of kahlua, 1.50 cl of irish cream, 1.50 cl of amaretto, 1.50 cl of bacardi, 3 cl of cream",
    ],
  },
  {
    name: "Moscow Mule",
    category: ["Punch / Party Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    ingredients: ["vodka", "lime juice", "ginger ale"],
    instruction: [
      "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
    ],
    measures: ["6 cl of vodka, 6 cl of lime juice, 24 cl of ginger ale"],
  },
  {
    name: "Apello",
    category: ["Coktail", "Non alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
    ingredients: [
      "orange juice",
      "grapefruit juice",
      "apple juice",
      "maraschino cherry",
    ],
    instruction: ["Stirr. Garnish with maraschino cherry."],
    measures: [
      "4 cl of orange juice, 3 cl of grapefruit juice, 1 cl of apple juice, 1 maraschino cherry",
    ],
  },
  {
    name: "Sangria TheBest",
    category: ["Punch / Party Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/vysywu1468924264.jpg",
    ingredients: [
      "red wine",
      "sugar",
      "lemon",
      "orange",
      "apple",
      "brandy",
      "soda water",
    ],
    instruction: [
      "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.",
    ],
    measures: [
      "1/2 L of wine, 1 cup of sugar, 1 large lemon, 1 large orange, 1 large apple, 9-12 cl of  brandy, plain water",
    ],
  },
  {
    name: "Moranguito",
    category: ["Shot", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
    ingredients: ["absinthe", "tequila", "grenadine"],
    instruction: [
      "First you put the absinthe, then put tequila, then put the granadine syrup.",
    ],
    measures: ["2/5 of absinthe, 2/5 of tequila, 1/5 of grenadine "],
  },
  {
    name: "Amaretto Sunset",
    category: ["Ordinary Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
    ingredients: ["triple sec", "amaretto", "cider", "ice"],
    instruction: [
      "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
    ],
    measures: [
      "1/2 jigger of triple sec, 3 shots of amaretto, 1/2 cup of cider, Add 1/2 cup of ice",
    ],
  },
  {
    name: "Irish Cream",
    category: ["Homemade Liqueur", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
    ingredients: [
      "scotch",
      "half-and-half",
      "condensed milk",
      "coconut syrup",
      "chocolate syrup",
    ],
    instruction: ["Mix scotch and milk. Add half-and-half. Add rest."],
    measures: [
      "1 cup of scotch, 1/4 cup half-and-half, 1 can sweetened of condensed milk, 3 drops of coconut syrup, 1 tblsp of chocolate syrup",
    ],
  },
  {
    name: "Planter's Punch",
    category: ["Cocktail", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/jn6o251643844541.jpg",
    ingredients: [
      "dark Rum",
      "orange Juice",
      "pineapple Juice",
      "grenadine",
      "sugar Syrup",
      "angostura Bitters",
    ],
    instruction: [
      "Squeeze an orange and strain the juice. Put all the ingredients in a shaker filled with ice and shake for at least 12 seconds. Strain into a highball glass and decorate with a pineapple wedge or fruit of your choice.",
    ],
    measures: [
      "4.5 cL of dark rum, 3 cl of orange juice, 3.5 cl of pineapple juice, 1 cl of grenadine,1 cl of sugar syrup, 4 drops of angostura bitters",
    ],
  },
  {
    name: "Space Odyssey",
    category: ["Ordinary Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
    ingredients: [
      "151 proof rum",
      "malibu rum",
      "pineapple juice",
      "orange juice",
      "grenadine",
      "cherries",
    ],
    instruction: [
      "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
    ],
    measures: [
      "1 shot of  bacardi, 1 shot  of malibu, 1 shot of pineapple juice",
    ],
  },
  {
    name: "Queen Charlotte",
    category: ["Ordinary Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/vqruyt1478963249.jpg",
    ingredients: ["red wine", "grenadine", "lemon-lime soda"],
    instruction: [
      "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
    ],
    measures: ["6 cl of red wine, 3 cl of grenadine"],
  },

  {
    name: "Ipamena",
    category: ["Ordinary Drink", "Non alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
    ingredients: [
      "lime",
      "brown sugar",
      "passion fruit juice",
      "ginger ale",
      "ice",
    ],
    instruction: [
      "Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
    ],
    measures: [
      "½ of lime, 2 tsp of brown sugar,4 cl of passion fruit juice, top up with ginger ale, fill with ice",
    ],
  },
  {
    name: "Bijou",
    category: ["Cocktail", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg",
    ingredients: [
      "orange Bitters",
      "green Chartreuse",
      "gin",
      "sweet Vermouth",
    ],
    instruction: ["Stir in mixing glass with ice and strain\r\n"],
    measures: [
      "1 dash of orange bitters, 3 cl of green chartreusse, 3 cl of gin, 3 cl of sweet vermouth",
    ],
  },
  {
    name: "Ace",
    category: ["Cocktail", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    ingredients: ["gin", "grenadine", "heavy cream", "milk", "egg White"],
    instruction: [
      "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
    ],
    measures: [
      "2 shots of gin, 1/2 shot of grenadine,  1/2 shot of heavy cream, 1/2 shot of milk, 1 Fresh egg white",
    ],
  },
  {
    name: "Adam",
    category: ["Ordinary Drink", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
    ingredients: ["dark rum", "lemon juice", "grenadine"],
    instruction: [
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    ],
    measures: ["6 cl of dark rum, 3 cl of lemon juice, 1 tsp of grenadine"],
  },
  {
    name: "747",
    category: ["Shot", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    ingredients: ["kahlua", "baileys irish cream", "frangelico"],
    instruction: [
      "Pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
    ],
    measures: [
      "1/3 part of kaluha, 1/3 part of baileys irish cream, 1/3 part of frangelico",
    ],
  },
  {
    name: "Zorro",
    category: ["Coffee/Tea", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
    ingredients: ["sambuca", "baileys irish cream", "white Creme de Menthe"],
    instruction: [
      "Add all and pour black coffee and add whipped cream on top.",
    ],
    measures: ["2 cl of sambuca,2 cl of baileys irish cream, 2 cl of coffee"],
  },
  {
    name: "Cosmopolitan",
    category: ["Cocktail", "Alcoholic"],
    picture:
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_700,h_700/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-09-Cosmopolitan-Cocktail%2FCosmopolitan_Cocktail",
    ingredients: [
      "vodka Citron",
      "cranberry juice",
      "cointreau",
      "fresh lime juice",
    ],
    instruction: [
      "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
    ],
    measures: [
      "4.5 cl of Vodka Citron, 3 cl of cranberry juice, 1.5 cl of cointreau, 1.5 cl of  Fresh lime juice",
    ],
  },
  {
    name: "Rainbow Paradise",
    category: ["Cocktail", "Alcoholic"],
    picture:
      "https://www.shutterstock.com/image-vector/realistic-rainbow-cocktail-isolated-on-600w-1373286239.jpg",
    ingredients: [
      "pineapple juice",
      "malibu coconut rum",
      "water",
      "grenadine",
      "blue curacao",
      "ice",
    ],
    instruction: [
      "Pour grenadine syrup,Fill the entire glass with ice. Mix pineapple juice with Malibu in another cup.Pour this mixture into the glass with the grenadine syrup. Mix water with blue curaçao and pour gently (with a spoon) over the yellow layer Serve with a lemon slice or orange twist",
    ],
    measures: [
      "160 ml of pineapple juice, 80 ml malibu coconut rum, 40 ml of water, 40 ml of grenadine, 20 ml of blue curacao, ice",
    ],
  },
  {
    name: "Derby",
    category: ["Cocktail", "Alcoholic"],
    picture:
      "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
    ingredients: ["gin", "peach bitters", "mint"],
    instruction: [
      "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
    ],
    measures: ["6 cl of gin, 2 dashes of peachbitters, 2 Fresh leaves of mint"],
  },
];

console.log(collection[0]);

const collectionContainer = document.getElementById("collection");

// Create a card for each drink in the collection
collection.forEach((drink) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const name = document.createElement("h2");
  name.textContent = drink.name;
  card.appendChild(name);

  const picture = document.createElement("img");
  picture.src = drink.picture;
  card.appendChild(picture);

  const category = document.createElement("p");
  category.classList = "categoryParagraph";
  const cat1 = document.createElement("span");
  cat1.textContent = `${drink.category[0]}`;
  cat1.classList.add("category");
  const cat2 = document.createElement("span");
  cat2.textContent = `${drink.category[1]}`;
  cat2.classList.add("category");
  // cat1.style.height = "30px";
  // cat2.style.height = "30px";
  // category.textContent = `${drink.category.join(", ")}`;
  cat1.style.backgroundColor = "#b7d011";
  cat2.style.backgroundColor = "#b7d011";
  category.appendChild(cat1);
  category.appendChild(cat2);
  card.appendChild(category);

  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.classList = "ingredientsContainer";
  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Ingredients:";
  const ingredients = document.createElement("p");
  ingredients.textContent = ` ${drink.ingredients.join(", ")}`;
  ingredientsContainer.appendChild(ingredientsTitle);
  ingredientsTitle.style.color = "#3c604a";
  ingredientsContainer.appendChild(ingredients);
  card.appendChild(ingredientsContainer);

  const measuresContainer = document.createElement("div");
  measuresContainer.classList = "measuresContainer";
  const measuresTitle = document.createElement("h3");
  measuresTitle.textContent = "Measures:";
  const measures = document.createElement("p");
  measures.textContent = `${drink.measures.join(", ")}`;
  measuresContainer.appendChild(measuresTitle);
  measuresTitle.style.color = "#3c604a";
  measuresContainer.appendChild(measures);
  card.appendChild(measuresContainer);

  const instructionContainer = document.createElement("div");
  instructionContainer.classList = "instructionsContainer";
  const instructionTitle = document.createElement("h3");
  instructionTitle.textContent = "Instructions:";
  const instructions = document.createElement("p");
  instructions.textContent = `${drink.instruction.join(" ")}`;

  instructionContainer.appendChild(instructionTitle);
  instructionTitle.style.color = "#3c604a";
  instructionContainer.appendChild(instructions);

  const instructionButton = document.createElement("button");
  instructionButton.textContent = "Show instructions";
  instructionButton.style.backgroundColor = "#b7d011";
  instructionButton.style.border = "#b7d011";
  instructionButton.classList.add("instructionsButton");
  instructionContainer.appendChild(instructionButton);

  instructionButton.addEventListener("click", () => {
    instructions.style.display = "block";
    instructionButton.style.display = "none";
  });

  instructions.style.display = "none";

  card.appendChild(instructionContainer);

  collectionContainer.appendChild(card);
});
// to find the searched item

const form = document.getElementById("submit");
form.addEventListener("submit", searchItem);
function findItem(searchInput) {
  for (const drink of collection) {
    if (drink.name.toLowerCase() === searchInput.toLowerCase()) {
      return drink;
    }
  }

  return null;
}
function searchItem(event) {
  event.preventDefault();

  const searchInput = document.getElementById("search").value;
  const foundItem = findItem(searchInput);

  if (foundItem) {
    displayCard(foundItem);
  } else {
    console.log("Item not found");
  }

  form.reset();
}
// display the item
function displayCard(item) {
  // Clear the existing cards (if any)
  collectionContainer.innerHTML = "";

  // Create the card elements for the found item
  const card = document.createElement("div");
  card.classList.add("card");

  const name = document.createElement("h2");
  name.textContent = item.name;
  card.appendChild(name);

  const picture = document.createElement("img");
  picture.src = item.picture;
  picture.style.height = "300px";
  card.appendChild(picture);

  const category = document.createElement("p");
  category.style.display = "block";
  category.classList = "categoryParagraph";
  const cat1 = document.createElement("span");
  cat1.classList.add("category");
  const cat2 = document.createElement("span");
  cat2.classList.add("category");
  cat1.textContent = `${item.category[0]}`;
  cat2.textContent = `${item.category[1]}`;
  cat1.style.backgroundColor = "#b7d011";
  cat2.style.backgroundColor = "#b7d011";
  cat1.style.width = "30%";
  cat2.style.width = "30%";
  cat1.style.fontSize = "20px";
  cat2.style.fontSize = "20px";
  cat1.style.padding = "10px";
  cat2.style.padding = "10px";
  cat1.style.marginRight = "10px";
  category.appendChild(cat1);
  category.appendChild(cat2);
  card.appendChild(category);

  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.classList = "ingredientsContainer";
  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Ingredients:";
  const ingredients = document.createElement("p");
  ingredients.textContent = ` ${item.ingredients.join(", ")}`;
  ingredientsContainer.appendChild(ingredientsTitle);
  ingredientsTitle.style.color = "#3c604a";
  ingredientsContainer.appendChild(ingredients);
  card.appendChild(ingredientsContainer);

  const measuresContainer = document.createElement("div");
  measuresContainer.classList = "measuresContainer";
  const measuresTitle = document.createElement("h3");
  measuresTitle.textContent = "Measures:";
  const measures = document.createElement("p");
  measures.textContent = `${item.measures.join(", ")}`;
  measuresContainer.appendChild(measuresTitle);
  measuresTitle.style.color = "#3c604a";
  measuresContainer.appendChild(measures);
  card.appendChild(measuresContainer);

  const instructionContainer = document.createElement("div");
  instructionContainer.classList = "instructionsContainer";
  const instructionTitle = document.createElement("h3");
  instructionTitle.textContent = "Instructions:";
  const instructions = document.createElement("p");
  instructions.textContent = `${item.instruction.join(" ")}`;
  instructionContainer.appendChild(instructionTitle);
  instructionTitle.style.color = "#3c604a";
  instructionContainer.appendChild(instructions);

  card.appendChild(instructionContainer);

  collectionContainer.appendChild(card);
}

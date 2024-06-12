// scripts.js

function findRecipes() {
    const ingredientsInput = document.getElementById('ingredients');
    const resultContainer = document.getElementById('result');
    const enteredIngredients = ingredientsInput.value.toLowerCase().split(',').map(item => item.trim());

    if (enteredIngredients.length === 0) {
        resultContainer.innerHTML = '<p>Please enter some ingredients.</p>';
        return;  // Correctly placed return statement
    }

    // Display loading message
    resultContainer.innerHTML = '<p>Loading...</p>';

    // Simulate a delay (you can remove this in a real-world scenario)
    setTimeout(() => {
        const matchingRecipes = filterRecipes(enteredIngredients);

        if (matchingRecipes.length === 0) {
            resultContainer.innerHTML = '<p>No recipes found with the entered ingredients.</p>';
            return;  // Correctly placed return statement
        }

        const resultHTML = matchingRecipes.map(recipe => {
            return `
                <div>
                    <h2>${recipe.name}</h2>
                    <p>${recipe.instructions}</p>
                </div>
            `;
        }).join('');

        resultContainer.innerHTML = resultHTML;
    }, 1000); // Simulated delay of 1 second (remove in a real-world scenario)
}

function filterRecipes(enteredIngredients) {
    return recipes.recipes.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(item => item.toLowerCase());
        return enteredIngredients.every(ingredient => recipeIngredients.includes(ingredient));
    });
}


const recipes = {
    "recipes": [
        {
            "ingredients": ["tomato", "cheese"],
            "name": "Tomato and Cheese Sandwich",
            "instructions": "1. Place sliced tomato and cheese between two slices of bread.\n2. Grill until cheese is melted and bread is toasted."
        },
        {
            "ingredients": ["chicken", "rice"],
            "name": "Chicken and Rice Bowl",
            "instructions": "1. Cook chicken until golden brown.\n2. Serve chicken over a bed of cooked rice."
        },
        {
            "ingredients": ["pasta", "tomato sauce", "cheese"],
            "name": "Pasta with Tomato Sauce and Cheese",
            "instructions": "1. Cook pasta according to package instructions.\n2. Heat tomato sauce in a pan and mix in cooked pasta.\n3. Serve topped with grated cheese."
        },
        {
            "ingredients": ["egg", "bacon", "bread"],
            "name": "Egg and Bacon Breakfast Sandwich",
            "instructions": "1. Fry bacon until crispy and cook eggs to your preference.\n2. Place bacon and eggs between two slices of bread.\n3. Enjoy your breakfast sandwich!"
        },
        {
            "ingredients": ["salmon", "lemon", "spinach"],
            "name": "Salmon and Spinach Salad",
            "instructions": "1. Grill or bake salmon until cooked through.\n2. Toss spinach leaves with lemon juice.\n3. Serve salmon over spinach and drizzle with olive oil."
        },
        {
            "ingredients": ["beef", "potato", "carrot", "onion"],
            "name": "Beef Stew",
            "instructions": "1. Brown beef in a pot with onions.\n2. Add carrots, potatoes, and enough water to cover.\n3. Simmer until beef and vegetables are tender."
        },
        {
            "ingredients": ["shrimp", "garlic", "butter", "parsley"],
            "name": "Garlic Butter Shrimp",
            "instructions": "1. Saute minced garlic in butter until fragrant.\n2. Add shrimp and cook until pink.\n3. Garnish with chopped parsley before serving."
        },
        {
            "ingredients": ["chickpeas", "tomato", "cucumber", "feta cheese"],
            "name": "Greek Chickpea Salad",
            "instructions": "1. Combine chickpeas, diced tomatoes, diced cucumber, and crumbled feta cheese in a bowl.\n2. Drizzle with olive oil and lemon juice.\n3. Toss to combine and serve chilled."
        },
        {
            "ingredients": ["tofu", "soy sauce", "sesame oil", "green onion"],
            "name": "Tofu Stir Fry",
            "instructions": "1. Press tofu to remove excess water, then cut into cubes.\n2. Stir fry tofu in sesame oil until golden.\n3. Add soy sauce and green onions, and cook until heated through."
        },
        {
            "ingredients": ["ground beef", "taco seasoning", "lettuce", "tomato", "cheddar cheese"],
            "name": "Beef Taco Salad",
            "instructions": "1. Brown ground beef with taco seasoning.\n2. Serve over a bed of lettuce with diced tomatoes and shredded cheddar cheese.\n3. Enjoy with your favorite taco toppings."
        },
        {
            "ingredients": ["quinoa", "black beans", "corn", "bell pepper", "avocado"],
            "name": "Quinoa and Black Bean Salad",
            "instructions": "1. Cook quinoa according to package instructions.\n2. Combine cooked quinoa with black beans, corn, diced bell pepper, and diced avocado.\n3. Toss with lime juice and cilantro before serving."
        },
        {
            "ingredients": ["chicken breast", "bbq sauce", "red onion", "cilantro"],
            "name": "BBQ Chicken Pizza",
            "instructions": "1. Preheat oven and roll out pizza dough.\n2. Spread BBQ sauce on the dough.\n3. Top with cooked chicken, sliced red onion, and chopped cilantro.\n4. Bake until crust is golden and toppings are heated through."
        },
        {
            "ingredients": ["pork chops", "apple", "onion", "thyme"],
            "name": "Pork Chops with Apples",
            "instructions": "1. Season pork chops with salt, pepper, and thyme.\n2. Sear pork chops until browned, then remove from pan.\n3. Saute sliced apples and onions until softened.\n4. Return pork chops to the pan and simmer until cooked through."
        },
        {
            "ingredients": ["spinach", "ricotta cheese", "lasagna noodles", "marinara sauce", "mozzarella cheese"],
            "name": "Spinach Lasagna",
            "instructions": "1. Cook lasagna noodles according to package instructions.\n2. Layer noodles with marinara sauce, ricotta cheese, spinach, and mozzarella cheese.\n3. Repeat layers and bake until bubbly and golden."
        },
        {
            "ingredients": ["tuna", "mayonnaise", "celery", "onion", "bread"],
            "name": "Tuna Salad Sandwich",
            "instructions": "1. Mix tuna with mayonnaise, diced celery, and diced onion.\n2. Spread tuna salad on bread slices.\n3. Top with lettuce and another slice of bread.\n4. Enjoy your tuna salad sandwich!"
        },
        {
            "ingredients": ["pumpkin", "flour", "eggs", "milk", "cinnamon"],
            "name": "Pumpkin Pancakes",
            "instructions": "1. Mix pumpkin puree, flour, eggs, milk, and cinnamon until smooth.\n2. Heat a skillet and pour batter to form pancakes.\n3. Cook until golden brown on both sides.\n4. Serve with maple syrup."
        },
        {
            "ingredients": ["spaghetti squash", "marinara sauce", "parmesan cheese"],
            "name": "Spaghetti Squash with Marinara",
            "instructions": "1. Roast spaghetti squash until tender.\n2. Scrape out the squash strands and toss with marinara sauce.\n3. Serve topped with grated parmesan cheese."
        },
        {
            "ingredients": ["sweet potato", "black beans", "bell pepper", "lime", "cilantro"],
            "name": "Sweet Potato and Black Bean Tacos",
            "instructions": "1. Roast sweet potato cubes until tender.\n2. Warm black beans and bell pepper strips.\n3. Fill taco shells with sweet potatoes, black beans, and bell peppers.\n4. Squeeze lime juice and garnish with cilantro."
        },
        {
            "ingredients": ["salmon", "honey", "soy sauce", "garlic"],
            "name": "Honey Garlic Salmon",
            "instructions": "1. Mix honey, soy sauce, and minced garlic.\n2. Marinate salmon fillets in the mixture for 30 minutes.\n3. Grill or bake salmon until cooked through.\n4. Serve with additional sauce if desired."
        },
        {
            "ingredients": ["chicken thighs", "lemon", "rosemary", "garlic"],
            "name": "Lemon Rosemary Chicken",
            "instructions": "1. Season chicken thighs with salt, pepper, minced garlic, and chopped rosemary.\n2. Sear chicken until golden brown.\n3. Finish cooking in the oven until juices run clear.\n4. Serve with lemon wedges."
        },
        {
            "ingredients": ["broccoli", "bell pepper", "carrot", "soy sauce", "sesame oil"],
            "name": "Stir Fried Vegetables",
            "instructions": "1. Stir fry broccoli florets, sliced bell peppers, and shredded carrots in sesame oil.\n2. Add soy sauce and cook until vegetables are tender.\n3. Serve as a side dish or over rice."
        },
        {
            "ingredients": ["ground turkey", "bell pepper", "onion", "tomato sauce", "chili powder"],
            "name": "Turkey Chili",
            "instructions": "1. Brown ground turkey with diced onions and bell peppers.\n2. Stir in tomato sauce, chili powder, and any desired seasonings.\n3. Simmer until flavors are blended and chili has thickened."
        },
        {
            "ingredients": ["cod", "lemon", "butter", "parsley"],
            "name": "Baked Lemon Butter Cod",
            "instructions": "1. Place cod fillets in a baking dish.\n2. Drizzle with melted butter and lemon juice.\n3. Season with chopped parsley, salt, and pepper.\n4. Bake until fish is flaky and cooked through."
        },
        {
            "ingredients": ["cucumber", "yogurt", "garlic", "dill"],
            "name": "Tzatziki Sauce",
            "instructions": "1. Grate cucumber and squeeze out excess moisture.\n2. Mix cucumber with yogurt, minced garlic, chopped dill, and a splash of lemon juice.\n3. Serve chilled as a dip or sauce."
        },
        {
            "ingredients": ["ground beef", "macaroni", "tomato sauce", "cheddar cheese"],
            "name": "Beef and Macaroni Casserole",
            "instructions": "1. Cook macaroni according to package instructions.\n2. Brown ground beef and mix with tomato sauce.\n3. Combine cooked macaroni with beef mixture in a baking dish.\n4. Top with shredded cheddar cheese and bake until bubbly."
        },
        {
            "ingredients": ["chicken breast", "pesto", "mozzarella cheese", "tomato"],
            "name": "Pesto Stuffed Chicken",
            "instructions": "1. Cut a pocket into each chicken breast.\n2. Stuff with pesto, sliced tomatoes, and mozzarella cheese.\n3. Secure with toothpicks and bake until chicken is cooked through."
        },
        {
            "ingredients": ["potato", "bacon", "cheddar cheese", "sour cream"],
            "name": "Loaded Baked Potatoes",
            "instructions": "1. Bake potatoes until tender.\n2. Cut a slit in each potato and stuff with cooked bacon and shredded cheddar cheese.\n3. Top with a dollop of sour cream before serving."
        },
        {
            "ingredients": ["ground pork", "cabbage", "carrot", "ginger", "soy sauce"],
            "name": "Pork and Cabbage Stir Fry",
            "instructions": "1. Stir fry ground pork with shredded cabbage and carrots.\n2. Season with grated ginger and soy sauce.\n3. Cook until vegetables are tender and pork is cooked through."
        },
        {
            "ingredients": ["chickpeas", "lemon", "tahini", "garlic"],
            "name": "Homemade Hummus",
            "instructions": "1. Blend chickpeas, lemon juice, tahini, and minced garlic until smooth.\n2. Season with salt and pepper to taste.\n3. Serve with pita bread, vegetables, or as a dip."
        },
        {
            "ingredients": ["ground beef", "onion", "green beans", "cream of mushroom soup", "cheddar cheese"],
            "name": "Green Bean Casserole",
            "instructions": "1. Brown ground beef with diced onions.\n2. Combine cooked green beans with cream of mushroom soup and half of the shredded cheddar cheese.\n3. Spread beef mixture in a baking dish and top with remaining cheese.\n4. Bake until cheese is melted and bubbly."
        },
        {
            "ingredients": ["chicken thighs", "coconut milk", "curry paste", "bell pepper"],
            "name": "Coconut Curry Chicken",
            "instructions": "1. Brown chicken thighs in a pan.\n2. Add curry paste, coconut milk, and sliced bell peppers.\n3. Simmer until chicken is cooked through and sauce is thickened.\n4. Serve over rice."
        },
        {
            "ingredients": ["penne pasta", "spinach", "sun-dried tomatoes", "pine nuts", "parmesan cheese"],
            "name": "Penne with Spinach and Sun-Dried Tomatoes",
            "instructions": "1. Cook penne pasta according to package instructions.\n2. Saute spinach and sun-dried tomatoes in olive oil until wilted.\n3. Toss cooked pasta with spinach mixture, toasted pine nuts, and grated parmesan cheese."
        },
        {
            "ingredients": ["tilapia", "lime", "cilantro", "jalapeno"],
            "name": "Grilled Tilapia with Lime-Cilantro Sauce",
            "instructions": "1. Season tilapia fillets with salt and pepper.\n2. Grill fish until cooked through.\n3. Mix chopped cilantro, lime juice, and minced jalapeno for the sauce.\n4. Serve fish with lime-cilantro sauce."
        },
        {
            "ingredients": ["ground turkey", "zucchini", "bell pepper", "tomato sauce", "italian seasoning"],
            "name": "Turkey Zucchini Boats",
            "instructions": "1. Cut zucchinis in half lengthwise and scoop out the seeds.\n2. Brown ground turkey with diced bell peppers.\n3. Fill zucchini halves with turkey mixture and top with tomato sauce.\n4. Bake until zucchini is tender."
        },
        {
            "ingredients": ["lentils", "onion", "carrot", "celery", "vegetable broth"],
            "name": "Lentil Soup",
            "instructions": "1. Saute diced onions, carrots, and celery in olive oil until softened.\n2. Add lentils and vegetable broth.\n3. Simmer until lentils are tender.\n4. Season with salt, pepper, and any desired herbs."
        },
        {
            "ingredients": ["chicken breast", "avocado", "bacon", "ranch dressing"],
            "name": "Chicken Bacon Avocado Wrap",
            "instructions": "1. Cook chicken breast until done.\n2. Cook bacon until crispy.\n3. Slice avocado.\n4. Assemble wraps with chicken, bacon, avocado, and ranch dressing."
        },
        {
            "ingredients": ["ground beef", "bell pepper", "onion", "tomato", "rice"],
            "name": "Stuffed Bell Peppers",
            "instructions": "1. Cook rice according to package instructions.\n2. Brown ground beef with diced onions and chopped tomatoes.\n3. Mix cooked rice with beef mixture.\n4. Stuff bell peppers with the mixture and bake until peppers are tender."
        },
        {
            "ingredients": ["chicken thighs", "soy sauce", "brown sugar", "ginger", "garlic"],
            "name": "Teriyaki Chicken",
            "instructions": "1. Marinate chicken thighs in soy sauce, brown sugar, minced garlic, and grated ginger.\n2. Grill or bake chicken until cooked through.\n3. Serve with steamed vegetables and rice."
        },
        {
            "ingredients": ["pork ribs", "bbq sauce", "apple cider vinegar", "brown sugar"],
            "name": "BBQ Pork Ribs",
            "instructions": "1. Rub pork ribs with a mixture of brown sugar, salt, and pepper.\n2. Cook ribs low and slow on the grill or in the oven.\n3. Baste with a mixture of BBQ sauce and apple cider vinegar.\n4. Continue cooking until tender and caramelized."
        },
        {
            "ingredients": ["chickpeas", "kale", "lemon", "garlic", "olive oil"],
            "name": "Garlicky Chickpea and Kale Salad",
            "instructions": "1. Saute minced garlic in olive oil until fragrant.\n2. Add chickpeas and kale, and cook until kale is wilted.\n3. Squeeze lemon juice over the salad before serving."
        },
        {
            "ingredients": ["beef", "mushrooms", "onion", "beef broth", "sour cream"],
            "name": "Beef Stroganoff",
            "instructions": "1. Brown beef in a pan with diced onions and sliced mushrooms.\n2. Add beef broth and simmer until beef is tender.\n3. Stir in sour cream and heat through.\n4. Serve over cooked egg noodles."
        },
        {
            "ingredients": ["salmon", "asparagus", "lemon", "butter"],
            "name": "Lemon Butter Salmon with Asparagus",
            "instructions": "1. Preheat oven and prepare a baking sheet.\n2. Season salmon fillets with salt, pepper, and lemon zest.\n3. Place salmon and asparagus on the baking sheet.\n4. Drizzle with melted butter and lemon juice.\n5. Bake until salmon is cooked through and asparagus is tender."
        },
        {
            "ingredients": ["chicken breast", "quinoa", "broccoli", "soy sauce", "sesame oil"],
            "name": "Chicken and Broccoli Quinoa Bowl",
            "instructions": "1. Cook quinoa according to package instructions.\n2. Stir fry sliced chicken breast with chopped broccoli.\n3. Season with soy sauce and sesame oil.\n4. Serve over cooked quinoa."
        },
        {
            ingredients: ["tofu", "broccoli", "bell pepper", "carrots", "soy sauce", "garlic", "ginger"],
            name: "Vegetable Stir Fry with Tofu",
            instructions: "1. Press tofu to remove excess water, then cut into cubes.\n2. Stir fry tofu with sliced vegetables in garlic and ginger.\n3. Add soy sauce and cook until vegetables are tender.\n4. Serve hot over rice or noodles."
          },
          {
            ingredients: ["Arborio rice", "mushrooms", "onion", "garlic", "vegetable broth", "white wine", "parmesan cheese", "butter"],
            name: "Mushroom Risotto",
            instructions: "1. Saute chopped onion and minced garlic in butter until soft.\n2. Add sliced mushrooms and cook until browned.\n3. Stir in Arborio rice and cook until translucent.\n4. Pour in white wine and simmer until absorbed.\n5. Gradually add vegetable broth, stirring until rice is creamy and cooked.\n6. Stir in grated parmesan cheese before serving."
          },
          {
            ingredients: ["salmon fillets", "honey", "dijon mustard", "lemon juice", "olive oil", "salt", "pepper"],
            name: "Honey Mustard Glazed Salmon",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. In a small bowl, mix honey, dijon mustard, lemon juice, olive oil, salt, and pepper.\n3. Brush the mixture over salmon fillets.\n4. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork."
          },
          {
            ingredients: ["tomatoes", "fresh mozzarella cheese", "fresh basil leaves", "balsamic glaze", "olive oil", "salt", "pepper"],
            name: "Caprese Salad",
            instructions: "1. Slice tomatoes and fresh mozzarella cheese.\n2. Arrange alternating slices of tomato, mozzarella, and basil leaves on a serving plate.\n3. Drizzle with balsamic glaze and olive oil.\n4. Season with salt and pepper to taste before serving."
          },
          {
            ingredients: ["whole chicken", "lemon", "garlic", "fresh herbs", "olive oil", "salt", "pepper"],
            name: "Lemon Herb Roast Chicken",
            instructions: "1. Preheat oven to 425°F (220°C).\n2. Rinse chicken and pat dry with paper towels.\n3. Stuff cavity with lemon halves, garlic cloves, and fresh herbs.\n4. Rub olive oil over the chicken and season generously with salt and pepper.\n5. Place chicken on a roasting pan and roast for 1 hour or until juices run clear and skin is golden brown."
          },
          {
            ingredients: ["kidney beans", "black beans", "diced tomatoes", "onion", "bell pepper", "garlic", "chili powder", "cumin", "paprika", "vegetable broth"],
            name: "Vegetarian Chili",
            instructions: "1. Saute diced onion, bell pepper, and minced garlic in a large pot until softened.\n2. Add diced tomatoes, drained and rinsed beans, chili powder, cumin, paprika, and vegetable broth.\n3. Simmer for 20-30 minutes, stirring occasionally.\n4. Serve hot topped with shredded cheese, sour cream, and chopped cilantro if desired."
          },
          {
            ingredients: ["chicken breast", "flour", "butter", "olive oil", "lemon", "capers", "chicken broth", "white wine", "parsley", "salt", "pepper"],
            name: "Chicken Piccata",
            instructions: "1. Pound chicken breast to an even thickness, then season with salt and pepper.\n2. Dredge chicken in flour, shaking off excess.\n3. Heat butter and olive oil in a skillet over medium-high heat.\n4. Cook chicken until golden brown on both sides and cooked through, then remove from skillet and set aside.\n5. In the same skillet, add lemon juice, capers, chicken broth, and white wine. Cook until sauce is reduced by half.\n6. Return chicken to the skillet and simmer for a few minutes.\n7. Garnish with chopped parsley before serving."
          },
          {
            ingredients: ["eggplant", "flour", "eggs", "breadcrumbs", "marinara sauce", "mozzarella cheese", "parmesan cheese", "basil", "olive oil", "salt", "pepper"],
            name: "Eggplant Parmesan",
            instructions: "1. Preheat oven to 375°F (190°C) and grease a baking dish.\n2. Slice eggplant into rounds, then dip in flour, beaten eggs, and breadcrumbs.\n3. Arrange breaded eggplant slices in a single layer in the baking dish.\n4. Top each slice with marinara sauce, mozzarella cheese, and parmesan cheese.\n5. Repeat layering until all eggplant slices are used.\n6. Bake for 25-30 minutes, or until cheese is bubbly and golden.\n7. Garnish with fresh basil before serving."
          },
          {
            ingredients: ["shrimp", "linguine pasta", "butter", "olive oil", "garlic", "white wine", "lemon juice", "parsley", "salt", "pepper"],
            name: "Shrimp Scampi",
            instructions: "1. Cook linguine pasta according to package instructions, then drain and set aside.\n2. In a large skillet, melt butter with olive oil over medium heat.\n3. Add minced garlic and cook until fragrant, about 1 minute.\n4. Stir in white wine and lemon juice, then add shrimp to the skillet.\n5. Cook shrimp until pink and opaque, then season with salt and pepper.\n6. Toss cooked pasta with shrimp and sauce until well combined.\n7. Garnish with chopped parsley before serving."
          },
          {
            ingredients: ["potatoes", "olive oil", "lemon juice", "garlic", "fresh herbs", "salt", "pepper"],
            name: "Lemon Herb Roasted Potatoes",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. Cut potatoes into bite-sized pieces and place them in a bowl.\n3. In a small bowl, whisk together olive oil, lemon juice, minced garlic, chopped herbs, salt, and pepper.\n4. Pour the mixture over the potatoes and toss until evenly coated.\n5. Spread potatoes in a single layer on the baking sheet.\n6. Roast for 25-30 minutes, or until potatoes are golden brown and crispy."
          },
          {
            ingredients: ["quinoa", "cucumber", "cherry tomatoes", "kalamata olives", "red onion", "feta cheese", "lemon juice", "olive oil", "garlic", "oregano", "salt", "pepper"],
            name: "Mediterranean Quinoa Salad",
            instructions: "1. Cook quinoa according to package instructions and let it cool.\n2. Dice cucumber, halve cherry tomatoes, slice kalamata olives, and finely chop red onion.\n3. In a large bowl, combine cooked quinoa with prepared vegetables and crumbled feta cheese."
          },
          {
            ingredients: ["chickpeas", "red onion", "green pepper", "cucumber", "tomato", "feta cheese", "olive oil", "red wine vinegar", "oregano", "salt", "pepper"],
            name: "Greek Chickpea Salad",
            instructions: "1. Rinse and drain chickpeas.\n2. Chop red onion, green pepper, cucumber, and tomato.\n3. In a large bowl, combine chickpeas and chopped vegetables.\n4. Crumble feta cheese over the salad.\n5. In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.\n6. Drizzle dressing over the salad and toss to coat evenly."
          },
          {
            ingredients: ["ground beef", "onion", "green pepper", "garlic", "canned tomatoes", "tomato paste", "chili powder", "cumin", "paprika", "kidney beans", "black beans", "corn", "salt", "pepper"],
            name: "Beef and Bean Chili",
            instructions: "1. In a large pot, brown ground beef over medium heat.\n2. Add diced onion, green pepper, and minced garlic. Cook until softened.\n3. Stir in canned tomatoes, tomato paste, chili powder, cumin, paprika, salt, and pepper.\n4. Add kidney beans, black beans, and corn.\n5. Simmer for at least 30 minutes, stirring occasionally.\n6. Serve hot with your favorite toppings."
          },
          {
            ingredients: ["chicken thighs", "soy sauce", "honey", "rice vinegar", "garlic", "ginger", "sesame oil", "cornstarch", "green onions", "sesame seeds"],
            name: "Honey Garlic Chicken",
            instructions: "1. In a bowl, mix soy sauce, honey, rice vinegar, minced garlic, grated ginger, sesame oil, and cornstarch.\n2. Add chicken thighs to the bowl and toss to coat evenly.\n3. Heat oil in a skillet over medium-high heat.\n4. Add chicken thighs and cook until browned and cooked through.\n5. Garnish with sliced green onions and sesame seeds before serving."
          },
          {
            ingredients: ["pork tenderloin", "soy sauce", "brown sugar", "honey", "garlic", "ginger", "sesame oil", "cornstarch", "green onions"],
            name: "Honey Garlic Pork Tenderloin",
            instructions: "1. In a bowl, mix soy sauce, brown sugar, honey, minced garlic, grated ginger, sesame oil, and cornstarch.\n2. Add pork tenderloin to the bowl and toss to coat evenly.\n3. Marinate for at least 30 minutes, or overnight in the refrigerator.\n4. Preheat oven to 375°F (190°C).\n5. Place pork tenderloin on a baking sheet lined with parchment paper.\n6. Bake for 25-30 minutes, or until internal temperature reaches 145°F (63°C).\n7. Let it rest for 5 minutes before slicing.\n8. Garnish with sliced green onions before serving."
          },
          {
            ingredients: ["potatoes", "olive oil", "garlic powder", "paprika", "rosemary", "salt", "pepper"],
            name: "Roasted Garlic Rosemary Potatoes",
            instructions: "1. Preheat oven to 425°F (220°C) and line a baking sheet with parchment paper.\n2. Cut potatoes into wedges or cubes.\n3. In a bowl, toss potatoes with olive oil, garlic powder, paprika, chopped rosemary, salt, and pepper until evenly coated.\n4. Spread potatoes in a single layer on the baking sheet.\n5. Roast for 25-30 minutes, or until golden brown and crispy, flipping halfway through."
          },
          {
            ingredients: ["salmon fillets", "lemon", "dill", "garlic", "salt", "pepper"],
            name: "Lemon Dill Salmon",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. Place salmon fillets on the baking sheet.\n3. Squeeze lemon juice over the salmon and sprinkle with chopped dill and minced garlic.\n4. Season with salt and pepper.\n5. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork."
          },
          {
            ingredients: ["pasta", "butter", "parmesan cheese", "garlic", "parsley", "salt", "pepper"],
            name: "Garlic Butter Parmesan Pasta",
            instructions: "1. Cook pasta according to package instructions, then drain and set aside.\n2. In a skillet, melt butter over medium heat.\n3. Add minced garlic and cook until fragrant, about 1 minute.\n4. Toss cooked pasta with garlic butter sauce until evenly coated.\n5. Stir in grated parmesan cheese, chopped parsley, salt, and pepper.\n6. Serve hot, garnished with additional parmesan and parsley if desired."
          },
          {
            ingredients: ["chicken breasts", "flour", "egg", "breadcrumbs", "olive oil", "marinara sauce", "mozzarella cheese", "parmesan cheese", "basil", "salt", "pepper"],
            name: "Chicken Parmesan",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. Pound chicken breasts to an even thickness, then season with salt and pepper.\n3. Dredge chicken in flour, then dip in beaten egg and coat with breadcrumbs.\n4. Heat olive oil in a skillet over medium-high heat.\n5. Cook chicken until golden brown on both sides, then transfer to the prepared baking sheet.\n6. Top each chicken breast with marinara sauce, mozzarella cheese, and grated parmesan cheese.\n7. Bake for 15-20 minutes, or until cheese is melted and bubbly.\n8. Garnish with chopped basil before serving."
          },
          {
            ingredients: ["beef sirloin", "bell peppers", "onion", "soy sauce", "brown sugar", "garlic", "ginger", "cornstarch", "rice", "green onions"],
            name: "Beef Stir Fry",
            instructions: "1. Slice beef sirloin thinly against the grain.\n2. In a bowl, whisk together soy sauce, brown sugar, minced garlic, grated ginger, and cornstarch.\n3. Heat oil in a skillet or wok over high heat.\n4. Add sliced beef and cook until browned, then remove from skillet.\n5. Add sliced bell peppers and onion to the skillet and cook until tender-crisp.\n6. Return beef to the skillet and pour in the sauce.\n7. Cook, stirring constantly, until the sauce has thickened and coats the beef and vegetables.\n8. Serve hot over cooked rice, garnished with sliced green onions."
          },
          {
            ingredients: ["shrimp", "linguine", "butter", "olive oil", "garlic", "red pepper flakes", "lemon", "parsley", "salt", "pepper"],
            name: "Garlic Butter Shrimp Pasta",
            instructions: "1. Cook linguine according to package instructions, then drain and set aside.\n2. In a skillet, melt butter with olive oil over medium heat.\n3. Add minced garlic and red pepper flakes, and cook until fragrant.\n4. Add shrimp to the skillet and cook until pink and opaque.\n5. Squeeze lemon juice over the shrimp and toss to coat.\n6. Add cooked linguine to the skillet and toss with the shrimp and sauce.\n7. Season with chopped parsley, salt, and pepper.\n8. Serve hot, garnished with additional parsley and lemon wedges if desired."
          },
          {
            ingredients: ["pork chops", "maple syrup", "dijon mustard", "garlic", "thyme", "salt", "pepper"],
            name: "Maple Dijon Pork Chops",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. Season pork chops with salt and pepper.\n3. In a small bowl, whisk together maple syrup, Dijon mustard, minced garlic, and chopped thyme.\n4. Brush the maple Dijon mixture over both sides of the pork chops.\n5. Place pork chops on the prepared baking sheet and bake for 20-25 minutes, or until cooked through.\n6. Serve hot, garnished with additional chopped thyme if desired."
          },
          {
            ingredients: ["spinach", "ricotta cheese", "mozzarella cheese", "parmesan cheese", "garlic", "salt", "pepper", "lasagna noodles", "marinara sauce"],
            name: "Spinach Lasagna Roll-Ups",
            instructions: "1. Preheat oven to 375°F (190°C) and grease a baking dish.\n2. Cook lasagna noodles according to package instructions, then lay them out flat.\n3. In a bowl, mix together ricotta cheese, shredded mozzarella cheese, grated parmesan cheese, minced garlic, salt, and pepper.\n4. Spread a layer of the cheese mixture onto each lasagna noodle, then top with a layer of spinach leaves.\n5. Roll up the lasagna noodles and place them seam-side down in the prepared baking dish.\n6. Pour marinara sauce over the top of the roll-ups, then sprinkle with additional mozzarella and parmesan cheese.\n7. Cover with foil and bake for 20 minutes.\n8. Remove foil and bake for an additional 10 minutes, or until cheese is melted and bubbly."
          },
          {
            ingredients: ["chicken breasts", "bacon", "ranch seasoning", "cheddar cheese", "green onions"],
            name: "Bacon Ranch Chicken",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. Season chicken breasts with ranch seasoning on both sides.\n3. Wrap each chicken breast with slices of bacon.\n4. Place chicken breasts on the prepared baking sheet.\n5. Bake for 25-30 minutes, or until chicken is cooked through.\n6. Sprinkle shredded cheddar cheese and chopped green onions over the chicken.\n7. Return to the oven and bake for an additional 5 minutes, or until cheese is melted.\n8. Serve hot, garnished with additional green onions if desired."
          },
          {
            ingredients: ["salmon fillets", "brown sugar", "soy sauce", "garlic", "ginger", "sesame oil", "sesame seeds"],
            name: "Brown Sugar Glazed Salmon",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. In a small bowl, mix together brown sugar, soy sauce, minced garlic, grated ginger, sesame oil, and sesame seeds.\n3. Place salmon fillets on the prepared baking sheet.\n4. Brush the brown sugar glaze over the salmon.\n5. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork.\n6. Serve hot, garnished with additional sesame seeds if desired."
          },
          {
            ingredients: ["ground beef", "onion", "bell pepper", "garlic", "tomato sauce", "diced tomatoes", "chili powder", "cumin", "paprika", "cayenne pepper", "kidney beans", "black beans", "corn", "salt", "pepper"],
            name: "Homemade Chili",
            instructions: "1. In a large pot, brown ground beef over medium heat.\n2. Add diced onion, chopped bell pepper, and minced garlic. Cook until softened.\n3. Stir in tomato sauce, diced tomatoes, chili powder, cumin, paprika, cayenne pepper, salt, and pepper.\n4. Add kidney beans, black beans, and corn.\n5. Simmer for at least 30 minutes, stirring occasionally.\n6. Serve hot with your favorite toppings."
          },
          {
            ingredients: ["chicken thighs", "lemon", "garlic", "rosemary", "thyme", "salt", "pepper"],
            name: "Lemon Herb Roast Chicken",
            instructions: "1. Preheat oven to 425°F (220°C) and line a baking dish with parchment paper.\n2. Pat chicken thighs dry with paper towels and season with salt and pepper.\n3. Zest and juice the lemon, then mince the garlic and chop the rosemary and thyme.\n4. In a small bowl, combine lemon zest, lemon juice, minced garlic, chopped rosemary, chopped thyme, salt, and pepper.\n5. Rub the herb mixture over the chicken thighs.\n6. Place chicken thighs in the prepared baking dish and roast for 25-30 minutes, or until golden brown and cooked through.\n7. Serve hot, garnished with additional lemon wedges if desired."
          },
          {
            ingredients: ["salmon fillets", "maple syrup", "soy sauce", "garlic", "ginger", "lemon", "sesame seeds"],
            name: "Maple Soy Glazed Salmon",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. In a small bowl, whisk together maple syrup, soy sauce, minced garlic, grated ginger, and lemon juice.\n3. Place salmon fillets on the prepared baking sheet.\n4. Brush the maple soy glaze over the salmon.\n5. Sprinkle sesame seeds over the salmon.\n6. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork.\n7. Serve hot, garnished with additional sesame seeds if desired."
          },
          {
            ingredients: ["ground turkey", "onion", "bell pepper", "garlic", "tomato sauce", "diced tomatoes", "chili powder", "cumin", "paprika", "kidney beans", "black beans", "corn", "salt", "pepper"],
            name: "Turkey Chili",
            instructions: "1. In a large pot, brown ground turkey over medium heat.\n2. Add diced onion, chopped bell pepper, and minced garlic. Cook until softened.\n3. Stir in tomato sauce, diced tomatoes, chili powder, cumin, paprika, salt, and pepper.\n4. Add kidney beans, black beans, and corn.\n5. Simmer for at least 30 minutes, stirring occasionally.\n6. Serve hot with your favorite toppings."
          },
          {
            ingredients: ["chicken breasts", "lime", "garlic", "cumin", "chili powder", "smoked paprika", "salt", "pepper", "olive oil"],
            name: "Mexican Grilled Chicken",
            instructions: "1. In a small bowl, whisk together lime juice, minced garlic, ground cumin, chili powder, smoked paprika, salt, pepper, and olive oil.\n2. Place chicken breasts in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat grill to medium-high heat.\n5. Remove chicken from marinade and discard excess.\n6. Grill chicken for 6-8 minutes per side, or until cooked through and juices run clear.\n7. Let chicken rest for a few minutes before serving.\n8. Serve hot, garnished with lime wedges and chopped cilantro if desired."
          },
          {
            ingredients: ["pork tenderloin", "soy sauce", "hoisin sauce", "honey", "garlic", "ginger", "sesame oil", "sriracha", "green onions", "sesame seeds"],
            name: "Asian Glazed Pork Tenderloin",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. In a small bowl, whisk together soy sauce, hoisin sauce, honey, minced garlic, grated ginger, sesame oil, and sriracha.\n3. Place pork tenderloin on the prepared baking sheet.\n4. Brush the Asian glaze over the pork tenderloin.\n5. Sprinkle sliced green onions and sesame seeds over the pork tenderloin.\n6. Bake for 25-30 minutes, or until pork is cooked through and reaches an internal temperature of 145°F (63°C).\n7. Let it rest for 5 minutes before slicing.\n8. Serve hot, garnished with additional sliced green onions and sesame seeds if desired."
          },
          {
            ingredients: ["shrimp", "linguine", "butter", "garlic", "lemon", "parsley", "salt", "pepper", "red pepper flakes", "parmesan cheese"],
            name: "Lemon Garlic Shrimp Pasta",
            instructions: "1. Cook linguine according to package instructions, then drain and set aside.\n2. In a skillet, melt butter over medium heat.\n3. Add minced garlic and red pepper flakes, and cook until fragrant.\n4. Add shrimp to the skillet and cook until pink and opaque.\n5. Squeeze lemon juice over the shrimp and toss to coat.\n6. Add cooked linguine to the skillet and toss with the shrimp and sauce.\n7. Season with chopped parsley, salt, and pepper.\n8. Serve hot, garnished with grated parmesan cheese."
          },
          {
            ingredients: ["ground beef", "onion", "bell pepper", "garlic", "tomato sauce", "diced tomatoes", "oregano", "basil", "salt", "pepper", "lasagna noodles", "ricotta cheese", "mozzarella cheese", "parmesan cheese"],
            name: "Classic Lasagna",
            instructions: "1. Preheat oven to 375°F (190°C) and grease a baking dish.\n2. In a large skillet, brown ground beef over medium heat.\n3. Add diced onion, chopped bell pepper, and minced garlic. Cook until softened.\n4. Stir in tomato sauce, diced tomatoes, dried oregano, dried basil, salt, and pepper.\n5. Simmer for 15-20 minutes, stirring occasionally.\n6. Meanwhile, cook lasagna noodles according to package instructions, then drain and set aside.\n7. In a bowl, mix together ricotta cheese, shredded mozzarella cheese, and grated parmesan cheese.\n8. Spread a layer of meat sauce in the bottom of the prepared baking dish.\n9. Top with a layer of lasagna noodles, followed by a layer of cheese mixture.\n10. Repeat layers until all ingredients are used, ending with a layer of cheese on top.\n11. Cover with foil and bake for 30 minutes.\n12. Remove foil and bake for an additional 15 minutes, or until cheese is melted and bubbly."
          },
          {
            ingredients: ["chicken thighs", "soy sauce", "pineapple juice", "brown sugar", "ketchup", "garlic", "ginger", "cornstarch", "pineapple chunks", "green onions"],
            name: "Sweet and Sour Chicken",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking dish with parchment paper.\n2. In a bowl, whisk together soy sauce, pineapple juice, brown sugar, ketchup, minced garlic, grated ginger, and cornstarch.\n3. Place chicken thighs in the prepared baking dish.\n4. Pour half of the sweet and sour sauce over the chicken, reserving the rest.\n5. Bake for 25-30 minutes, or until chicken is cooked through.\n6. In a saucepan, heat the reserved sweet and sour sauce over medium heat.\n7. Add pineapple chunks and sliced green onions to the sauce.\n8. Cook until the sauce has thickened.\n9. Serve chicken with the sweet and sour sauce, garnished with additional green onions if desired."
          },
          {
            ingredients: ["salmon fillets", "balsamic vinegar", "honey", "garlic", "rosemary", "olive oil", "salt", "pepper"],
            name: "Balsamic Glazed Salmon",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. In a small bowl, whisk together balsamic vinegar, honey, minced garlic, chopped rosemary, olive oil, salt, and pepper.\n3. Place salmon fillets on the prepared baking sheet.\n4. Brush the balsamic glaze over the salmon.\n5. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork.\n6. Serve hot, garnished with additional chopped rosemary if desired."
          },
          {
            ingredients: ["ground beef", "onion", "garlic", "carrots", "celery", "tomato paste", "beef broth", "diced tomatoes", "bay leaves", "thyme", "oregano", "salt", "pepper", "elbow macaroni"],
            name: "Beef and Tomato Macaroni Soup",
            instructions: "1. In a large pot, brown ground beef over medium heat.\n2. Add diced onion, minced garlic, chopped carrots, and chopped celery. Cook until softened.\n3. Stir in tomato paste and cook for 2 minutes.\n4. Add beef broth, diced tomatoes, bay leaves, dried thyme, dried oregano, salt, and pepper.\n5. Simmer for 20-25 minutes, stirring occasionally.\n6. Meanwhile, cook elbow macaroni according to package instructions, then drain and set aside.\n7. Remove bay leaves from the soup and discard.\n8. Stir cooked macaroni into the soup.\n9. Serve hot, garnished with chopped parsley if desired."
          },
          {
            ingredients: ["chicken breasts", "balsamic vinegar", "honey", "garlic", "rosemary", "olive oil", "salt", "pepper"],
            name: "Balsamic Glazed Chicken",
            instructions: "1. In a small bowl, whisk together balsamic vinegar, honey, minced garlic, chopped rosemary, olive oil, salt, and pepper.\n2. Place chicken breasts in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat grill to medium-high heat.\n5. Remove chicken from marinade and discard excess.\n6. Grill chicken for 6-8 minutes per side, or until cooked through and juices run clear.\n7. Let chicken rest for a few minutes before serving.\n8. Serve hot, garnished with additional chopped rosemary if desired."
          },
          {
            ingredients: ["pork chops", "balsamic vinegar", "honey", "garlic", "rosemary", "olive oil", "salt", "pepper"],
            name: "Balsamic Glazed Pork Chops",
            instructions: "1. In a small bowl, whisk together balsamic vinegar, honey, minced garlic, chopped rosemary, olive oil, salt, and pepper.\n2. Place pork chops in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat grill to medium-high heat.\n5. Remove pork chops from marinade and discard excess.\n6. Grill pork chops for 5-7 minutes per side, or until cooked through and juices run clear.\n7. Let pork chops rest for a few minutes before serving.\n8. Serve hot, garnished with additional chopped rosemary if desired."
          },
          {
            ingredients: ["chicken breasts", "balsamic vinegar", "brown sugar", "garlic", "thyme", "salt", "pepper", "olive oil"],
            name: "Balsamic Glazed Chicken Breasts",
            instructions: "1. In a small bowl, whisk together balsamic vinegar, brown sugar, minced garlic, chopped thyme, salt, pepper, and olive oil.\n2. Place chicken breasts in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat grill to medium-high heat.\n5. Remove chicken from marinade and discard excess.\n6. Grill chicken for 6-8 minutes per side, or until cooked through and juices run clear.\n7. Let chicken rest for a few minutes before serving.\n8. Serve hot, garnished with additional chopped thyme if desired."
          },
          {
            ingredients: ["pork tenderloin", "balsamic vinegar", "brown sugar", "garlic", "rosemary", "salt", "pepper", "olive oil"],
            name: "Balsamic Glazed Pork Tenderloin",
            instructions: "1. In a small bowl, whisk together balsamic vinegar, brown sugar, minced garlic, chopped rosemary, salt, pepper, and olive oil.\n2. Place pork tenderloin in a shallow dish and pour the marinade over it.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n5. Remove pork tenderloin from marinade and place it on the prepared baking sheet.\n6. Roast for 25-30 minutes, or until pork is cooked through and reaches an internal temperature of 145°F (63°C).\n7. Let it rest for 5 minutes before slicing.\n8. Serve hot, garnished with additional chopped rosemary if desired."
          },
          {
            ingredients: ["chicken thighs", "soy sauce", "hoisin sauce", "honey", "garlic", "ginger", "sriracha", "green onions", "sesame seeds"],
            name: "Honey Garlic Chicken Thighs",
            instructions: "1. In a bowl, whisk together soy sauce, hoisin sauce, honey, minced garlic, grated ginger, sriracha, sliced green onions, and sesame seeds.\n2. Place chicken thighs in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n5. Remove chicken thighs from marinade and place them on the prepared baking sheet.\n6. Bake for 25-30 minutes, or until chicken is cooked through and juices run clear.\n7. Serve hot, garnished with additional sliced green onions and sesame seeds if desired."
          },
          {
            ingredients: ["salmon fillets", "soy sauce", "brown sugar", "ginger", "garlic", "sesame oil", "rice vinegar", "cornstarch", "green onions", "sesame seeds"],
            name: "Soy Ginger Glazed Salmon",
            instructions: "1. In a bowl, whisk together soy sauce, brown sugar, grated ginger, minced garlic, sesame oil, rice vinegar, and cornstarch.\n2. Place salmon fillets in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n5. Remove salmon fillets from marinade and place them on the prepared baking sheet.\n6. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork.\n7. Serve hot, garnished with sliced green onions and sesame seeds."
          },
          {
            ingredients: ["chicken breasts", "lemon", "garlic", "oregano", "thyme", "rosemary", "olive oil", "salt", "pepper"],
            name: "Lemon Herb Grilled Chicken",
            instructions: "1. In a small bowl, whisk together lemon juice, minced garlic, chopped oregano, chopped thyme, chopped rosemary, olive oil, salt, and pepper.\n2. Place chicken breasts in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat grill to medium-high heat.\n5. Remove chicken from marinade and discard excess.\n6. Grill chicken for 6-8 minutes per side, or until cooked through and juices run clear.\n7. Let chicken rest for a few minutes before serving.\n8. Serve hot, garnished with additional chopped herbs if desired."
          },
          {
            ingredients: ["ground beef", "onion", "garlic", "bell pepper", "tomato sauce", "diced tomatoes", "chili powder", "cumin", "paprika", "cayenne pepper", "kidney beans", "black beans", "corn", "salt", "pepper"],
            name: "Chunky Beef Chili",
            instructions: "1. In a large pot, brown ground beef over medium heat.\n2. Add diced onion, minced garlic, chopped bell pepper, and cook until softened.\n3. Stir in tomato sauce, diced tomatoes, chili powder, cumin, paprika, cayenne pepper, salt, and pepper.\n4. Add kidney beans, black beans, and corn.\n5. Simmer for at least 30 minutes, stirring occasionally.\n6. Serve hot with your favorite toppings."
          },
          {
            ingredients: ["chicken thighs", "honey", "soy sauce", "garlic", "ginger", "sesame oil", "red pepper flakes", "green onions", "sesame seeds"],
            name: "Honey Soy Chicken Thighs",
            instructions: "1. In a bowl, whisk together honey, soy sauce, minced garlic, grated ginger, sesame oil, and red pepper flakes.\n2. Place chicken thighs in a shallow dish and pour the marinade over them.\n3. Cover and refrigerate for at least 30 minutes, or up to 4 hours.\n4. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n5. Remove chicken thighs from marinade and place them on the prepared baking sheet.\n6. Bake for 25-30 minutes, or until chicken is cooked through and juices run clear.\n7. Serve hot, garnished with sliced green onions and sesame seeds if desired."
          },
          {
            ingredients: ["pork tenderloin", "apple cider vinegar", "honey", "dijon mustard", "garlic", "thyme", "salt", "pepper"],
            name: "Honey Mustard Pork Tenderloin",
            instructions: "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\n2. Season pork tenderloin with salt and pepper.\n3. In a small bowl, whisk together apple cider vinegar, honey, Dijon mustard, minced garlic, and chopped thyme.\n4. Brush the honey mustard mixture over the pork tenderloin.\n5. Place pork tenderloin on the prepared baking sheet.\n6. Bake for 25-30 minutes, or until pork is cooked through and reaches an internal temperature of 145°F (63°C).\n7. Let it rest for 5 minutes before slicing.\n8. Serve hot, garnished with additional chopped thyme if desired."
          }
        
    ]
}
;

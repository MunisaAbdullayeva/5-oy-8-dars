// let productList = document.querySelector('#productsList')

// fetch('https://dummyjson.com/recipes')
//     .then(recuest => recuest.json())
//     .then(response => {
//         console.log(response.recipes)

//         response.recipes.map(item => {
//             const recipeElement = document.createElement('div')
//             recipeElement.className = "w-[31%] bg-base-200 shadow-lg shadow-slate-600 rounded-lg"
//             recipeElement.innerHTML = `
//                 <img class="w-full h-40 object-cover rounded-lg" src="${item.image}" alt=""> 
//                 <div class="card-body"> 
//                     <h2 class="text-lg font-bold">${item.name}</h2> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span>Calories Per Serving:</span> 
//                         <span id="Calories">${item.caloriesPerServing}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                             Cook Time Minutes: 
//                         </span> 
//                         <span>${item.cookTimeMinutes}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                             cuisine: 
//                         </span> 
//                         <span>${item.cuisine}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                           difficulty: 
//                         </span> 
//                         <span>${item.difficulty}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                         rating: 
//                         </span> 
//                         <span>${item.rating}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                             mealType: 
//                         </span> 
//                         <span>${item.mealType}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                         reviewCount: 
//                         </span> 
//                         <span>${item.reviewCount}</span> 
//                     </p> 
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                         servings: 
//                         </span> 
//                         <span>${item.servings}</span> 
//                     </p>
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                         prepTimeMinutes: 
//                         </span> 
//                         <span>${item.prepTimeMinutes}</span> 
//                     </p>
//                     <p class="flex items-center justify-between text-xs"> 
//                         <span> 
//                         userId: 
//                         </span> 
//                         <span>${item.userId}</span> 
//                     </p>
//                     <button class="btn btn-primary btn-block">Add to cart</button> 
//                 </div> 
//             `
//             productList.appendChild(recipeElement)

//         })

//     })

let productList = document.querySelector('#productsList')

fetch('https://dummyjson.com/product')
    .then(recuest => recuest.json())
    .then(response => {
        console.log(response)

        response.products.map(item => {
            let productCard = document.createElement('div')
            productCard.className = "w-[31%] bg-base-200 shadow-lg shadow-slate-600 rounded-lg"
            productCard.innerHTML = `
                <img class="w-full h-40 object-cover rounded-lg" src="${item.thumbnail}" alt=""> 
                <div class="card-body"> 
                    <h2 class="text-lg font-bold">${item.availabilityStatus}</h2> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span>brand:</span> 
                        <span>${item.brand}</span> 
                    </p>  
                    <p class="flex items-center justify-between text-xs"> 
                        <span>returnPolicy:</span> 
                        <span>${item.returnPolicy}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span>stock:</span> 
                        <span>${item.stock}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span>category:</span> 
                        <span>${item.category}</span> 
                    </p> 
                    <p class="flex items-center text-xs"> 
                        <span>rating:</span> 
                        <span>${generateStars(Math.ceil(item.rating))}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xl"> 
                        <span>price:</span> 
                        <span>${item.price}</span> 
                    </p> 
                    <button class="btn btn-primary btn-block">Add to cart</button> 
                 </div> 
                `
                  productList.appendChild(productCard)
  
          })
                    
     })
                    

     function generateStars(rating) { 
        let stars = ''; 
        for (let i = 0; i < 5; i++) { 
            if (i < rating) { 
                stars += '<svg class="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.824 11.97 1 7.5l6.19-.507L10 1l2.81 5.993 6.19.507-4.824 4.47 1.702 6.12L10 15z"/></svg>'; 
            } else { 
                stars += '<svg class="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.824 11.97 1 7.5l6.19-.507L10 1l2.81 5.993 6.19.507-4.824 4.47 1.702 6.12L10 15z"/></svg>'; 
            } 
        } 
        return stars; 
    }
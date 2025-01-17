const detailsElements = document.querySelectorAll('.product  details');

detailsElements.forEach(el => {
    el.addEventListener('click', () => {
        // أغلق جميع عناصر التفاصيل الأخرى>
        document.querySelectorAll('.product  details')
        .forEach(detail => {
            if (detail !== el) {
                detail.removeAttribute('open'); // إغلاق العناصر الأخرى
            }
        });

        // فتح أو غلق العنصر الحالي بناءً على حالته
        if (!el.hasAttribute('open')) {
            el.removeAttribute('open'); // إذا كان مفتوحاً، أغلقه
        } else {
            el.setAttribute('open', ''); // إذا كان مغلقاً، افتحه
        }
    });
});

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3aad3de882224936923e6b8168e80126"; // استبدلها بمفتاح API الخاص بك

// DOM Elements
const recipesContainer = document.getElementById('respie-container');
const filterButtons = document.querySelectorAll('.scroll-slider > button');

// Fetch recipes function
async function fetchRecipes(filter = "") {
    try {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY,
                diet: filter,
                number: 10 // عدد الوصفات المراد جلبها
            }
        });

        const recipes = response.data.results;
        displayRecipes(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

// Display recipes function
function displayRecipes(recipes) {
    recipesContainer.innerHTML = recipes.map(recipe => `
        <div class="col">
            <a href="html/product.html?id=${recipe.id}" target="_blank">
                <div class="card">
                    <div class="imgbx">
                        <img src="${recipe.image}" alt="${recipe.title}">
                    </div>
                    <div class="text">
                        <h3 dir="auto" class="title">${recipe.title}</h3>
                        <p dir="auto" class="desc">takes only ${recipe.id % 60 + 5} min</p>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

// Filter buttons click event
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Fetch recipes based on filter
        const filter = button.dataset.filter;
        fetchRecipes(filter);
    });
});

// Initial fetch
fetchRecipes("vegan");

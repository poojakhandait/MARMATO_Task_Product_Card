document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelector('.tab-link').click();

  // Fetch product data from the API
  fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(res => res.json())
      .then(data => {
         
          ProductCards(data.categories); // Pass the categories array
      })
      .catch(error => console.error('Error fetching the data:', error));
});


function ProductCards(categories) {
  
  categories.forEach(category => {
      
      category.category_products.forEach(product => {
          createCard(product, category.category_name);
      });
  });
}

// Function to create product cards dynamically
function createCard(product, categoryName) {
  const card = document.createElement('div');
  card.classList.add('card');
  // Calculate discount percentage
   const discountPercentage = calculateDiscount(product.compare_at_price, product.price);

  const badge = product.badge_text ? `<div class="badge">${product.badge_text}</div>` : '';
  const image = `<img src="${product.image}" alt="${product.title}">`;
  const title = `<h2>${product.title}</h2>`;
  const vendor = `<p>Vendor: ${product.vendor}</p>`;
  const price = `<p><span class="price">₹${product.compare_at_price}</span> <span class="discount">₹${product.price}</span></p>`;
  const discount = discountPercentage > 0 ? `<p class="discount-percentage">${discountPercentage}% OFF</p>` : '';
  const button = `<button class="btn">Add to Cart</button>`;
  
  card.innerHTML = `${badge}${image}${title}${vendor}${price}${discount}${button}`;

  
  document.getElementById(categoryName).appendChild(card);
}

// Function to calculate discount percentage
function calculateDiscount(comparePrice, salePrice) {
  const compareAtPrice = parseFloat(comparePrice);
  const currentPrice = parseFloat(salePrice);

  if (!compareAtPrice || !currentPrice || compareAtPrice <= currentPrice) {
    return 0; 
  }
  const discountPercentage = ((compareAtPrice - currentPrice) / compareAtPrice) * 100;
  return discountPercentage.toFixed(0); 
}


function openTab(evt, tabName) {
  
  const tabContent = document.querySelectorAll('.tab-content');
  tabContent.forEach(content => {
      content.style.display = 'none';
  });

  // Get all elements with class "tab-link" and remove the class "active"
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
      link.classList.remove('active');
  });

  // Show the current tab, and add an "active" class to the clicked tab button
  document.getElementById(tabName).style.display = 'flex';
  evt.currentTarget.classList.add('active');
}

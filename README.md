<h1>Product Category Tabs</h1>
<p>This project showcases an interactive product category tab layout with dynamically loaded product cards for Men, Women, and Kids categories. The product data is fetched from an external API and displayed in a responsive, user-friendly interface.</p>

<h2>Features</h2>
<h3>Tab Navigation:</h3> <p>Users can switch between the Men, Women, and Kids categories by clicking on the respective tabs.</p>
<h3>Dynamic Product Cards:</h3> <p>Each category displays products fetched from an API. The cards include:</p>
<ul>
 <li>Product Image</li>
<li>Product Title</li>
<li>Vendor Name</li>
<li>Price (Original and Discounted)</li>
<li>Badge (Dynamic if available from the API response)</li>
<li>Add to Cart Button</li>
</ul>
<h3>Responsive Design:</h3><p>The layout is responsive and works across different devices, including mobile, tablet, and desktop screens.</p>
<h3>No External Frameworks:</h3> The project is built using plain HTML, CSS, and JavaScript without any external frameworks like React, Bootstrap, or jQuery.</p>
<h2>Project Structure</h2>
<ul>
  <li>index.html: Contains the basic structure of the page with category tabs and script inclusion.</li>
  <li>style.css: Contains all the styling for the product cards, tabs, and layout.</li>
  <li>script.js: Fetches the product data from the API and dynamically creates the product cards for each category.</li>
</ul>

<h2>API Used</h2>
<p>The product data is fetched from the following API:</p>
<p>https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json</p>
<p>The API returns the following data for each product:</p>

<ul>
  <li>image: URL of the product image.</li>
  <li>title: Name of the product.</li>
  <li>price: Discounted price.</li>
  <li>compare_at_price: Original price.</li>
  <li>badge_text: Optional badge text, if available.</li>
</ul>

<h2>Instructions</h2>
<h3>1. Tab Switching:</h3>
<ul>
  <li>Click on the Men, Women, or Kids tab to view products under that category.</li>
  <li>The products are dynamically loaded into the tab based on the selected category.</li>
  
</ul>

<h3>2. Product Card Details:</h3>
<ul>
  <li>The card shows the product image, title, vendor, price (with original and discounted price), and a badge (if available).</li>
  <li>Each card has an "Add to Cart" button (functionality can be extended).</li>
</ul>
<h2>How to Run the Project</h2>
<ul>
 <li>Download or clone this repository.</li>
<li>Open index.html in any modern browser.</li>
<li>The page will automatically load products from the API and display them under the respective category.</li>
</ul>





    // Mock data for restaurants and food items
    const restaurants = [
      {
        id: 1,
        name: "Spice Route",
        cuisine: "North Indian, Mughlai",
        rating: 4.5,
        deliveryTime: "25-35 min",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e36002cd-876b-405f-93eb-516814ea8112.png",
        alt: "Spice Route restaurant interior with traditional Indian decor and warm lighting"
      },
      {
        id: 2,
        name: "Kebab Junction",
        cuisine: "Mughlai, BBQ",
        rating: 4.7,
        deliveryTime: "20-30 min",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/939b23a3-7c61-4275-9654-6b621d138bdf.png",
        alt: "Sizzling kebabs and naan bread on a plate at Kebab Junction"
      },
      {
        id: 3,
        name: "Dosa Plaza",
        cuisine: "South Indian",
        rating: 4.3,
        deliveryTime: "15-25 min",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b133e89-dc47-4b2f-b3f2-b3a789eed3df.png",
        alt: "Variety of crispy dosas with chutneys at Dosa Plaza"
      }
    ];

    const foodItems = [
      {
        id: 1,
        name: "Butter Chicken",
        restaurant: "Spice Route",
        price: 299,
        rating: 4.7,
        deliveryTime: "30 min",
        description: "Tender chicken pieces cooked in a rich, creamy tomato-based sauce with butter and aromatic spices.",
        image: "image/image7.png",
        alt: "Creamy butter chicken in a traditional brass bowl with garnishes"
      },
      {
        id: 2,
        name: "Chicken Biryani",
        restaurant: "Kebab Junction",
        price: 259,
        rating: 4.8,
        deliveryTime: "25 min",
        description: "Fragrant long-grain basmati rice cooked with succulent chicken pieces, saffron, and a blend of spices.",
        image: "image/image6.png",
        alt: "Steaming hot chicken biryani served in a handi with fresh coriander"
      },
      {
        id: 3,
        name: "Masala Dosa",
        restaurant: "Dosa Plaza",
        price: 149,
        rating: 4.5,
        deliveryTime: "20 min",
        description: "Crispy rice crepe stuffed with spiced potato filling, served with sambar and coconut chutney.",
        image: "image/image1.png",
        alt: "Golden brown masala dosa with chutneys and sambar in small bowls"
      },
      {
        id: 4,
        name: "Paneer Tikka",
        restaurant: "Spice Route",
        price: 229,
        rating: 4.6,
        deliveryTime: "25 min",
        description: "Juicy cubes of paneer marinated in spices and yogurt, grilled to perfection in a tandoor.",
        image: "image/image2.png",
        alt: "Colorful paneer tikka skewers with onions and peppers"
      },
      {
        id: 5,
        name: "Dal Makhani",
        restaurant: "Spicue Route",
        price: 199,
        rating: 4.4,
        deliveryTime: "30 min",
        description: "Creamy black lentils slow-cooked with butter and cream, flavored with traditional spices.",
        image: "image/image3.png",
        alt: "Rich dal makhani in a bowl with a dollop of butter on top"
      },
      {
        id: 6,
        name: "Rogan Josh",
        restaurant: "Kebab Junction",
        price: 349,
        rating: 4.7,
        deliveryTime: "30 min",
        description: "Aromatic lamb curry slow-cooked with yogurt, Kashmiri chilies and traditional spices.",
        image: "image/image4.png",
        alt: "Deep red Rogan Josh curry with tender pieces of lamb"
      },
      {
        id: 7,
        name: "Idli Sambar",
        restaurant: "Dosa Plaza",
        price: 99,
        rating: 4.3,
        deliveryTime: "15 min",
        description: "Soft steamed rice cakes served with flavorful lentil stew and coconut chutney.",
        image: "image/image5.png",
        alt: "Fluffy white idlis with sambar and chutney on a banana leaf"
      },
      {
        id: 8,
        name: "Gulab Jamun",
        restaurant: "Spice Route",
        price: 129,
        rating: 4.9,
        deliveryTime: "25 min",
        description: "Soft, melt-in-the-mouth milk solids dumplings soaked in rose and cardamom flavored sugar syrup.",
        image: "image/gulab.png",
        alt: "Golden brown gulab jamuns in syrup with crushed pistachios"
      }
    ];

    // DOM Elements
    const restaurantsList = document.getElementById('restaurants-list');
    const foodItemsContainer = document.getElementById('food-items');
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const deliveryFee = document.getElementById('delivery-fee');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const foodModal = document.getElementById('food-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const emptyCart = document.getElementById('empty-cart');

    // Shopping Cart
    let cart = [];

    // Display restaurants
    function displayRestaurants() {
      restaurantsList.innerHTML = '';
      restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        restaurantCard.innerHTML = `
          <img src="${restaurant.image}" alt="${restaurant.alt}" class="w-full h-48 object-cover aspect-square">
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-lg">${restaurant.name}</h3>
              <div class="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full flex items-center">
                <span>${restaurant.rating}</span>
                <i class="fas fa-star ml-1"></i>
              </div>
            </div>
            <p class="text-gray-600 mb-2">${restaurant.cuisine}</p>
            <p class="text-gray-500">${restaurant.deliveryTime}</p>
          </div>
        `;
        restaurantsList.appendChild(restaurantCard);
      });
    }

    // Display food items
    function displayFoodItems() {
      foodItemsContainer.innerHTML = '';
      foodItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'bg-white rounded-lg shadow overflow-hidden food-card transition duration-300 cursor-pointer';
        foodCard.innerHTML = `
          <img src="${food.image}" alt="${food.alt}" class="w-full food-card-image">
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold">${food.name}</h3>
              <span class="text-orange-600 font-semibold">₹${food.price}</span>
            </div>
            <p class="text-gray-500 text-sm mb-3">${food.restaurant}</p>
            <div class="flex items-center text-sm">
              <span class="text-yellow-400 mr-1">
                <i class="fas fa-star"></i>
              </span>
              <span class="text-gray-600 mr-2">${food.rating}</span>
              <span class="text-gray-400">${food.deliveryTime}</span>
            </div>
          </div>
        `;
        foodCard.addEventListener('click', () => openFoodModal(food));
        foodItemsContainer.appendChild(foodCard);
      });
    }

    // Open food modal
    function openFoodModal(food) {
      document.getElementById('modal-food-image').src = food.image;
      document.getElementById('modal-food-image').alt = food.alt;
      document.getElementById('modal-food-name').textContent = food.name;
      document.getElementById('modal-food-restaurant').textContent = food.restaurant;
      document.getElementById('modal-food-description').textContent = food.description;
      document.getElementById('modal-food-price').textContent = `₹${food.price}`;
      document.getElementById('food-qty').textContent = '1';
      
      foodModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    // Close food modal
    function closeFoodModal() {
      foodModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // Update cart count
    function updateCartCount() {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      cartCount.textContent = count;
    }

    // Update cart total
    function updateCartTotal() {
      const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      const fee = subtotal > 0 ? 40 : 0; // ₹40 delivery fee if there are items
      const total = subtotal + fee;
      
      cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
      deliveryFee.textContent = `₹${fee.toFixed(2)}`;
      cartTotal.textContent = `₹${total.toFixed(2)}`;
      
      checkoutBtn.disabled = cart.length === 0;
    }

    // Display cart items
    function displayCartItems() {
      if (cart.length === 0) {
        emptyCart.classList.remove('hidden');
        cartItems.innerHTML = '';
        return;
      }
      
      emptyCart.classList.add('hidden');
      cartItems.innerHTML = '';
      
      cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center justify-between py-3 border-b';
        cartItem.innerHTML = `
          <div class="flex items-center">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-full mr-3">
            <div>
              <h4 class="font-semibold">${item.name}</h4>
              <p class="text-gray-600 text-sm">${item.restaurant}</p>
              <div class="flex items-center mt-1">
                <button class="decrease-item text-gray-500 hover:text-orange-600 px-2" data-index="${index}">
                  <i class="fas fa-minus text-xs"></i>
                </button>
                <span class="mx-2">${item.quantity}</span>
                <button class="increase-item text-gray-500 hover:text-orange-600 px-2" data-index="${index}">
                  <i class="fas fa-plus text-xs"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="text-right">
            <p class="text-orange-600 font-semibold">₹${(item.price * item.quantity).toFixed(2)}</p>
            <button class="remove-item text-red-500 text-sm mt-1" data-index="${index}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
        cartItems.appendChild(cartItem);
      });
      
      // Add event listeners to cart item buttons
      document.querySelectorAll('.decrease-item').forEach(btn => {
        btn.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          decreaseQuantity(index);
        });
      });
      
      document.querySelectorAll('.increase-item').forEach(btn => {
        btn.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          increaseQuantity(index);
        });
      });
      
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          removeFromCart(index);
        });
      });
    }

    // Add to cart
    function addToCart(food) {
      const quantity = parseInt(document.getElementById('food-qty').textContent);
      const existingItem = cart.find(item => item.id === food.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({
          id: food.id,
          name: food.name,
          restaurant: food.restaurant,
          price: food.price,
          quantity: quantity,
          image: food.image
        });
      }
      
      updateCartCount();
      updateCartTotal();
      displayCartItems();
      closeFoodModal();
      
      // Show success message
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center';
      notification.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        Added to cart - ${quantity}x ${food.name}
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('opacity-0', 'translate-x-4', 'transition-all', 'duration-300');
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    }

    // Remove from cart
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartCount();
      updateCartTotal();
      displayCartItems();
    }

    // Increase quantity
    function increaseQuantity(index) {
      cart[index].quantity++;
      updateCartCount();
      updateCartTotal();
      displayCartItems();
    }

    // Decrease quantity
    function decreaseQuantity(index) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
        updateCartCount();
        updateCartTotal();
        displayCartItems();
      } else {
        removeFromCart(index);
      }
    }

    // Initialize app
    function init() {
      displayRestaurants();
      displayFoodItems();
      
      // Cart toggle
      cartBtn.addEventListener('click', () => {
        cartSidebar.classList.toggle('translate-x-full');
        document.body.style.overflow = 'hidden';
      });
      
      closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
      });
      
      // Food modal buttons
      closeModalBtn.addEventListener('click', closeFoodModal);
      
      document.getElementById('increase-qty').addEventListener('click', () => {
        const qtyElement = document.getElementById('food-qty');
        let qty = parseInt(qtyElement.textContent);
        qtyElement.textContent = qty + 1;
      });
      
      document.getElementById('decrease-qty').addEventListener('click', () => {
        const qtyElement = document.getElementById('food-qty');
        let qty = parseInt(qtyElement.textContent);
        if (qty > 1) {
          qtyElement.textContent = qty - 1;
        }
      });
      
      document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        const food = foodItems.find(item => 
          item.name === document.getElementById('modal-food-name').textContent
        );
        if (food) {
          addToCart(food);
        }
      });
      
      // Mobile menu toggle
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      
      // Close modal when clicking outside
      foodModal.addEventListener('click', (e) => {
        if (e.target === foodModal) {
          closeFoodModal();
        }
      });
      
      // Close cart when clicking outside
      cartSidebar.addEventListener('click', (e) => {
        if (e.target === cartSidebar) {
          cartSidebar.classList.add('translate-x-full');
          document.body.style.overflow = 'auto';
        }
      });
    }

    // Initialize the app when DOM is loaded
    document.addEventListener('DOMContentLoaded', init);


# Simple-Shopping-Cart
A dynamic e-commerce web application where users can view products, search for specific items, add them to a cart, and manage their shopping experience. The application also features user authentication using Firebase for registration and login.

## Features

### Product Management
- Product List: Displays all products in a responsive grid layout.
- Search: Users can search for products using a search bar.
- Add to Cart: Users can add items to the cart.
- Cart Management:
     - View cart items with quantity, price, and subtotal.
     - Update item quantities dynamically.
     - Remove items from the cart.
     - Persistent cart state using localStorage.
       
### User Authentication
- Register: Create an account using an email and password via Firebase Authentication.
- Login: Login securely using Firebase Authentication.
- Logout: Logout functionality to end the session.

## Technologies Used

### Frontend
- React.js: Component-based architecture for building the user interface.
- Material-UI: For a responsive and modern design.
- React Context API: State management for cart functionality.

### Backend/Authentication
- Firebase Authentication: For secure user registration and login.
- Firebase Firestore: To store user-specific data (optional if using additional features)
 
## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**

### Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/sean-udayantha/Simple-Shopping-Cart.git
cd Simple-Shopping-Cart
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start the Development Server
```bash
npm start
```

export const restaurants = [
  {
    id: 1,
    name: "Burger Zone",
    cuisine: "Fast Food",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryCharge: 40,
    categories: [
      {
        id: "cat1",
        name: "Burgers",
        items: [
          {
            id: 101,
            name: "Veg Burger",
            price: 99,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: true,
            description: "Classic veg burger with fresh veggies"
          },
          {
            id: 102,
            name: "Cheese Burger",
            price: 149,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
            isVeg: true,
            description: "Loaded with melted cheese and crispy patty"
          },
          {
            id: 103,
            name: "Paneer Burger",
            price: 179,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1606755962773-d324e9a13086",
            isVeg: true,
            description: "Grilled paneer patty with spicy sauce"
          },
          {
            id: 104,
            name: "Double Patty Burger",
            price: 199,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05",
            isVeg: true,
            description: "Double layer burger for extra hunger"
          }
        ]
      },
      {
        id: "cat2",
        name: "Fries",
        items: [
          {
            id: 105,
            name: "Salted Fries",
            price: 79,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
            isVeg: true,
            description: "Crispy golden salted fries"
          },
          {
            id: 106,
            name: "Peri Peri Fries",
            price: 99,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
            isVeg: true,
            description: "Spicy peri peri flavored fries"
          },
          {
            id: 107,
            name: "Cheese Fries",
            price: 119,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1625944525903-bf5e3f93a9b3",
            isVeg: true,
            description: "Fries loaded with creamy cheese"
          }
        ]
      },
      {
        id: "cat3",
        name: "Drinks",
        items: [
          {
            id: 108,
            name: "Coke",
            price: 49,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13",
            isVeg: true,
            description: "Chilled refreshing Coca-Cola"
          },
          {
            id: 109,
            name: "Pepsi",
            price: 49,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
            isVeg: true,
            description: "Cold and refreshing Pepsi"
          },
          {
            id: 110,
            name: "Sprite",
            price: 49,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca",
            isVeg: true,
            description: "Lemon flavored chilled drink"
          }
        ]
      },
      {
        id: "cat4",
        name: "Shakes",
        items: [
          {
            id: 111,
            name: "Chocolate Shake",
            price: 129,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
            isVeg: true,
            description: "Rich chocolate creamy shake"
          },
          {
            id: 112,
            name: "Vanilla Shake",
            price: 119,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1577801597916-0b71eec1e9b9",
            isVeg: true,
            description: "Smooth vanilla flavored shake"
          },
          {
            id: 113,
            name: "Strawberry Shake",
            price: 139,
            restaurantId: 1,
            image: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb",
            isVeg: true,
            description: "Fresh strawberry milkshake"
          }
        ]
      }
    ]
  }, 
  {
  id: 2,
  name: "Pizza Hub",
  cuisine: "Italian",
  image: "https://images.unsplash.com/photo-1601924638867-3ec9f5b5b2c4",
  rating: 4.5,
  deliveryTime: "30-40 min",
  deliveryCharge: 50,
  categories: [
    {
      id: "cat5",
      name: "Pizzas",
      items: [
        {
          id: 201,
          name: "Margherita Pizza",
          price: 199,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
          isVeg: true,
          description: "Classic cheese pizza with fresh basil"
        },
        {
          id: 202,
          name: "Farmhouse Pizza",
          price: 299,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1594007654729-407eedc4fe24",
          isVeg: true,
          description: "Loaded with fresh veggies"
        },
        {
          id: 203,
          name: "Cheese Burst Pizza",
          price: 349,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1548365328-9f547fb0953c",
          isVeg: true,
          description: "Extra cheese filled pizza"
        }
      ]
    },
    {
      id: "cat6",
      name: "Sides",
      items: [
        {
          id: 204,
          name: "Garlic Bread",
          price: 129,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
          isVeg: true,
          description: "Crispy garlic bread"
        },
        {
          id: 205,
          name: "Cheese Garlic Bread",
          price: 159,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1604908177522-4721d7c9b6c1",
          isVeg: true,
          description: "Garlic bread loaded with cheese"
        }
      ]
    },
    {
      id: "cat7",
      name: "Drinks",
      items: [
        {
          id: 206,
          name: "Coke",
          price: 49,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13",
          isVeg: true,
          description: "Chilled soft drink"
        },
        {
          id: 207,
          name: "Cold Coffee",
          price: 99,
          restaurantId: 2,
          image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
          isVeg: true,
          description: "Refreshing cold coffee"
        }
      ]
    }
  ]
  },
  {
  id: 3,
  name: "Indian Spice",
  cuisine: "Indian",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  rating: 4.6,
  deliveryTime: "35-45 min",
  deliveryCharge: 60,
  categories: [
    {
      id: "cat8",
      name: "Main Course",
      items: [
        {
          id: 301,
          name: "Paneer Butter Masala",
          price: 249,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
          isVeg: true,
          description: "Creamy paneer curry"
        },
        {
          id: 302,
          name: "Dal Tadka",
          price: 149,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
          isVeg: true,
          description: "Spicy yellow dal"
        },
        {
          id: 303,
          name: "Mix Veg",
          price: 199,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1604908176997-4317f2f8dfc6",
          isVeg: true,
          description: "Mixed vegetable curry"
        }
      ]
    },
    {
      id: "cat9",
      name: "Breads",
      items: [
        {
          id: 304,
          name: "Butter Naan",
          price: 49,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
          isVeg: true,
          description: "Soft butter naan"
        },
        {
          id: 305,
          name: "Tandoori Roti",
          price: 39,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1626074353765-517a681e40be",
          isVeg: true,
          description: "Traditional roti"
        }
      ]
    },
    {
      id: "cat10",
      name: "Rice",
      items: [
        {
          id: 306,
          name: "Jeera Rice",
          price: 129,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1604909052743-94e838986d24",
          isVeg: true,
          description: "Jeera flavored rice"
        },
        {
          id: 307,
          name: "Veg Biryani",
          price: 199,
          restaurantId: 3,
          image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
          isVeg: true,
          description: "Aromatic veg biryani"
        }
      ]
    }
  ]
  }

];

export const users = [
  { id: 1, email: "arnav@gmail.com", password: "1234" },
  { id: 2, email: "user1@gmail.com", password: "1111" },
  { id: 3, email: "user2@gmail.com", password: "2222" },
  { id: 4, email: "user3@gmail.com", password: "3333" },
  { id: 5, email: "user4@gmail.com", password: "4444" }
];
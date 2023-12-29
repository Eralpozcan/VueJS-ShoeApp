export const ProductService = {
  getProductsData() {
      return [
        {
          id:1,
          name: "Women Running Shoes",
          lname:"Nike Epic React Flyknit Pearl Pink",
          price:100,
          description:"Nike React Infinity Run Flyknit 2 ile koşmayı asla bırakma.",
          stars:3.5,
          quantity:1,
          availableColor:["pink","mint","blue"],
          images:
            {
              pink:require(`@/assets/images/pink.png`),
              mint:require(`@/assets/images/mint.png`),
              blue:require(`@/assets/images/blue.png`),
            },
          sizes:[5,6,7,8,9,10],  
        },
        {
          id:2,
          name: "Men Running Shoes",
          lname:"Nike Epic React Flyknit Ocean Blue",
          price:100,
          description:"Nike React Infinity Run Flyknit 2 ile koşmayı asla bırakma.",
          stars:4.5,
          quantity:1,
          availableColor:["pink","mint","blue"],
          images:
            {
              pink:require(`@/assets/images/pink.png`),
              mint:require(`@/assets/images/mint.png`),
              blue:require(`@/assets/images/blue.png`),
            },
          sizes:[5,6,7,8,9,10],  
        },
        {
          id:3,
          name: "Child Running Shoes",
          lname:"Nike Epic React Flyknit Night Dark",
          price:100,
          description:"Nike React Infinity Run Flyknit 2 ile koşmayı asla bırakma.",
          stars:2.5,
          quantity:1,
          availableColor:["pink","mint","blue"],
          images:
            {
              pink:require(`@/assets/images/pink.png`),
              mint:require(`@/assets/images/mint.png`),
              blue:require(`@/assets/images/blue.png`),
            },
          sizes:[5,6,7,8,9,10],                      
        },
        {
          id:4,
          name: "Child Sports Shoes",
          lname:"Nike Epic React Flyknit Smoke Blue",
          price:100,
          description:"Nike React Infinity Run Flyknit 2 ile koşmayı asla bırakma.",
          stars:3.1,
          quantity:1,
          availableColor:["pink","mint","blue"],
          images:
            {
              pink:require(`@/assets/images/pink.png`),
              mint:require(`@/assets/images/mint.png`),
              blue:require(`@/assets/images/blue.png`),
            },
          sizes:[5,6,7,8,9,10],  
        },
      ];
  },

  getProductsMini() {
      return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
      return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
      return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
      return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
      return Promise.resolve(this.getProductsWithOrdersData());
  }
};


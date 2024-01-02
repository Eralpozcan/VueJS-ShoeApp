export const ProductService = {
  getProductsData() {
      return [
        {
          id: "fae379ae-fd84-40b7-853a-29815070e369",
          code: "NIK-001",
          name: {
            en: "Nike Epic React Flyknit",
            tr: "Nike Epic React Flyknit"
          },
          description: {
            en: "Nike React Infinity Run Flyknit 2 with you never stop running.",
            tr: "Nike React Infinity Run Flyknit 2 ile koşmayı asla bırakma."
          },
          images:{
            pink:'/assets/images/pink.png',
            mint:'/assets/images/mint.png',
            blue:'/assets/images/blue.png',
          },
          availableColor:["pink","mint","blue"],
          availableSize:[5,6,7,8,9,10],
          category: 'Shoes',
          gender: 'Unisex',
          quantity: 15,
          inventoryStatus: 'INSTOCK',
          price: 100,
          rating: 4.5,
        },
        {
          id: "c6b51107-7a58-4764-a037-37bb1eafc750",
          code: "NIK-002",
          name: {
            en: "Nike Epic React Flyknit One",
            tr: "Nike Epic React Flyknit One"
          },
          description: {
            en: "Nike React Infinity Run Flyknit One with you never stop running.",
            tr: "Nike React Infinity Run Flyknit One ile koşmayı asla bırakma."
          },
          images:{
            pink:'/assets/images/pink.png',
            mint:'/assets/images/mint.png',
            blue:'/assets/images/blue.png',
          },
          availableColor:["pink","mint","blue"],
          availableSize:[5,7,9,10],
          category: 'Shoes',
          gender: 'Men',
          quantity: 3,
          inventoryStatus: 'LOWSTOCK',
          price: 90,
          rating: 3,
        },
        {
          id: "c6b51107-7a58-4764-a037-37bb1eafc750",
          code: "NIK-003",
          name: {
            en: "Nike Child React Flyknit Smoke",
            tr: "Nike Child React Flyknit Smoke"
          },
          description: {
            en: "Nike React Run Flyknit Smoke with you never stop running.",
            tr: "Nike React Run Flyknit Smoke ile koşmayı asla bırakma."
          },
          images:{
            pink:'/assets/images/pink.png',
            mint:'/assets/images/mint.png',
            blue:'/assets/images/blue.png',
          },
          availableColor:["pink","mint","blue"],
          availableSize:[5,6,7],
          category: 'Shoes',
          gender: 'Women',
          quantity: 3,
          inventoryStatus: 'OUTOFSTOCK',
          price: 175,
          rating: 3,
        },
        {
          id: "e54a8a20-842a-4c58-9b58-87f99c019a93",
          code: "ADI-001",
          name: {
            en: "Adidas Ultraboost",
            tr: "Adidas Ultraboost"
          },
          description: {
            en: "Adidas Ultraboost with responsive cushioning for endless energy.",
            tr: "Adidas Ultraboost, bitmeyen enerji için tepki veren yastıklama ile."
          },
          images:{
            black: '/assets/images/black.png',
            white: '/assets/images/white.png',
            red: '/assets/images/red.png',
          },
          availableColor: ["black", "white", "red"],
          availableSize: [6, 7, 8, 9, 10, 11],
          category: 'Shoes',
          gender: 'Unisex',
          quantity: 20,
          inventoryStatus: 'INSTOCK',
          price: 120,
          rating: 4.8,
        },
        {
          id: "93f8b874-eb8f-4ef7-b6e0-4180b512d5f7",
          code: "PUM-001",
          name: {
            en: "Puma Ignite XT",
            tr: "Puma Ignite XT"
          },
          description: {
            en: "Puma Ignite XT designed for high-intensity workouts and comfort.",
            tr: "Yüksek yoğunluklu antrenmanlar ve konfor için tasarlanmış Puma Ignite XT."
          },
          images:{
            gray: '/assets/images/gray.png',
            orange: '/assets/images/orange.png',
            green: '/assets/images/green.png',
          },
          availableColor: ["gray", "orange", "green"],
          availableSize: [7, 8, 9, 10, 11],
          category: 'Shoes',
          gender: 'Men',
          quantity: 12,
          inventoryStatus: 'LOWSTOCK',
          price: 80,
          rating: 4.2,
        },
        {
          id: "a33f4a8e-73e3-45a0-9ef0-9d4bdc1a62b2",
          code: "NB-001",
          name: {
            en: "New Balance Fresh Foam",
            tr: "New Balance Fresh Foam"
          },
          description: {
            en: "New Balance Fresh Foam provides a plush and natural ride.",
            tr: "New Balance Fresh Foam, peluş ve doğal bir sürüş sunar."
          },
          images:{
            purple: '/assets/images/purple.png',
            teal: '/assets/images/teal.png',
            black: '/assets/images/black.png',
          },
          availableColor: ["purple", "teal", "black"],
          availableSize: [6, 7, 8, 9],
          category: 'Shoes',
          gender: 'Women',
          quantity: 8,
          inventoryStatus: 'INSTOCK',
          price: 95,
          rating: 4.5,
        },
        {
          id: "48dc33c5-39eb-4653-aa2d-6f057a87b65b",
          code: "REE-001",
          name: {
            en: "Reebok Nano X",
            tr: "Reebok Nano X"
          },
          description: {
            en: "Reebok Nano X designed for cross-training with stability and durability.",
            tr: "Stabilite ve dayanıklılık için tasarlanmış Reebok Nano X çapraz antrenmanlar için."
          },
          images:{
            blue: '/assets/images/blue.png',
            yellow: '/assets/images/yellow.png',
            black: '/assets/images/black.png',
          },
          availableColor: ["blue", "yellow", "black"],
          availableSize: [7, 8, 9, 10],
          category: 'Shoes',
          gender: 'Unisex',
          quantity: 18,
          inventoryStatus: 'INSTOCK',
          price: 110,
          rating: 4.4,
        },
        {
          id: "c81cc1e3-8109-4ff9-b0e4-392ac1c927f2",
          code: "VAN-001",
          name: {
            en: "Vans Old Skool",
            tr: "Vans Old Skool"
          },
          description: {
            en: "Vans Old Skool, classic skate shoes with timeless style.",
            tr: "Zamanın ötesinde bir stile sahip olan klasik kaykay ayakkabısı Vans Old Skool."
          },
          images:{
            blackWhite: '/assets/images/black-white.png',
            redWhite: '/assets/images/red-white.png',
            blueWhite: '/assets/images/blue-white.png',
          },
          availableColor: ["blackWhite", "redWhite", "blueWhite"],
          availableSize: [6, 7, 8, 9, 10],
          category: 'Shoes',
          gender: 'Unisex',
          quantity: 14,
          inventoryStatus: 'INSTOCK',
          price: 75,
          rating: 4.7,
        },
        {
          id: "e26c3f4a-c4c5-4e16-951f-87433e70cb94",
          code: "CON-001",
          name: {
            en: "Converse Chuck Taylor All Star",
            tr: "Converse Chuck Taylor All Star"
          },
          description: {
            en: "Converse Chuck Taylor All Star, the iconic sneaker for everyday style.",
            tr: "Her gün stil için ikonik spor ayakkabı Converse Chuck Taylor All Star."
          },
          images:{
            blackCanvas: '/assets/images/black-canvas.png',
            whiteCanvas: '/assets/images/white-canvas.png',
            redCanvas: '/assets/images/red-canvas.png',
          },
          availableColor: ["blackCanvas", "whiteCanvas", "redCanvas"],
          availableSize: [5, 6, 8, 9, 10],
          category: 'Shoes',
          gender: 'Unisex',
          quantity: 10,
          inventoryStatus: 'LOWSTOCK',
          price: 65,
          rating: 4.6,
        },
        {
          id: "d3843a59-656e-4d67-8ff5-c42416e8e6d9",
          code: "ASICS-001",
          name: {
            en: "ASICS Gel-Kayano",
            tr: "ASICS Gel-Kayano"
          },
          description: {
            en: "ASICS Gel-Kayano offers stability and comfort for long-distance running.",
            tr: "ASICS Gel-Kayano, uzun mesafe koşuları için stabilite ve konfor sunar."
          },
          images:{
            blackSilver: '/assets/images/black-silver.png',
            blueWhite: '/assets/images/blue-white.png',
            redBlack: '/assets/images/red-black.png',
          },
          availableColor: ["blackSilver", "blueWhite", "redBlack"],
          availableSize: [7, 8, 9, 10, 11],
          category: 'Shoes',
          gender: 'Men',
          quantity: 16,
          inventoryStatus: 'INSTOCK',
          price: 130,
          rating: 4.9,
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
    return this.getProductsData()
  },

  getProductsWithGender(gender){
    const genderData = this.getProductsData().filter((product) => product.gender === 'Unisex' || product.gender === gender);
    return genderData
  }
};


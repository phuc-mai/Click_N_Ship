const mongoose = require('mongoose');

module.exports = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Brim Sun Hat',
    description: 'Summer hats are made of 90% breathable Paper Straw and 10% Polyester which makes it lightweight and flexible; Tight braiding ensures durability; Besides, we improved the package to ensure the brim warping and misshapen problem will never bother you.',
    img: 'hat.jpg',
    categories: ['accessories'],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Red', 'Yellow', 'Green'],
    price: 19.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Sleeveless Dress with Pockets',
    description: 'This Summer Dresses for Women is 90% Polyester plus 10% Spandex. The Fabric is Lightweight, Loose, Stretchy and Soft. It is comfy against the skin.',
    img: 'dress_1.jpg',
    categories: ['dress', 'clothes'],
    sizes: ['Medium', 'Large'],
    colors: ['Black', 'Blue', 'Yellow', 'Green'],
    price: 29.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Long Sleeve Blazer',
    description: 'Cotton plus Polyester with soft and light fabric, long sleeve, loose fit, solid color, lightweight, open front for Casual Work Office Blazer.',
    img: 'blazer.jpg',
    categories: ['top', 'clothes'],
    sizes: ['Medium', 'Large', 'X-Large'],
    colors: ['White', 'Green', 'Blue', 'Black'],
    price: 69.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Chunky Pump Shoes',
    description: '100% Leather. Thermoplastic Elastomers sole. Dorsay Pointed Toe. Heel measures approximately 2.25. Ankle Strap Buckle closure. TPR rubber sole.',
    img: 'low_heels.jpg',
    categories: ['accessories'],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Red', 'Black'],
    price: 49.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Trousers Long Straight Suit Pant',
    description: '95% Polyester, 5% Spandex. Back elastic waist, high-waisted wide leg style, pleated front, loose fit, breathable and soft fabric, zipper closure, two side pockets.',
    img: 'pant.jpg',
    categories: ['bottom', 'clothes'],
    sizes: ['Small', 'Medium'],
    colors: ['White', 'Red'],
    price: 24.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Skinny Jean',
    description: '78% Cotton, 19% Polyester, 3% Elastane. Classic denim and five pocket styling highlight these jeans with a bit of stretch for added comfort.',
    img: 'jean.jpg',
    categories: ['bottom', 'clothes'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    colors: ['Blue', 'Black'],
    price: 34.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Waterproof Crossbody Leather Purse',
    description: 'Our purses are made of premium lychee pattern PU leather material without odor, to provide durability, softness and longevity. The leather purses for women with amazing touching are exquisite and flat in workmanship. The smooth metal zippers reinforced by stitching that is designed for long-term using. Our crossbody purse for women are also waterproof which can provide more protection for your inner stuff in rainy days.',
    img: 'purse.jpg',
    categories: ['accessories'],
    sizes: ['Medium', 'Large'],
    colors: ['White', 'Black'],
    price: 54.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Tops Sexy V Neck T-Shirt',
    description: 'Sexy V Neck T-shirts with Tulip Sleeves. Basic short sleeve tops, solid color, plain, trendy and elegant. Super soft fabric, stretchy, lightweight and breathable. Not see-through.',
    img: 'tshirt.jpg',
    categories: ['top', 'clothes'],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Red', 'White', 'Blue'],
    price: 24.99,
    inStock: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: 'Vintage Dress with Belt',
    description: '100% Cotton, Sleeveless, Boatneck, concealed zipper at back. Cotton, High waist, big swing, comes with removeable belt. Perfect for daily casual,cocktail party,ball,banquet,wedding or other special occation.',
    img: 'dress_2.jpg',
    categories: ['dress', 'clothes'],
    sizes: ['Small','Medium', 'Large', 'X-Large'],
    colors: ['Black', 'Blue', 'Green', 'Red'],
    price: 39.99,
    inStock: true,
  },
];

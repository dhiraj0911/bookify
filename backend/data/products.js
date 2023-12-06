const products = [
  {
    name: "Nike Air Max 270",
    imageUrl:
      "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Nike Air Max 270 is inspired by two icons of big Air: the Air Max 180 and Air Max 93. It features Nike’s biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    price: 150,
    countInStock: 20,
  },
  {
    name: "Adidas Ultraboost",
    imageUrl:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Adidas Ultraboost shoes are designed for ultimate comfort and energy return. They feature a seamless knit upper and a soft, cushioned sole, making them perfect for long runs or everyday wear.",
    price: 180,
    countInStock: 15,
  },
  {
    name: "Nike Air Jordan 1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-5b0e1497f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Air Jordan 1 is the original outlaw sneaker. Banned by the NBA in 1984, Michael Jordan was charged $5,000 per game for wearing them. It features a timeless design and is available in multiple colorways.",
    price: 160,
    countInStock: 12,
  },
  {
    name: "Adidas Yeezy Boost 350",
    imageUrl:
      "https://images.unsplash.com/photo-1597008353169-7b1e4bca5f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Yeezy Boost 350 from Adidas is a collaboration with Kanye West. These sneakers feature a Primeknit upper and full-length Boost technology, which is the industry standard for comfort.",
    price: 220,
    countInStock: 8,
  },
  {
    name: "Puma Suede Classic",
    imageUrl:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Puma Suede Classic remains the most iconic and recognizable model from the brand. Featuring a suede upper, it has been a street staple since the '60s.",
    price: 65,
    countInStock: 20,
  },
  {
    name: "Nike SB Dunk",
    imageUrl:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MXwxMjA3fDB8MHxwaGootby1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Nike SB Dunk blends technology with style. Originally a basketball shoe, the SB Dunk has been a favorite among skateboarders due to its low profile and excellent grip.",
    price: 100,
    countInStock: 15,
  },
  {
    name: "Adidas Stan Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixid=MXwxMjA3fDB8MHxwaGootby1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Originally created for tennis legend Stan Smith, these shoes have dominated the test of time. Simple yet sleek, they're suitable for casual wear.",
    price: 75,
    countInStock: 18,
  },
  {
    name: "Puma Future Rider",
    imageUrl:
      "https://images.unsplash.com/photo-1584735176189-c4f9b2f7c0ba?ixid=MXwxMjA3fDB8MHxwaGootby1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Future Rider from Puma is a modern twist on a classic. It's lightweight and cushioned, making it perfect for both running and casual wear.",
    price: 90,
    countInStock: 10,
  },
  {
    name: "Nike React Element 55",
    imageUrl:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Nike React Element 55 offers a soft, springy sensation for unparalleled comfort. Its design is inspired by classic running shoes but reimagined for everyday wear.",
    price: 130,
    countInStock: 14,
  },
  {
    name: "Adidas NMD R1",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-5b0e1497f6d5?ixid=MXwxMjA3fDB8MHxwaGootby1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The NMD R1 is a unique blend of contemporary style and Adidas heritage. It features a comfortable, sock-like fit and responsive cushioning for all-day wear.",
    price: 140,
    countInStock: 9,
  },
  {
    name: "Puma RS-X3",
    imageUrl:
      "https://images.unsplash.com/photo-1584735176189-c4f9b2f7c0ba?ixid=MXwxMjA3fDB8MHxwaGootby1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The RS-X3 takes the signature bulky RS silhouette and dials it up to the third power. With amplified detailing on the upper, stronger material mixes, and bold color combinations, this shoe is ready to step into a new dimension.",
    price: 110,
    countInStock: 11,
  },
  {
    name: "Nike Air Force 1",
    imageUrl:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Nike Air Force 1 has been an icon of the street since 1982. This classic sneaker is known for its signature style with comfortable cushioning and a timeless design.",
    price: 90,
    countInStock: 16,
  }
];

module.exports = products;

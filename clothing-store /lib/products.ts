export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  description: string
  detailedDescription: string
  category: string
  sizes: string[]
  colors: string[]
  materials: string[]
  care: string[]
  sustainability: string[]
  designer: string
  collection: string
  rating: number
  reviewCount: number
  inStock: boolean
  isNew: boolean
  isBestseller: boolean
  shipping: {
    free: boolean
    days: string
  }
  returns: {
    days: number
    free: boolean
  }
  styling: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Essential Cashmere Sweater",
    price: 295.0,
    originalPrice: 350.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Back+View",
      "/placeholder.svg?height=800&width=600&text=Detail+View",
    ],
    description:
      "Luxuriously soft cashmere sweater with a timeless silhouette. Crafted from the finest Mongolian cashmere.",
    detailedDescription:
      "This essential cashmere sweater represents the perfect balance of luxury and versatility. Made from Grade A Mongolian cashmere, it features a classic crew neck design with subtle ribbed detailing at the cuffs and hem. The relaxed fit makes it perfect for layering or wearing alone.",
    category: "knitwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Charcoal", "Navy", "Camel"],
    materials: ["100% Grade A Mongolian Cashmere"],
    care: ["Dry clean only", "Store folded", "Use cashmere comb to maintain texture"],
    sustainability: ["Ethically sourced cashmere", "Carbon-neutral shipping", "Recyclable packaging"],
    designer: "Minimalist Studio",
    collection: "Autumn Essentials 2024",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    isNew: false,
    isBestseller: true,
    shipping: { free: true, days: "2-3" },
    returns: { days: 30, free: true },
    styling: ["Layer over silk camisole", "Pair with tailored trousers", "Perfect with midi skirts"],
  },
  {
    id: "2",
    name: "Architectural Wool Coat",
    price: 890.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Side+View",
      "/placeholder.svg?height=800&width=600&text=Interior+View",
    ],
    description:
      "Statement wool coat with clean lines and architectural silhouette. A modern interpretation of classic tailoring.",
    detailedDescription:
      "This architectural wool coat is a masterpiece of modern tailoring. Cut from premium Italian wool, it features a structured silhouette with clean, geometric lines. The minimalist design is elevated by subtle details like hidden snap closures and a silk-lined interior.",
    category: "outerwear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Camel", "Grey Melange"],
    materials: ["90% Virgin Wool", "10% Cashmere", "Silk lining"],
    care: ["Professional dry clean", "Steam to remove wrinkles", "Store on padded hanger"],
    sustainability: ["Responsible wool sourcing", "Made in Italy", "Lifetime repair service"],
    designer: "Nordic Atelier",
    collection: "Winter Architecture 2024",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    isNew: true,
    isBestseller: false,
    shipping: { free: true, days: "3-5" },
    returns: { days: 14, free: false },
    styling: ["Wear over knits and dresses", "Perfect for business meetings", "Elevates any outfit instantly"],
  },
  {
    id: "3",
    name: "Silk Slip Dress",
    price: 425.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Back+Detail",
      "/placeholder.svg?height=800&width=600&text=Fabric+Close-up",
    ],
    description:
      "Effortless silk slip dress with bias cut and delicate spaghetti straps. The epitome of understated elegance.",
    detailedDescription:
      "This silk slip dress embodies effortless sophistication. Cut on the bias from 100% mulberry silk, it drapes beautifully on the body. The minimalist design features adjustable spaghetti straps and a midi length that flatters every figure.",
    category: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Sage", "Terracotta", "Midnight"],
    materials: ["100% Mulberry Silk", "Mother-of-pearl buttons"],
    care: ["Hand wash in cold water", "Hang dry in shade", "Iron on low heat"],
    sustainability: ["OEKO-TEX certified silk", "Natural dyes", "Biodegradable packaging"],
    designer: "Atelier Moderne",
    collection: "Fluid Forms 2024",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    isNew: false,
    isBestseller: true,
    shipping: { free: true, days: "2-4" },
    returns: { days: 30, free: true },
    styling: ["Layer under blazers", "Perfect for date nights", "Add a belt for definition"],
  },
  {
    id: "4",
    name: "Wide-Leg Linen Trousers",
    price: 285.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Side+Profile",
      "/placeholder.svg?height=800&width=600&text=Waistband+Detail",
    ],
    description:
      "Relaxed wide-leg trousers in premium European linen. Designed for comfort without compromising style.",
    detailedDescription:
      "These wide-leg linen trousers offer the perfect blend of comfort and sophistication. Made from premium European linen, they feature a high-waisted silhouette with a relaxed fit through the leg. The clean lines and minimal detailing make them endlessly versatile.",
    category: "trousers",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Stone", "Olive", "Navy"],
    materials: ["100% European Linen", "Corozo buttons"],
    care: ["Machine wash cold", "Tumble dry low", "Iron while damp for best results"],
    sustainability: ["GOTS certified linen", "Water-efficient production", "Compostable buttons"],
    designer: "Conscious Collective",
    collection: "Summer Ease 2024",
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    isNew: false,
    isBestseller: false,
    shipping: { free: true, days: "2-3" },
    returns: { days: 30, free: true },
    styling: ["Pair with fitted tops", "Great with sandals or sneakers", "Perfect for vacation"],
  },
  {
    id: "5",
    name: "Merino Wool Turtleneck",
    price: 195.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Texture+Detail",
      "/placeholder.svg?height=800&width=600&text=Fit+View",
    ],
    description: "Ultra-fine merino wool turtleneck with a second-skin fit. The perfect layering essential.",
    detailedDescription:
      "This ultra-fine merino wool turtleneck is a wardrobe essential. Knitted from 18.5-micron merino wool, it offers incredible softness and temperature regulation. The slim fit and high neck make it perfect for layering under blazers or wearing alone.",
    category: "knitwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Grey", "Burgundy", "Forest"],
    materials: ["100% Extra Fine Merino Wool (18.5 micron)"],
    care: ["Hand wash or delicate cycle", "Lay flat to dry", "Store folded"],
    sustainability: ["Mulesing-free wool", "Renewable fiber", "Minimal water usage"],
    designer: "Essential Studio",
    collection: "Core Basics 2024",
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    isNew: false,
    isBestseller: true,
    shipping: { free: true, days: "1-2" },
    returns: { days: 30, free: true },
    styling: ["Layer under blazers", "Perfect with high-waisted pants", "Great for transitional weather"],
  },
  {
    id: "6",
    name: "Leather Minimalist Bag",
    price: 650.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Interior+View",
      "/placeholder.svg?height=800&width=600&text=Hardware+Detail",
    ],
    description:
      "Handcrafted leather bag with clean lines and functional design. Made from vegetable-tanned Italian leather.",
    detailedDescription:
      "This minimalist leather bag represents the pinnacle of functional design. Handcrafted from vegetable-tanned Italian leather, it features a structured silhouette with clean lines. The interior is thoughtfully designed with multiple compartments for organization.",
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Cognac", "Stone Grey"],
    materials: ["100% Vegetable-tanned Italian Leather", "Brass hardware", "Cotton lining"],
    care: ["Condition leather monthly", "Store in dust bag", "Avoid water exposure"],
    sustainability: ["Vegetable-tanned leather", "Handmade in Italy", "Lifetime craftsmanship guarantee"],
    designer: "Artisan Leather Co.",
    collection: "Timeless Accessories 2024",
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    isNew: true,
    isBestseller: false,
    shipping: { free: true, days: "5-7" },
    returns: { days: 14, free: false },
    styling: ["Perfect for work and weekend", "Complements minimalist outfits", "Versatile day-to-night piece"],
  },
  {
    id: "7",
    name: "Organic Cotton T-Shirt",
    price: 85.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Fabric+Detail",
      "/placeholder.svg?height=800&width=600&text=Fit+Guide",
    ],
    description:
      "The perfect organic cotton t-shirt with a relaxed fit and soft hand feel. A sustainable wardrobe staple.",
    detailedDescription:
      "This organic cotton t-shirt sets the standard for sustainable basics. Made from GOTS-certified organic cotton, it features a relaxed fit with a slightly cropped length. The fabric is pre-washed for softness and to prevent shrinkage.",
    category: "basics",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey Melange", "Sage", "Dusty Rose"],
    materials: ["100% GOTS Certified Organic Cotton"],
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"],
    sustainability: ["GOTS certified organic cotton", "Fair trade production", "Plastic-free packaging"],
    designer: "Earth Conscious",
    collection: "Sustainable Basics 2024",
    rating: 4.5,
    reviewCount: 445,
    inStock: true,
    isNew: false,
    isBestseller: true,
    shipping: { free: false, days: "3-5" },
    returns: { days: 30, free: true },
    styling: ["Layer under blazers", "Perfect with jeans", "Great for casual weekends"],
  },
  {
    id: "8",
    name: "Pleated Midi Skirt",
    price: 325.0,
    image: "/placeholder.svg?height=800&width=600",
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600&text=Movement+View",
      "/placeholder.svg?height=800&width=600&text=Waistband+Detail",
    ],
    description:
      "Elegant pleated midi skirt with fluid movement and timeless appeal. Crafted from premium crepe fabric.",
    detailedDescription:
      "This pleated midi skirt embodies feminine elegance with its fluid silhouette and graceful movement. Made from premium crepe fabric, it features knife pleats that create beautiful drape and movement. The high-waisted design flatters every figure.",
    category: "skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Camel", "Burgundy"],
    materials: ["100% Polyester Crepe", "Viscose lining"],
    care: ["Dry clean recommended", "Steam to refresh", "Store on hanger"],
    sustainability: ["Recycled polyester content", "Responsible manufacturing", "Durable construction"],
    designer: "Feminine Forms",
    collection: "Modern Classics 2024",
    rating: 4.7,
    reviewCount: 167,
    inStock: true,
    isNew: false,
    isBestseller: false,
    shipping: { free: true, days: "2-4" },
    returns: { days: 30, free: true },
    styling: ["Pair with fitted tops", "Great with boots or heels", "Perfect for office or dinner"],
  },
]

export const categories = [
  { id: "all", name: "All", icon: "✨" },
  { id: "knitwear", name: "Knitwear", icon: "🧶" },
  { id: "outerwear", name: "Outerwear", icon: "🧥" },
  { id: "dresses", name: "Dresses", icon: "👗" },
  { id: "trousers", name: "Trousers", icon: "👖" },
  { id: "skirts", name: "Skirts", icon: "🩱" },
  { id: "basics", name: "Basics", icon: "👕" },
  { id: "accessories", name: "Accessories", icon: "👜" },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

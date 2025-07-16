"use client"

import { useState, useEffect } from "react"
import { products } from "@/lib/products"
import { ProductShowcase } from "@/components/product-showcase"
import { FloatingActions } from "@/components/floating-actions"
import { ProductNavigation } from "@/components/product-navigation"
import { CartSidebar } from "@/components/cart-sidebar"
import { WishlistSidebar } from "@/components/wishlist-sidebar"

export default function HomePage() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [wishlistItems, setWishlistItems] = useState<any[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false)

  const currentProduct = products[currentProductIndex]

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const toggleWishlist = (product: any) => {
    setWishlistItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.filter((item) => item.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProduct()
      if (e.key === "ArrowRight") nextProduct()
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <div className="h-screen bg-white overflow-hidden">
      <ProductShowcase
        product={currentProduct}
        onNext={nextProduct}
        onPrev={prevProduct}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist(currentProduct.id)}
      />

      <ProductNavigation
        currentIndex={currentProductIndex}
        totalProducts={products.length}
        onProductChange={setCurrentProductIndex}
      />

      <FloatingActions
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setShowCart(true)}
        onWishlistClick={() => setShowWishlist(true)}
      />

      <CartSidebar isOpen={showCart} onClose={() => setShowCart(false)} items={cartItems} onUpdateCart={setCartItems} />

      <WishlistSidebar
        isOpen={showWishlist}
        onClose={() => setShowWishlist(false)}
        items={wishlistItems}
        onUpdateWishlist={setWishlistItems}
        onAddToCart={addToCart}
      />
    </div>
  )
}

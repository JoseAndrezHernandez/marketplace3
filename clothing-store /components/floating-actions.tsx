"use client"

import { ShoppingBag, Heart } from "lucide-react"

interface FloatingActionsProps {
  cartCount: number
  wishlistCount: number
  onCartClick: () => void
  onWishlistClick: () => void
}

export function FloatingActions({ cartCount, wishlistCount, onCartClick, onWishlistClick }: FloatingActionsProps) {
  return (
    <div className="fixed top-8 right-8 z-20 flex flex-col gap-4">
      <button
        onClick={onWishlistClick}
        className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        <Heart className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
            {wishlistCount}
          </span>
        )}
      </button>

      <button
        onClick={onCartClick}
        className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        <ShoppingBag className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  )
}

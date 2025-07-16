"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { ProductDetailsModal } from "./product-details-modal"

interface ProductShowcaseProps {
  product: Product
  onNext: () => void
  onPrev: () => void
  onAddToCart: (product: Product) => void
  onToggleWishlist: (product: Product) => void
  isInWishlist: boolean
}

export function ProductShowcase({
  product,
  onNext,
  onPrev,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}: ProductShowcaseProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [showDetails, setShowDetails] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) onNext()
    if (isRightSwipe) onPrev()
  }

  // Reset selections when product changes
  useEffect(() => {
    setSelectedSize("")
    setSelectedColor("")
    setShowDetails(false)
  }, [product.id])

  return (
    <div
      ref={containerRef}
      className="h-full flex flex-col relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Product Image */}
      <div className="flex-1 relative group cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700"
          priority
        />

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Product Info */}
      <div
        className={`bg-white transition-all duration-500 ${
          showDetails ? "h-80" : "h-32"
        } flex flex-col justify-between p-8`}
      >
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-light text-gray-900 mb-2">{product.name}</h1>
            <p className="text-3xl font-extralight text-gray-900">${product.price.toFixed(2)}</p>
          </div>

          {showDetails && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Rating and Reviews */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                {product.isBestseller && (
                  <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded">BESTSELLER</span>
                )}
                {product.isNew && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">NEW</span>}
              </div>

              {/* Designer and Collection */}
              <div className="text-center">
                <p className="text-sm text-gray-600">by {product.designer}</p>
                <p className="text-xs text-gray-500">{product.collection}</p>
              </div>

              <p className="text-gray-600 text-center leading-relaxed max-w-md mx-auto">
                {product.detailedDescription}
              </p>

              {/* Materials */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 text-center">Materials</h3>
                <div className="text-center">
                  {product.materials.map((material, index) => (
                    <span key={material} className="text-xs text-gray-600">
                      {material}
                      {index < product.materials.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 text-center">Size</h3>
                <div className="flex justify-center gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 text-center">Color</h3>
                <div className="flex justify-center gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 border text-xs font-medium transition-all ${
                        selectedColor === color
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shipping and Returns */}
              <div className="flex justify-center gap-8 text-xs text-gray-600">
                <div className="text-center">
                  <p className="font-medium">Shipping</p>
                  <p>
                    {product.shipping.free ? "Free" : "Paid"} • {product.shipping.days} days
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Returns</p>
                  <p>
                    {product.returns.days} days • {product.returns.free ? "Free" : "Paid"}
                  </p>
                </div>
              </div>

              {/* Sustainability */}
              {product.sustainability.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2 text-center">Sustainability</h3>
                  <div className="text-center space-y-1">
                    {product.sustainability.map((item) => (
                      <p key={item} className="text-xs text-green-700">
                        ✓ {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={() => onToggleWishlist(product)}
            variant="outline"
            className="flex-1 h-12 border-gray-300 bg-transparent hover:bg-gray-50"
          >
            <Heart className={`h-5 w-5 mr-2 ${isInWishlist ? "fill-red-500 text-red-500" : ""}`} />
            {isInWishlist ? "Saved" : "Save"}
          </Button>

          <Button onClick={() => onAddToCart(product)} className="flex-1 h-12 bg-gray-900 hover:bg-gray-800">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* More Details Button */}
        <Button
          onClick={() => setShowDetailsModal(true)}
          variant="ghost"
          className="w-full mt-3 text-sm text-gray-600 hover:text-gray-900"
        >
          View Full Details
        </Button>

        {/* Details Modal */}
        <ProductDetailsModal product={product} isOpen={showDetailsModal} onClose={() => setShowDetailsModal(false)} />
      </div>
    </div>
  )
}

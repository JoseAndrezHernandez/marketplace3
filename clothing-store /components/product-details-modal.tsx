"use client"

import { useState } from "react"
import { X, Star, Truck, RotateCcw, Leaf, Info } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductDetailsModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "care" | "sustainability" | "styling">("details")

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-light">Product Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            {[
              { id: "details", label: "Details", icon: Info },
              { id: "care", label: "Care", icon: RotateCcw },
              { id: "sustainability", label: "Sustainability", icon: Leaf },
              { id: "styling", label: "Styling", icon: Star },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-gray-900 text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.detailedDescription}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Materials</h3>
                  <ul className="space-y-1">
                    {product.materials.map((material) => (
                      <li key={material} className="text-gray-600 text-sm">
                        • {material}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Truck className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium">Shipping</p>
                      <p className="text-xs text-gray-600">
                        {product.shipping.free ? "Free" : "Paid"} • {product.shipping.days} days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <RotateCcw className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium">Returns</p>
                      <p className="text-xs text-gray-600">
                        {product.returns.days} days • {product.returns.free ? "Free" : "Paid"}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} out of 5 ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-4">
                <h3 className="font-medium">Care Instructions</h3>
                <ul className="space-y-3">
                  {product.care.map((instruction) => (
                    <li key={instruction} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "sustainability" && (
              <div className="space-y-4">
                <h3 className="font-medium">Our Commitment</h3>
                <ul className="space-y-3">
                  {product.sustainability.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "styling" && (
              <div className="space-y-4">
                <h3 className="font-medium">Styling Suggestions</h3>
                <ul className="space-y-3">
                  {product.styling.map((suggestion) => (
                    <li key={suggestion} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

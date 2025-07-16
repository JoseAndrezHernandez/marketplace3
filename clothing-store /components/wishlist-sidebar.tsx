"use client"

import Image from "next/image"
import { X, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
}

interface WishlistSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: WishlistItem[]
  onUpdateWishlist: (items: WishlistItem[]) => void
  onAddToCart: (item: WishlistItem) => void
}

export function WishlistSidebar({ isOpen, onClose, items, onUpdateWishlist, onAddToCart }: WishlistSidebarProps) {
  const removeItem = (id: string) => {
    onUpdateWishlist(items.filter((item) => item.id !== id))
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-light">Wishlist</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                <Button variant="outline" onClick={onClose} className="bg-transparent">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 relative rounded overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <p className="text-gray-600 mb-3">${item.price.toFixed(2)}</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => onAddToCart(item)}
                          className="flex-1 bg-gray-900 hover:bg-gray-800 h-8 text-xs font-light"
                        >
                          <ShoppingBag className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

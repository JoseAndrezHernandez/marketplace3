"use client"

import Image from "next/image"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateCart: (items: CartItem[]) => void
}

export function CartSidebar({ isOpen, onClose, items, onUpdateCart }: CartSidebarProps) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      onUpdateCart(items.filter((item) => item.id !== id))
    } else {
      onUpdateCart(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    onUpdateCart(items.filter((item) => item.id !== id))
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
            <h2 className="text-xl font-light">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-light">Total</span>
                <span className="text-2xl font-light">${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full h-12 bg-gray-900 hover:bg-gray-800 font-light">Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

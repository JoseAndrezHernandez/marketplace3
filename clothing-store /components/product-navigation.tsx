"use client"

interface ProductNavigationProps {
  currentIndex: number
  totalProducts: number
  onProductChange: (index: number) => void
}

export function ProductNavigation({ currentIndex, totalProducts, onProductChange }: ProductNavigationProps) {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
      <div className="flex gap-2">
        {Array.from({ length: totalProducts }).map((_, index) => (
          <button
            key={index}
            onClick={() => onProductChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

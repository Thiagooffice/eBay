"use client"

import CarouselComp from "./components/CarouselComp"
import Product from "./components/Product"
import MainLayout from "./layouts/MainLayout"

export default function Home() {

  const product = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis itaque dolorum iste velit totam veniam sint placeat excepturi adipisci. Nostrum temporibus a pariatur, ipsam accusamus assumenday inventore fugit doloribus!",
      url: "https://picsum.photos/id/7",
      price: 2500
    },
    {
      id: 2,
      title: "School Books",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis itaque dolorum iste velit totam veniam sint placeat excepturi adipisci. Nostrum temporibus a pariatur, ipsam accusamus assumenda inventore fugit doloribus!",
      url: "https://picsum.photos/id/20",
      price: 1999
    },
  ]

  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">
          Products
        </div>

        <div className="grid grid-cols-5 gap-4">
          {
            product.map(product => (
              <Product/>
            ))
          }
        </div>
      </div>
    </MainLayout>
  )
}

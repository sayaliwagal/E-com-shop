import React from 'react'
import { useNavigate  } from 'react-router'
import { Card } from './Card'

const CategorySection = ({ title, category, products}) => {
    const navigate = useNavigate();
  return (
    <section className='px-6 md:px-20 py-10'>
      {/* Header  */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="text-blue-600 font-semibold hover:underline">
            See All
        </button>
      </div>
      {/* Products  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products?.slice(0,4).map(item => (
          <Card key={item.id} products={item} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection

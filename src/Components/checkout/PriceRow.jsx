import React from 'react'

const PriceRow = ({label, value, bold}) => {
  return (
    <div className={`flex justify-between ${bold ? "font-bold text-lg" : "text-sm"} mb-2`}>
      <span>{label}</span>
      <span>$ {value}</span>
    </div>
  )
}

export default PriceRow

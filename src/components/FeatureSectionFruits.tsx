const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">Buy farm fresh fruits and vegetables online at the best prices</p>
        </div>


        <div className="space-x-4 mt-8 lg:mt-0">
         <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">Vegetables</button>
          <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
        </div>

      </div>
    </div>
  )
}

export default FeatureSectionFruits
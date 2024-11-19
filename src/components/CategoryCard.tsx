interface propsType{
  img: string;
  name: string;
  count: string;
}

const CategoryCard:React.FC<propsType> = ({img, name, count}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between"></div>

    </div>
  )
}

export default CategoryCard
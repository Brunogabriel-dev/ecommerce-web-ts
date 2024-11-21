import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    title: "Free Curbside Pickuo",
    icon: <LiaGiftSolid />,
  },
  {
    title: "Support 24h",
    icon: <FiPhoneCall />,
  }
]

const FeatureSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  )
}

export default FeatureSection;
import { TbCoffee } from "react-icons/tb"
import s from "./Description.module.css"

const Description = () => {
  return (
    <div className={s.descrWrapper}>
      <h1>
        Sip Happens Café <TbCoffee />
      </h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  )
}

export default Description

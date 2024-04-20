import Card from "./cards/Card"
import { Cards } from "./cards/data/CardsData"

export default function Features() {
  return (
    <div className='my-14 lg:mx-12 flex justify-center items-center flex-wrap'>
      {Cards.map((item, index) => {
        return (
          <div className='lg:w-1/2' key={index}>
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}
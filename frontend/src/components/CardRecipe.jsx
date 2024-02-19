import { Card } from 'flowbite-react';

function CardRecipe(props) {
  const { label, image, healthLabels, dietLabels } = props

  return (
    <>
      <Card imgSrc={image} horizontal className=' flex  item-stretch justify-around  '>
        <h5 className='font-bold text-2xl' >
          {label}
        </h5>
        <p >
          <p className='    '>{dietLabels}</p>
          {healthLabels}
        </p>

      </Card>

    </>
  )



}

export default CardRecipe



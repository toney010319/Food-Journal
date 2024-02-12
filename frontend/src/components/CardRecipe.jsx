import { Card } from 'flowbite-react';

function CardRecipe(props) {
  const { label, image, healthLabels, dietLabels } = props

  return (
    <>
      <Card imgSrc={image} horizontal className=' flex min-h-[25rem] max-h-[25rem] item-stretch justify-around  '>
        <h5 >
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



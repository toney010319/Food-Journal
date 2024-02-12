import { Card } from 'flowbite-react';

function CardRecipe(props) {
  const { label, image, healthLabels, dietLabels } = props

  return (
    <>
      <Card imgSrc={image} horizontal className=' max-h-96 truncate'>
        <h5 >
          {label}
        </h5>
        <p >
          <p className='max-h-96 overflow-truncate   '>{dietLabels}</p>
          {healthLabels}
        </p>

      </Card>

    </>
  )



}

export default CardRecipe



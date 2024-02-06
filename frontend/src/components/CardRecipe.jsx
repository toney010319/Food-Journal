import { Card } from 'flowbite-react';

function CardRecipe(props) {
  const { label, image, healthLabels, dietLabels } = props

  return (
    <>
      <Card className="max-w-sm rounded-b-none border-b-0" imgSrc={image} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>{dietLabels}</p>
          {healthLabels}
        </p>

      </Card>

    </>
  )



}

export default CardRecipe



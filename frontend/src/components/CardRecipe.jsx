import { Button, Card } from 'flowbite-react';

function CardRecipe(props) {
  const { label, image, ingredients } = props

  return (
    <>
      <Card className="max-w-sm">
        <p className="font-normal text-gray-700 dark:text-gray-400"><img src={image} alt="image" /></p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{ingredients}</p>
        <div className="grid grid-cols-2 grid-rows-1 gap-5">
          <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">
            Add Meal

          </Button>
        </div>

      </Card >
    </>
  )



}

export default CardRecipe



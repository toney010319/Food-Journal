import { Card } from "flowbite-react";

function CardRecipe(props) {
  const { label, image, healthLabels, dietLabels } = props;

  return (
    <div>
      <Card
        imgSrc={image}
        horizontal
        className=" flex min-h-[25rem] max-h-[25rem] item-stretch justify-around  "
      >
        <h5 className="font-bold text-2xl">{label}</h5>
        <div>
          <p className="">{dietLabels}</p>
          <p className="">{healthLabels}</p>
        </div>
      </Card>
    </div>
  );
}

export default CardRecipe;

import { Button } from "flowbite-react";
const FormAction = (props) => {
  const { handleSubmit, action = "submit", text } = props;

  return (
    <Button
      type={action}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10"
      onSubmit={handleSubmit}
    >
      {text}
    </Button>
  );
};

export default FormAction;

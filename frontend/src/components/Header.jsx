import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = (props) => {
  const { heading, paragraph, linkName, linkUrl = "#" } = props;
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img src={Logo} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-heading">
        {heading}
      </h2>
      <p className="mt-2 text-center text-base text-gray-600 mt-5 font-body">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};
export default Header;

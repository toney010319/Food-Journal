import { Link } from "react-router-dom";

const Header = (props) => {
  const { heading, paragraph, linkName, linkUrl = "#" } = props;
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M9 18s.9-3.741 3-6" />
            <path d="m16.186 7.241l.374 3.89c.243 2.523-1.649 4.77-4.172 5.012c-2.475.238-4.718-1.571-4.956-4.047a4.503 4.503 0 0 1 4.05-4.914l4.147-.4a.51.51 0 0 1 .557.46" />
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
          </g>
        </svg>
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

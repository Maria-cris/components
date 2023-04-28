import PropTypes from "prop-types";

const TextLink = ({ text, href }) => {
  //expand icon state

  return (
    <div className="p-1  cursor-pointer hover:underline">
      <a className="font-principal text-sm" href={href}>
        {text}
      </a>
    </div>
  );
};
TextLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
export default TextLink;

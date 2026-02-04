import { oneOf } from "prop-types";
const Header = (props) => {
    const { as, title } = props;
    const Component = as;

    return <Component>{title}</Component>
};

export default Header;

Header.propTypes = {
    as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
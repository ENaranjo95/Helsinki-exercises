const Header = (props) => {
    const { name, as: Component = 'h1' } = props;
    

    return (
        <Component>{name}</Component>
    );
};

export default Header;
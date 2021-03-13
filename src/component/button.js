const Button = ({ children, tabIndex }) => {
  return (
    <>
      <div tabIndex={0} className="button">
        {children}
      </div>
    </>
  );
};

export default Button;
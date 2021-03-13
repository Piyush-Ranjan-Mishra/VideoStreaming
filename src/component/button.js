const Button = ({ children, tabIndex }) => {
  return (
    <>
      <div tabIndex={tabIndex} className="button">
        {children}
      </div>
    </>
  );
};

export default Button;
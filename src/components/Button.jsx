const Button = ({ classes, context, children, ...rest }) => {
  const handleClick = async () => {
    // Capture the click event
    const formData = new FormData();
    formData.append("form-name", "pdf-button-clicks");
    formData.append("context", context);
    formData.append("timestamp", new Date().toISOString());

    // Send the data to Netlify
    await fetch("/", {
      method: "POST",
      body: formData,
    });

    console.log(`button clicked!`);
  };

  return (
    <>
      <button className={classes} {...rest} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};
export default Button;

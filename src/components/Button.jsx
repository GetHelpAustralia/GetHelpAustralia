const Button = ({ classes, context = "unknown", children, ...rest }) => {
  const handleClick = async () => {
    // Clear any cached form data
    if ("caches" in window) {
      try {
        await caches.delete("pdf-button-clicks");
      } catch (error) {
        console.warn("Cache clear failed:", error);
      }
    }

    // Generate a unique identifier for this submission
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Capture the click event with cache-busting parameters
    const formData = new FormData();
    formData.append("form-name", "pdf-button-clicks");
    formData.append("context", context || "unknown");
    formData.append("timestamp", new Date().toISOString());
    formData.append("uniqueId", uniqueId);

    // Send the data to Netlify with cache-busting headers
    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
        body: formData,
      });
      console.log(
        `Button clicked with context: ${context}, uniqueId: ${uniqueId}`
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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

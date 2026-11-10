import Button from "./Button";

const Help = () => {
  return (
    <div
      className="sticky-top py-2 mb-4"
      style={{ backgroundColor: "#FBF6F3", zIndex: 1020 }}
    >
      <a
        className="link-underline link-underline-opacity-0"
        target="_blank"
        href="https://www.stopitnow.org.au/helpline"
      >
        <div className="help-button-container d-grid gap-2 col-10 mx-auto">
          <Button
            id="help-button"
            classes="btn outline-button fw-semibold p-3 text-uppercase"
          >
            Anonymous help and support: 1800 01 1800 and live chat
          </Button>
        </div>
      </a>
    </div>
  );
};
export default Help;

import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import PrivacyPolicyData from "../data/page-data/PrivacyPolicyData";

const Privacy = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Privacy policy</h2>
      </Heading>
      <MainContent>
        <PrivacyPolicyData />
      </MainContent>
    </>
  );
};
export default Privacy;

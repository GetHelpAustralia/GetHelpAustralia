/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import UnderstandingThoughtsModuleData from "@/data/modules/Wellbeing/understandingThoughtsModuleData";
import PrintButton from "@/components/PrintButton";
import document from "@/print/Understandingthoughtsfeelingsandbehaviours.pdf";

const UnderstandingThoughtsModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    difference_between_thoughts: 3,
    identify_common_thinking: 3,
    understanding_the_link: 3,
  });

  const navigate = useNavigate();

  useEffect(() => {
    showMenu(false);
  }, []);

  const handleQuestionChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleContinue = (newModuleIndex) => {
    console.log(`Moving to module ${newModuleIndex}`);
    // You can add any additional logic here that needs to run when the user moves to the next module
  };

  const handleSubmit = async (formData, isFinalSubmission) => {
    if (isFinalSubmission) {
      console.log("Submitting form...");
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "understanding-thoughts-reflection-form",
            ...Object.fromEntries(formData),
            ...responses,
          }).toString(),
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        console.log(
          "Form submitted successfully. Thank you for your feedback!"
        );
      } catch (error) {
        console.error("Form submission error:", error);
      }
    } else {
      // Handle intermediate submissions if needed
      console.log("Intermediate submission:", Object.fromEntries(formData));
    }
  };

  const handlePostSubmit = () => {
    // Navigate to the next module
    navigate("/managing-thoughts-feelings-and-behaviours"); // Replace with the correct path to the next module
  };

  const processedModules = UnderstandingThoughtsModuleData.map((module) => {
    if (module.description.type === "reflection") {
      return {
        ...module,
        description: {
          ...module.description,
          render: () =>
            module.description.render({
              responses,
              onQuestionChange: handleQuestionChange,
            }),
        },
      };
    }
    return module;
  });

  const moduleProps = {
    responses,
    onQuestionChange: handleQuestionChange,
  };
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Understanding thoughts, feelings and behaviours
        </h2>
        <PrintButton document={document} />
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>
            The difference between thoughts, feelings and behaviours and how
            they influence each other
          </li>
          <li>Common thinking errors</li>
          <li>The link between sexual fantasies and arousal</li>
        </ul>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="understanding-thoughts-reflection-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};

export default UnderstandingThoughtsModule;

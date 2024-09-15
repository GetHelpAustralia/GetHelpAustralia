import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import ProblematicCollectingModuleData from "@/data/modules/UnderstandingOnlineBehaviour/problematicCollectingModuleData";
import PrintButton from "@/components/PrintButton";
import document from "@/documents/print/Problematiccollecting.pdf";

const ProblematicCollectingModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    why_someone_might_collect: 3,
    collecting_link_to_offending: 3,
    understanding_collection: 3,
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
            "form-name": "problematic-collecting-reflection-form",
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
    navigate("/moving-forward"); // Replace with the correct path to the next module
  };

  const processedModules = ProblematicCollectingModuleData.map((module) => {
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
        <h2 className="secondary-color">Problematic collecting</h2>
        <PrintButton document={document} />
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Why you collect</li>
          <li>How it links to your offending</li>
          <li>
            The relationship between collecting and some of the unsatisfactory
            aspects of your life
          </li>
        </ul>
        <br></br>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="problematic-collecting-reflection-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};

export default ProblematicCollectingModule;

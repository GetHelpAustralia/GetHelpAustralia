import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import PrintButton from "@/components/PrintButton";
import document from "@/print/Recognisinganddealingwithfeelings.pdf";
import { updateEmotionScores } from "@/context/emotionScoreSlice";
import RecognisingAndDealingWithFeelingsModuleData from "@/data/modules/Wellbeing/recognisingAndDealingWithFeelingsModuleData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecognisingAndDealingWithFeelingsModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_emotions: 3,
    strategies_difficult_emotions: 3,
  });
  const [emotionData, setEmotionData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submissionStatus = useSelector(
    (state) => state.emotionScore.submissionStatus
  );
  const emotionScores = useSelector((state) => state.emotionScore.scores);

  useEffect(() => {
    showMenu(false);
  }, []);

  const formName = "recognising-and-dealing-with-feelings-reflection-form";

  const handleContinue = (step, data) => {
    if (data && data["emotion-quiz"]) {
      setEmotionData(data["emotion-quiz"]);
      dispatch(updateEmotionScores(data["emotion-quiz"]));
    }
  };

  const handleQuestionChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const submitEmotionForm = async (formData) => {
    formData.append("form-name", "emotion-quiz");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error("Emotion form submission failed");
      console.log("Emotion form submitted successfully");
      return true;
    } catch (error) {
      console.error("Emotion form submission error:", error);
      return false;
    }
  };

  const submitReflectionForm = async () => {
    const reflectionFormData = new FormData();
    reflectionFormData.append(
      "form-name",
      "recognising-and-dealing-with-feelings-reflection-form"
    );
    Object.entries(responses).forEach(([key, value]) => {
      reflectionFormData.append(key, value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(reflectionFormData).toString(),
      });
      if (!response.ok) throw new Error("Reflection form submission failed");
      console.log("Reflection form submitted successfully");
      return true;
    } catch (error) {
      console.error("Reflection form submission error:", error);
      return false;
    }
  };

  const handleSubmit = async (formData, isFinalSubmission) => {
    if (isFinalSubmission) {
      console.log("Submitting form...");
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name":
              "recognising-and-dealing-with-feelings-reflection-form",
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

  // const handleSubmit = async (formData, isFinalSubmission) => {
  //   if (isFinalSubmission) {
  //     const emotionFormData = new FormData();
  //     Object.entries(emotionData).forEach(([key, value]) => {
  //       emotionFormData.append(key, value);
  //     });
  //     emotionFormData.append(
  //       "emotionTotalScore",
  //       Object.values(emotionData).reduce((a, b) => a + b, 0)
  //     );

  //     try {
  //       const emotionSubmitted = await submitEmotionForm(emotionFormData);
  //       const reflectionSubmitted = await submitReflectionForm();

  //       if (emotionSubmitted && reflectionSubmitted) {
  //         console.log("Both forms submitted successfully");
  //         dispatch(submitEmotionScoreToNetlify(emotionFormData));
  //         return true;
  //       } else {
  //         throw new Error("One or both form submissions failed");
  //       }
  //     } catch (error) {
  //       console.error("Form submission error:", error);
  //       return false;
  //     }
  //   } else {
  //     // Handle intermediate submissions if needed
  //     console.log("Intermediate submission:", Object.fromEntries(formData));
  //     return true;
  //   }
  // };

  const handlePostSubmit = () => {
    // Navigate to the next module only after successful submission
    navigate("/self-care");
  };

  const processedModules = RecognisingAndDealingWithFeelingsModuleData.map(
    (module) => {
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
    }
  );

  const moduleProps = {
    // dispatch,
    // updateEmotionScores,
    // emotionScores,
    responses,
    onQuestionChange: handleQuestionChange,
  };

  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Recognising and dealing with feelings
        </h2>
        <PrintButton
          document={document}
          context="Recognising and dealing with feelings"
        />
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>How your emotions influence your thinking and behaviour</li>
          <li>How you cope with difficult emotions e.g. anger</li>
          <li>How to become more assertive</li>
        </ul>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName={formName}
          additionalFormFields={[
            ...Object.keys(responses),
            ...Object.keys(emotionScores).map((key) => `emotionScore_${key}`),
            "quizTotalScore",
          ]}
        />
      </MainContent>
    </>
  );
};

export default RecognisingAndDealingWithFeelingsModule;

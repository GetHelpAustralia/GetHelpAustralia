import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";

import StartingPointQuiz from "@/components/StartingPointQuiz";
import pictureOne from "@/images/understanding-why-excercise-1-example.png";
import pictureTwo from "@/images/understanding-why-excercise-2a-example-v2.png";
import pictureThree from "@/images/understanding-why-excercise-2b-example.png";

import documentOne from "@/documents/Understanding Why - Exercise - Daily Interent use record.pdf";
import documentTwo from "@/documents/Understanding Why_Progression timeline - Digging Deeper.pdf";
import documentThree from "@/documents/Understanding Why_Progression timeline - Making timeline.pdf";

const understandingWhyModuleData = [
  {
    id: "startingPoint-assessment",
    title: "Understanding why",
    type: "assessment",
    dataSelector: ".MuiSlider-valueLabelLabel",
    dataExtractor: (element) => Number(element.textContent),
    description: {
      type: "assessment",
      render: ({ onDataChange }) => (
        <>
          <br></br>
          <h4 className="secondary-color">
            Motivation for illegal online sexual behaviour
          </h4>
          <p></p>
          <p>
            If you are concerned about your worrying or illegal online sexual
            behaviour and want to stop this behaviour, it is important for you
            to understand more about yourself. This will help you understand why
            you engage with this behaviour and to ensure that you do not engage
            with it again.
          </p>
          <p>
            The first step is to understand why you have engaged in this
            behaviour. There may be a variety of motivations, here are some
            factors that we hear from people:{" "}
          </p>
          <ul className="content-list">
            <li>boredom</li>
            <li>low self-esteem</li>
            <li>stress</li>
            <li>curiosity</li>
            <li>desensitising to legal adult pornography</li>
            <li>sexual gratification</li>
            <li>loneliness</li>
            <li>no sex life or decreased sex life</li>
            <li>excitement</li>
            <li>attraction to children</li>
            <li>comfort</li>
            <li>a 'buzz' or risk taking</li>
            <li>relationship problems</li>
            <li>sex addiction</li>
          </ul>
          <hr />
          <StartingPointQuiz onDataChange={onDataChange} />
          <br />
          <p>
            If you have very little knowledge or some understanding, this
            section will be really helpful for you to increase your knowledge
            around why you might be behaving illegally online.
          </p>
        </>
      ),
    },
  },
  {
    id: 2,
    title: "Internet Use",
    description: {
      type: "content",
      content: (
        <>
          <br></br>
          <h4 className="secondary-color">Exercise 1: Internet Use</h4>
          <p>
            You might already have some understanding of why you have been or
            are tempted to behave illegally online. You might also have
            recognised some of the motivations listed on the previous tab. But
            sometimes it can be difficult to understand our behaviour. We will
            show you two ways you can use to improve your understanding.
          </p>
          <p>
            The first is to think about when you go online and what mood you are
            in.
          </p>
          <p>
            Below is a diary for you to complete which will help you think about
            these and help you identify patterns of behaviour.
          </p>
          <h5 className="secondary-color">Daily internet use record</h5>
          <p>
            This exercise will help you record your behaviour and recognise
            patterns in it. This can help you work out where you need to fill
            your time more positively.
          </p>
          <ul className="content-list">
            <li>
              Under each day, shade in the grey column to show the hours that
              you have spent online.
            </li>
            <li>
              In the white column next to it, use a traffic light system for
              your behaviour: record illegal activity in red, high risk activity
              in amber, and low risk activity in green.
            </li>
            <li>You can also include a record of your mood.</li>
          </ul>
          <p>
            <b>Example</b>
          </p>
          <img
            src={pictureOne}
            alt="daily internet use record"
            className="img-center img-responsive"
          />
          <br />
          <a href={documentOne} target="_blank" rel="noopener noreferrer">
            Download and edit PDF template
          </a>
        </>
      ),
    },
  },
  {
    id: 3,
    title: "Progression Timeline",
    description: {
      type: "content",
      content: (
        <>
          <br></br>
          <h4 className="secondary-color">Exercise 2: Progression Timeline</h4>
          <p>
            The second exercise is in three parts and looks back over your life
            to help you think about how you started behaving illegally online.
          </p>
          <br />
          <h5 className="secondary-color">Part A: Making your timeline</h5>
          <p>
            This first step aims to give you a clear visual record of how you
            moved towards illegal online sexual behaviour.
          </p>
          <p>
            In each box, write a short description of an important event in your
            life. These events should show how your online behaviour changed,
            eventually leading to your illegal online sexual behaviour.
          </p>
          <p>
            Look at the example below to help you get started. We recommend
            completing your timeline in the following order:
          </p>
          <ol>
            <li>Your current situation (on the far right)</li>
            <li>
              The first time that you behaved illegally online (highlight this
              point on the timeline)
            </li>
            <li>
              Your first memory of being sexually aroused, be it with
              pornography or something else (likely near the far left)
            </li>
            <li>
              In between each of the above, write other important events that
              you think can be seen as signposts in your life for where you
              broke down a barrier and moved to more risky online behaviour.
            </li>
          </ol>
          <p>
            Remember that this is your timeline – if you feel that you need more
            boxes to tell your story then feel free to add them.
          </p>
          <br />
          <p>
            <b>Example</b>
          </p>
          <img
            src={pictureTwo}
            alt="some understanding why scale"
            className="img-center img-responsive"
          />
          <br />
          <br></br>
          <a href={documentThree} target="_blank" rel="noopener noreferrer">
            Download PDF template
          </a>
          <br />
          <hr />
          <br></br>
          <h5 className="secondary-color">Part B: Digging deeper</h5>
          <p>
            To help you explore and reflect on your timeline, complete the
            following table in as much detail as possible.
          </p>
          <p>
            You can use the ‘feelings word bank’ below if needed. Remeber to
            think about the pathway to any inappropriate and/or illegal
            behaviour you have engaged in.
          </p>
          <br />
          <p>
            <b>Example</b>
          </p>
          <img
            src={pictureThree}
            alt="Understanding why"
            className="img-center img-responsive"
          />
          <br />
          <br></br>
          <a href={documentTwo} target="_blank" rel="noopener noreferrer">
            Download PDF template
          </a>
          <br />
          <br></br>
          <p>
            <b>Feeling word bank</b>
          </p>
          <p>
            Happy, Sad, Angry, Hurt, Depressed, Frustrated, Impulsive, Stressed,
            Relaxed, Excited, Bored, Curious, Rejected, Doubtful, Interested,
            Lonely, Irritated, Ashamed, Upset, Annoyed, Miserable, Guilty, In
            despair, Uneasy, Useless, Vulnerable, Afraid, Nervous, Timid,
            Indifferent, Restless, Alienated, Nonchalant, Dull, Anxious,
            Confident
          </p>
          <hr />
          <br />
          <h5 className="secondary-color">
            Part C: Understanding your behaviour over time
          </h5>
          <p>
            <b>
              Looking back over your diary and your timeline, think about these
              questions:
            </b>
          </p>
          <ol>
            <li>
              How much control do you feel you had over the events that
              influenced you to engage in more risky behaviour? In hindsight,
              how could you have handled them differently?
            </li>
            <li>
              How much control do you think you had over the choices you made to
              move towards further offending behaviour? Why?
            </li>
            <li>
              What effect, patterns or trends can you notice about how your
              sexual fantasies developed?
            </li>
            <p>
              <b>
                Now think about the one event that led you to behave illegally
                online for the first time:
              </b>
            </p>
            <li>Why did you decide to use the internet?</li>
            <li>
              Did using the internet change the way you were thinking? In what
              way?
            </li>
            <li>
              Over time, what effect did the internet have on your life offline?
            </li>
            <li>How would you describe your life online?</li>
            <p>
              <b>
                Now think about the one event that led you behave illegally
                online for the first time:
              </b>
            </p>
            <li>
              Why do you think it was this specific event that triggered you to
              behave illegally online for the first time? Why not something
              earlier in your life?
            </li>
            <li>
              Were there other things happening in your life beyond what you
              have mentioned that could have contributed to your decision to
              behave illegally online?
            </li>
            <li>
              Why do you think you have continued the behaviour over time?
            </li>
            <li>
              Using the list below, make a note of all the illegal behaviour
              that you have engaged in:
            </li>
            <br />
            <ol>
              <li>downloading illegal images of children</li>
              <li>trading sexual images of children with others</li>
              <li>
                engaging in sexual conversations about children online with
                adults, including sharing fantasies
              </li>
              <li>
                contacting children online for sexual reasons including through
                apps, chat or webcams
              </li>
              <li>
                exposing children to sexual behaviour including on webcams
              </li>
              <li>producing illegal images of children</li>
              <li>voyeurism including hidden cameras</li>
              <li> offline sexual activity with children</li>
            </ol>
            <br />
            <p>
              Can you identify how your offending changed over time and involved
              different behaviours?
            </p>
            <li>
              Have you at any time tried to stop your illegal online sexual
              behaviour? If yes, how many times did you try and stop? Why do you
              think you were not successful?
            </li>
            <br />
            <p>
              What are the important things that are motivating you to stop your
              illegal behaviour now? How important are they to you?
            </p>
          </ol>
        </>
      ),
    },
  },
  {
    id: 4,
    title: "Reflection",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <>
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <p>
            As with the introduction to this module, using the table below,
            think about your current level of knowledge and understanding about
            your online behaviour.
          </p>
          <p>
            (1 = very little knowledge; 2 = some understanding; 3 = secure
            understanding).
          </p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  I have a clear and detailed understanding of my sexual
                  behaviour and the internet.
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  I can identify key events in my life that influenced me to
                  engage in more risky sexual behaviour over time.
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  I understand how I came to first behave illegally online.
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  I am aware of my patterns of internet use and when I am most
                  likely to behave illegally.
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>Think about these questions:</p>
          <ul className="content-list">
            <li>
              Have any of your responses changed from 1 to 2, or from 2 to 3
              since the start of this module?
            </li>
            <li>How has your understanding changed?</li>
            <li>
              Which part of the module had the biggest impact on your
              understanding? Why?
            </li>
            <li>
              Has anything from this module encouraged you to do anything about
              your behaviour? If so, what? How do you plan to act on it?
            </li>
            <li>
              Has this module raised any further questions for you or made you
              want to explore any ideas further? What steps will you take to
              find information?
            </li>
          </ul>
          <br />
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.{" "}
          </p>
          <ReflectionQuestion
            id="better_understanding_sexual_behaviour"
            value={responses.better_understanding_sexual_behaviour}
            onChange={onQuestionChange}
          >
            I have a better understanding of sexual behaviour and the internet.
          </ReflectionQuestion>
          <ReflectionQuestion
            id="better_understanding_key_events"
            value={responses.better_understanding_key_events}
            onChange={onQuestionChange}
          >
            {" "}
            I now have a better understanding of key events that might influence
            someone to engage in more risky sexual behaviour over time
          </ReflectionQuestion>
          <ReflectionQuestion
            id="patterns_of_internet_use"
            value={responses.patterns_of_internet_use}
            onChange={onQuestionChange}
          >
            I now have a better understanding of patterns of internet use.
          </ReflectionQuestion>
        </>
      ),
    },
  },
];
export default understandingWhyModuleData;

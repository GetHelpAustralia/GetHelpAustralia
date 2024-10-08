import { Link } from "react-router-dom";
import ReflectionQuestion from "@/components/ReflectionQuestion";
import document from "@/documents/Fantasy_Exercise_Fantasy diary.pdf";
import pictureOne from "@/images/diagrams-surely.gif";

// Accordion
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdExpandMore } from "react-icons/md";

const FantasyModuleData = [
  {
    id: "1",
    title: "Fantasy",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">What is a fantasy?</h4>
          <p>
            Do you ever think about winning the lottery? How would you spend the
            money? Where would you go?
          </p>
          <p>
            This is one example of a fantasy. A fantasy is something that is
            imagined.
          </p>
          <br></br>
          <h4 className="secondary-color">Why do people have fantasies</h4>
          <p>
            Fantasies can be about a range of different things and everybody
            will have their own reasons for engaging in a fantasy.
          </p>
          <p>
            For some people, a fantasy will give them better confidence and
            a&nbsp;sense of control&nbsp;over a situation by letting them
            rehearse how they will deal with a situation.
          </p>
          <p>
            For other people, it might be a way to release stress (escapism) or
            a way to experience things&nbsp;that they wouldn’t in everyday life
            (that lottery win).
          </p>
          <p>
            Negative fantasies can be a way that people try to
            cope&nbsp;and&nbsp;prepare themselves&nbsp;for something they fear
            will happen, or a way of&nbsp;punishing&nbsp;themselves.
          </p>
          <p>
            Some people use sexual fantasies as a form of&nbsp;sexual
            outlet,&nbsp;often if they are not meeting their sexual needs within
            a relationship.
          </p>
          <p>A fantasy can have:</p>
          <ul className="content-list">
            <li>
              positive outcomes:&nbsp;for example imagining achieving an award
              or winning a competition.
            </li>
            <li>
              negative outcomes:&nbsp;for example if a partner does not return
              home on time, imaging that they have been in a car accident.
            </li>
          </ul>
          <br></br>
          <p>Some fantasies are:</p>
          <ul className="content-list">
            <li>
              planned,&nbsp;rehearsed&nbsp;and&nbsp;used repeatedly by a person,
              for example scoring a world cup goal.
            </li>
            <li>
              triggered by an emotional response or something that happens, for
              example replaying a bad day at work.
            </li>
          </ul>
          <p>
            Sometimes a person’s thoughts stray and it takes them a short time
            to realise they are fantasising and not doing what they are supposed
            to be doing.
          </p>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: "2",
    title: "When fantasy becomes a problem",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">When fantasy becomes a problem</h4>
          <p>
            Fantasies are a healthy and normal part of everyday life and
            everybody fantasises about something at one point or another.
          </p>
          <p>But fantasies can become a problem when:</p>
          <ul className="content-list">
            <li>
              you engage in fantasies for a long period of time and increasingly
              often
            </li>
            <li>
              you use fantasy to deal with a situation rather than resolving the
              problem itself
            </li>
            <li>
              you would rather engage in a sexual fantasy than engage in sexual
              activity with your partner
            </li>
            <li>
              your sexual fantasies are illegal, abusive or inappropriate
              (explored later)
            </li>
          </ul>
          <p>
            If you can identify with the bullet points above, then your
            fantasies may begin to affect the things you care about, such as
            your family, your friends, your job and your intimate and sexual
            relationships.
          </p>
          <br></br>
          <h4 className="secondary-color">My fantasies</h4>
          <p>
            A good starting point in considering if your fantasies are
            problematic is to look at your fantasies in more detail. Exercises
            1a and 1b will help you start to do this and will help you to
            explore your triggers to your fantasies.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Exercise 1 - Part A: Thinking about past fantasies
          </h4>
          <p>
            Think of a fantasy that you have had, either regularly or a one-off
            fantasy. It can be a non-sexual or sexual fantasy. Now answer the
            following questions:
          </p>
          <ol>
            <li>Where were you when you were having this fantasy?</li>
            <li>
              Were there other people around? Were these people you know or
              strangers?
            </li>
            <li>What time of the day was it?</li>
            <li>What was your mood before you had that fantasy?</li>
            <li>
              Had anything happened during that day that led you to be in that
              particular mood?
            </li>
            <li>What was your mood after you had the fantasy?</li>
          </ol>
          <p>
            Now think about other fantasies you have had and answer the same
            questions.
          </p>
          <p>Do you see themes developing?</p>
          <p>
            Do you tend to have fantasies when you are in a particular mood or
            at a certain time of day?
          </p>
          <p>
            You may find that sexual fantasies follow slightly different themes
            to non-sexual fantasies.
          </p>
          <p>Make a note of these differences.</p>
          <br></br>
          <h4 className="secondary-color">
            Exercise 1 - Part B: Fantasy diary
          </h4>
          <p>
            Over the next week use the fantasy diary below to keep a record of
            your fantasies, both sexual and non-sexual.
          </p>
          <p>
            Using the table below, write down the time of day, your mood before
            you had a fantasy, the type of fantasy (sexual or non-sexual) and
            your mood after the fantasy.
          </p>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>Time of day</th>
                <th>Mood before</th>
                <th>Type of fantasy</th>
                <th>Mood afterwards</th>
              </tr>
              <tr>
                <td>
                  &nbsp;<p></p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            <a href={document} target="_blank" rel="noopener noreferrer">
              <strong>Download and print a full page diary</strong>
            </a>
            .
          </p>
          <p>
            Many people who have behaved illegally online feel that as part of
            addressing their behaviour, they have to stop all sexual fantasies.
          </p>
          <p>
            But sexual fantasies themselves are not necessarily a bad thing –
            it’s what happens in that fantasy or who is in that fantasy that
            might need to be addressed.
          </p>
          <p>
            Hopefully you should now be getting a picture of when and why you
            use fantasy.
          </p>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: 3,
    title: "Appropriate versus inappropriate fantasy",
    description: {
      type: "content",
      content: (
        <>
          <br></br>
          <h4 className="secondary-color">
            Appropriate versus inappropriate fantasy
          </h4>
          <p>
            <img src={pictureOne} alt="digram surley" className="img-center img-responsive"/>
          </p>
          <p>
            Well actually, you&nbsp;are&nbsp;harming yourself because you are
            reinforcing your attraction to things that are illegal and abusive.
          </p>
          <p>
            As explored earlier, we can get pleasure from our fantasies. If the
            subjects of our fantasies are inappropriate, we then associate
            feelings of pleasure with something that is illegal and abusive.
            This is particularly true if you masturbate to these fantasies,
            especially to the point of ejaculation, as the next time you think
            of the fantasy you will remember the pleasure and arousal.
          </p>
          <p>
            This is&nbsp;not&nbsp;helpful if you want to control a sexual
            attraction to children or an illegal behaviour such as looking at
            sexual images of children.
          </p>
          <p>
            So what are appropriate and inappropriate fantasies? We have split
            inappropriate fantasies into three sections:
          </p>
          <br></br>
          <h4 className="secondary-color">Illegal fantasies</h4>
          <p>
            These are fantasies that would be illegal if they were carried out
            or acted on in real life, such as having any sexual activity with a
            child.
          </p>
          <br></br>
          <h4 className="secondary-color">Problematic fantasies</h4>
          <p>
            So, imagine you are a 48 year old man and you are having a sexual
            fantasy about a 17 year old. Is this illegal? No. But is this
            appropriate? We think not, because there is likely to be a
            difference in power, whether that be related to age, money, or life
            experience. When there is power imbalance between individuals, it
            can influence someone’s behaviour, such as their ability to consent
            and their decision making.
          </p>
          <br></br>
          <h4 className="secondary-color">Not OK for me</h4>
          <p>
            This could be a legal and healthy fantasy for some people, but not
            for you. For example an adult dressed as a school child. This may be
            ok for some people but for those who have offended online or who
            have a sexual interest in children, it may take them a step closer
            to a fantasy about a child.
          </p>
        </>
      ),
    },
  },
  {
    id: 4,
    title: "Fantasy knowledge",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <p>
            Whether a particular fantasy is considered inappropriate can vary
            from person to person; for example it is more appropriate for a 20
            year old person to have sexual fantasies about a 18 year old, than a
            60 year old person.
          </p>
          <p>Now let’s see how much you understand fantasy.</p>
          <br></br>
          <h4 className="secondary-color">Exercise 2: Fantasy knowledge</h4>
          <p>
            Read each example of a fantasy below and consider whether you think
            each one is an appropriate or inappropriate fantasy. Then click to
            see what the answer is.
          </p>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <div>
                <h5 className="secondary-color">
                  1. A fantasy about a past sexual partner that you loved and
                  cared for.
                </h5>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4 className="secondary-color">Answer:</h4>
                <p>
                  This would be an appropriate fantasy and it is ok to have this
                  fantasy as it is depicting a scenario which is non-abusive.
                  However, if this fantasy is about a sexual relationship you
                  had when you were under 16, this would be inappropriate. Also,
                  if you now have a new partner you need to consider how healthy
                  this is for you and whether it will affect your new sexual
                  relationship.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <div>
                <h5 className="secondary-color">
                  2. A fantasy about your employer making you angry, so you slam
                  their office door and force them to engage in sexual activity.
                </h5>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4 className="secondary-color">Answer:</h4>
                <p>
                  This is an inappropriate fantasy. Forcing someone to do
                  something sexual against their will is illegal.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <div>
                <h5 className="secondary-color">
                  3. A fantasy about an adult engaging in sexual activity with
                  another adult wearing school uniform.
                </h5>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4 className="secondary-color">Answer:</h4>
                <p>
                  If the fantasy depicts two consenting adults who want to dress
                  up in school uniform then this could be an appropriate
                  fantasy. However, if you have been accessing child sexual
                  abuse material (CSAM), it would be inappropriate because you
                  could be reinforcing your inappropriate thoughts about
                  children.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <div>
                <h5 className="secondary-color">
                  4. A fantasy about sexual activity with a 15 year old who said
                  they want to have sex.
                </h5>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4 className="secondary-color">Answer:</h4>
                <p>
                  This is an inappropriate fantasy. A child needs to be 16 or 17
                  years old (depending on your state/territory in Australia) to
                  consent to sexual activity and any sexualised content
                  featuring someone who is under 18 years old is illegal.
                  Regardless of how old you are, sexual activity with a child is
                  illegal.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <div>
                <h5 className="secondary-color">
                  5. A fantasy about sexual activity with an attractive adult
                  stranger you saw walking down the road that day.
                </h5>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4 className="secondary-color">Answer:</h4>
                <p>
                  If you fantasise about meeting each other and consenting to
                  this activity, then it would be appropriate.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <br />
        </div>
      ),
    },
  },
  {
    id: 5,
    title: "Innapropriate fantasy",
    description: {
      type: "content",
      content: (
        <div class="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Adult pornography</h4>
          <p>
            The internet has a vast range of adult pornographic material on
            offer and it gives you the chance to explore what you like, what you
            don’t like and the type of person you want to see engaging in sexual
            activity.
          </p>
          <p>
            Over time, what you view will start to create and develop your
            sexual preferences and sexual fantasies.
          </p>
          <p>
            Fantasies do not automatically lead to behaviours, but they do
            increase your likeliness of wanting to ‘play out’ particular
            fantasies.
          </p>
          <br></br>
          <h4 className="secondary-color">Illegal online sexual behaviour</h4>
          <p>
            Accessing child sexual abuse material (CSAM), or sexually
            communicating about or with children, can also shape your sexual
            fantasies.
          </p>
          <p>
            If you masturbate to these fantasies, especially to the point of
            ejaculation, this positively reinforces the sexual attraction.
          </p>
          <p>
            Masturbation to the point of ejaculation is extremely pleasurable,
            so over time, the things that we think about during masturbation are
            likely to be associated with feelings of arousal and sexual
            gratification.
          </p>
          <p>
            This means that masturbating to pictures of children or whilst
            engaged in sexual communication with or about a child increases the
            possibility of becoming aroused at the sight or thought of a child.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Will this make me commit a contact offence?
          </h4>
          <p>
            We are not saying that everyone who has accessed child sexual abuse
            material (CSAM), or who has sexually communicated with or about a
            child, or has masturbated to the thought of a child will go on to
            commit a contact offence.
          </p>
          <p>
            But, if you are masturbating to a fantasy or an image of a child,
            then this is going to develop your sexual preferences, just as adult
            pornography would, but in a very unhealthy and illegal way.
          </p>
          <p>
            Although you may not believe this to be an option, under new and
            unknown circumstances, you don’t know how you might act on that
            arousal.
          </p>
          <p>
            People also rehearse things they want to do and build confidence
            through their fantasies. You might not be thinking about enacting
            your fantasies now, but over time, your confidence and urge to act
            on them may increase, especially if you find that you are not
            getting the same level of pleasure from the fantasy; you may find
            you want to do something to increase the "buzz".
          </p>
          <p>
            Now, using Exercise 3, let’s take a look at one of your
            inappropriate fantasies.
          </p>
          <br></br>
          <h4 className="secondary-color">Exercise 3: Inappropriate fantasy</h4>
          <p>
            Have you recently had a fantasy about a child? If you have, then
            without thinking about it in too much detail, work through these
            questions one at a time and see if these help you think about your
            fantasies differently.
          </p>
          <p>1. Where is this fantasy situated?</p>
          <p>2. What are you doing there?</p>
          <p>3. Who else is there? What are they doing there?</p>
          <p>
            <h5 className="secondary-color">
              What this fantasy says about you
            </h5>
          </p>
          <p>4. What role does this fantasy place you in?</p>
          <p>
            5. How does this fantasy compare to the type of person you are
            generally?
          </p>
          <p>
            6. How does this fantasy compare to the type of person you want to
            be?
          </p>
          <p>7. How does the fantasy of the content compare to real life?</p>
          <p>
            <h5 className="secondary-color">
              What this fantasy says about how you view others
            </h5>
          </p>
          <p>8. How do you treat the people in the fantasy?</p>
          <p>9. How do they treat you?</p>
          <p>10. What if the roles were switched?</p>
          <p>
            <h5 className="secondary-color">
              What this fantasy says about your view of the world
            </h5>
          </p>
          <p>
            11. What sort of world would it be if you or other people were able
            to act on this fantasy?
          </p>
          <p>12. Is this really the type of world you’d like to live in?</p>
          <p>
            13. What is the likelihood of your fantasy ‘expectations’ being met
            and would you want them to be met?
          </p>
          <p>
            14. What would your close friends and family feel about this
            fantasy? What would they think?
          </p>
          <p>
            15. How would you feel if your son or your daughter acted out this
            fantasy with another adult?
          </p>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: 6,
    title: "Fantasy management",
    description: {
      type: "content",
      content: (
        <div class="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Fantasy management</h4>
          <p>
            So you have identified which of your sexual fantasies are
            inappropriate. But how do you manage them?
          </p>
          <p>
            For some people this will be easy, but for others it will take time,
            hard work, willpower and self-control. You are not alone if you feel
            it is too hard to control these fantasies, but you are in control of
            your thoughts and feelings and you can make a choice as to how much
            attention you choose to give to them.
          </p>
          <p>
            Many individuals use fantasy management techniques to help manage
            having these harmful sexual fantasies.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Exercise 4: Use a fantasy management technique
          </h4>
          <p>
            Have a read through the techniques below. Next time you have a
            harmful sexual fantasy, you need to try and use one of these to help
            you stop. The more you use these, the more you will learn what works
            more effectively for you. It may be that you need to rehearse them
            or use a combination of these to get it just right.
          </p>
          <p>
            <h5 className="secondary-color">1. Challenging your thoughts</h5>
            ‘Why am I having this fantasy; what good is it actually going to do
            me?’ These are examples of questions you can ask and challenge
            yourself with. Be firm with yourself.
          </p>
          <p>
            You could also ask about the consequences to implant fear. ‘What
            would happen if someone walked in and could see what I was
            fantasising about?’ ‘I know if I keep having this fantasy, I am more
            likely to look at child sexual abuse material (CSAM); what are the
            consequences if I was caught?’
          </p>
          <p>
            <h5 className="secondary-color">2. Fantasy replacement</h5>
            Change the ending or the subject of your fantasy. For example, if
            you are beginning to indulge in fantasy about a child you have seen
            in an illegal image or communicated with online, change the child to
            an adult. In contrast, try a different fantasy all together which is
            new and exciting…. and legal!
          </p>
          <p>
            <h5 className="secondary-color">3. Fantasy blocker</h5>
            Imagine someone walking in to your fantasy and catching you. This
            person has to be someone who you would never want to find out, like
            a close friend or family member. Or maybe the police.
          </p>
          <p>
            <h5 className="secondary-color">4. Escape route</h5>
            Sometimes we need to remove ourselves from the situation in which we
            are fantasising. Get up, get out of that room, leave the house if
            you have to. Go anywhere that stops you from having that sexual
            fantasy. Put yourself around people so that you can’t masturbate.
          </p>
          <p>
            <h5 className="secondary-color">5. Active distraction</h5>
            Do something that prevents you from thinking about a fantasy. This
            could be reading, watching TV, going for a walk. It could be ringing
            a friend and going out for coffee, or doing a fun activity. Anything
            that takes your thoughts away from that fantasy.
          </p>
          <p>
            <h5 className="secondary-color">6. Urge surfing</h5>
            Imagine your fantasy as being like a giant wave. It will build and
            build to a peak and then suddenly go the other way and decline in
            intensity. If you do not masturbate, eventually the urge to do so
            will go away. This happens with all urges, not just sexual urges;
            for example if you are craving chocolate, eventually this craving
            will go away. Urges never stay.
          </p>
          <p>
            <h5 className="secondary-color">7. Sensory Blocker</h5>
            This is where you use a strong smell or bad taste when you’re
            struggling with a sexual fantasy or the urge to masturbate. After
            exposing yourself to the unpleasant smell or tastes, it’s likely
            your arousal will drop and the sexual urge will stop or become more
            manageable. Do not to eat anything that isn’t intended for human
            consumption or is harmful, instead use particular tastes that you
            dislike or find unpleasant (i.e. liquorice, durian candies,
            eucalyptus etc.). We recommend you talk this through with one of our
            Helpline practitioners, or another qualified professional.
          </p>
          <p>
            <h5 className="secondary-color">8. Self-care</h5>
            Eating well, exercising, sleeping and relaxation; all of these
            contribute to a happier, healthier you. If you ensure all these are
            in check, you will find managing sexual fantasies much easier. You
            might find it helpful to visit our&nbsp;{" "}
            <Link className="secondary-color" to="/self-care">
              self-care{" "}
            </Link>{" "}
            &nbsp;module and create a self-care plan.
          </p>
          <p>
            <h5 className="secondary-color">9. Praise your success</h5>
            The most important thing is to praise yourself for your success. If
            you are able to stop a particular fantasy, congratulate yourself.
            Treat yourself to something nice to eat or do something you enjoy.
            Stopping fantasies can be difficult, especially if you are used to
            having them, so you need to give yourself credit for that.
          </p>
          <br></br>
          <h4 className="secondary-color">
            What do I do if my sexual preference is children?
          </h4>
          <p>
            We understand that some people have no sexual interest in adults.
            They often report an exclusive and life-long sexual interest in
            pre-pubescent or pubescent children. If this is true of you, then we
            understand that asking you to replace a child in a fantasy with an
            adult may not work for you.
          </p>
          <p>
            Rather than try and change your sexual interest, your task is to
            learn how best to manage your sexual thoughts, feelings and
            fantasies. Of course there are no easy answers but the aim is to try
            and reduce both the frequency of your sexual fantasies and their
            intensity. We hope the suggestions and advice below are helpful:
          </p>
          <ul className="content-list">
            <li>
              <strong>Try to&nbsp;avoid sexual fantasies about children</strong>
              &nbsp;when masturbating. Of course this can be difficult,
              especially if you are not attracted to adults. To help, try
              focusing your attention exclusively on the physical sensations you
              experience while masturbating. Experiment with different
              sensations e.g. use of lubricants.
            </li>
            <li>
              <strong>Reduce the amount of time</strong>&nbsp;spent thinking or
              fantasising about children in a sexual way. The more time you
              spend having sexual fantasies about children, the more these
              thoughts will govern your mental and sexual life. So, the less
              time you spend thinking about children in a sexual way, the
              better.
            </li>
            <li>
              <strong>Develop a busy day-to-day lifestyle</strong>&nbsp;with a
              range of activities and interests that hold your attention. The
              more our minds are focused on things that we find engaging and
              rewarding, the less time we spend thinking about sexual things.
              This helps people feel more in control of their sexual thinking.
              And, of course, it helps people feel better about their lives more
              generally.
            </li>
            <li>
              Try and&nbsp;<strong>spend time with others</strong>. People tend
              not to day-dream, or have sexual fantasies, when they are
              interacting with others, for example, at work or when socialising.
              Their minds are otherwise occupied.
            </li>
            <li>
              If you are aware that you use sexual fantasies as a way of coping
              with other things in your life e.g. an escape from things that are
              worrying you or as a way to relax,&nbsp;
              <strong>find other ways of coping</strong>&nbsp;with these things.
              This will help you reduce the frequency of your sexual fantasies.
            </li>
            <li>
              <strong>Self-care</strong> is important too. If you feel OK about
              yourself, you are less likely to use sexual fantasies as a prop
              for your emotional health. Mindfulness is a technique that has
              been shown to improve people’s mental health and resilience.
            </li>
            <li>
              <strong>Don’t beat yourself up</strong>. For many people, it
              simply does not feel realistic to never have sexual fantasies
              about children or to never masturbate. Mindfulness can help people
              come to terms with their feelings about this. Compassion and
              self-acceptance is a better mindset than one of despair and
              resignation.
            </li>
          </ul>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: 7,
    title: "Reflection",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <div class="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <ul>
            <li>What fantasy management techniques have I already used?</li>
            <li>What have been most effective for me?</li>
            <li>
              How will I incorporate other fantasy management techniques into my
              day to day life?
            </li>
          </ul>
          <br />
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.{" "}
          </p>
          <ReflectionQuestion
            id="understanding_fantasies"
            value={responses.understanding_fantasies}
            onChange={onQuestionChange}
          >
            I now have a better understanding of my current sexual and
            non-sexual fantasies.
          </ReflectionQuestion>
          <ReflectionQuestion
            id="fantasies_and_behaviour"
            value={responses.fantasies_and_behaviour}
            onChange={onQuestionChange}
          >
            I now have a better understanding of the link between my fantasies
            and my online behaviour.
          </ReflectionQuestion>
        </div>
      ),
    },
  },
];

export default FantasyModuleData;

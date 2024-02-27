import { css, useTheme } from "@emotion/react";
import React from "react";
import { Heading, SubHeading } from "../../ui";
import SkillsList from "./SkillsList";
import { fadeRight } from "../../../lib/animation";
const languages = [
  {
    name: "JavaScript (ES6)",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS/Sass",
  },
  {
    name: "TypeScript",
  },
];

const libraries = [
  {
    name: "React",
  },
  {
    name: "Node.js",
  },
  {
    name: "Next.js",
  },
  {
    name: "Styled Components",
  },
  {
    name: "Express",
  },
  {
    name: "Nest.js",
  },
  {
    name: "Material UI",
  },
];
const tools = [
  {
    name: "Git",
  },
  {
    name: "Github",
  },
  {
    name: "Webpack",
  },
  {
    name: "Netlify",
  },
];

const design = [
  {
    name: "Figma",
  },
  {
    name: "Photoshop",
  },
  {
    name: "Illustrator",
  },
];
const MySkills = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        ${theme.mq()[2]} {
          max-width: 50%;
        }
      `}
    >
      <Heading mb={4} color="light" variant={fadeRight({ delay: 0.1 })}>
        My Skills
      </Heading>
      <div
        css={css`
          ${theme.mq()[1]} {
            display: flex;
            gap: 2rem;
            padding-top: 2.5rem;
          }
        `}
      >
        <div>
          <SubHeading mb={2} color="light" variant={fadeRight({ delay: 0.2 })}>
            Programming Languages
          </SubHeading>
          <SkillsList data={languages} />
          <SubHeading mb={2} color="light" variant={fadeRight({ delay: 0.2 })}>
            Libraries & Frameworks
          </SubHeading>
          <SkillsList data={libraries} />
        </div>
        <div>
          <SubHeading mb={2} color="light" variant={fadeRight({ delay: 0.2 })}>
            Tools & Platforms
          </SubHeading>
          <SkillsList data={tools} />
          <SubHeading mb={2} color="light" variant={fadeRight({ delay: 0.2 })}>
            Design
          </SubHeading>
          <SkillsList data={design} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;

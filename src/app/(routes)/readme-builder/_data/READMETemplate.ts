export type READMETemplateProps = {
    label: string;
    content: string;
};

export const READMETemplate: READMETemplateProps[] = [
    {
        label: "Title and Description",
        content: `
# Project Title

A brief description of what this project does and who it's for
`.trim(),
    },
    {
        label: "Tech stack",
        content: `
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express
`.trim(),
    },
    {
        label: "Contributions",
        content: `
# Contributors

| Name     | Role     |
| :-------- | :------- |
| \`name\` | \`role\` |
`.trim(),
    },
];

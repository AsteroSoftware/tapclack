import { Resource, Category } from './types';

export const categories: Category[] = [
  { id: 'getting-started', name: 'Getting Started' },
  { id: 'version-control', name: 'Git & Version Control' },
  { id: 'best-practices', name: 'Best Practices & Wisdom' },
  { id: 'tools', name: 'Developer Tools' },
  { id: 'coding-challenges', name: 'Coding Challenges' },
  { id: 'cs-foundations', name: 'CS Foundations' },
  { id: 'career', name: 'Career Prep' }
];

export const resources: { [key: string]: Resource[] } = {
  'getting-started': [
    {
      title: "Don't Ask to Ask",
      description: "Explains why you should just ask your question instead of asking if you can ask.",
      link: "https://dontasktoask.com/",
      image: "/images/resources/dontasktoask.png"
    },
    {
      title: "How to Ask Questions the Smart Way",
      description: "Guide on how to ask technical questions effectively.",
      link: "http://www.catb.org/~esr/faqs/smart-questions.html"
    },
    {
      title: "No Hello",
      description: "Please don't say just hello in chat.",
      link: "https://nohello.net/",
      image: "/images/resources/nohello.png"
    },
    {
      title: "The XY Problem",
      description: "The XY Problem is a common issue in software development where a developer asks for help with a problem, but instead of providing the specific issue they're facing, they explain the broader context or the solution they've already tried.",
      link: "https://xyproblem.info/"
    }
  ],
  'version-control': [
    {
      title: "Oh Shit, Git!?!",
      description: "Helps you out of your Git messes.",
      link: "https://ohshitgit.com/",
      image: "/images/resources/ohshitgit.jpg"
    },
    {
      title: "Dangit, Git!?!",
      description: "A swear free version of Oh Shit, Git!?!",
      link: "https://dangitgit.com/",
      image: "/images/resources/dangitgit.jpg"
    },
    {
      title: "Learn Git Branching",
      description: "Interactive tool for mastering Git branching and merging.",
      link: "https://learngitbranching.js.org/"
    }
  ],
  'best-practices': [
    {
      title: "Grug Brain Developer",
      description: "A humorous take on software development principles.",
      link: "https://grugbrain.dev/",
      image: "/images/resources/grug.png"
    },
    {
      title: "eXtreme Go Horse (XGH) Process",
      description: "A satirical software development methodology that humorously captures common anti-patterns.",
      link: "https://gist.github.com/banaslee/4147370",
      image: "/images/resources/xgh.png"
    }
  ],
  'tools': [
    {
      title: "Stack Overflow",
      description: "Q&A platform for programmers.",
      link: "https://stackoverflow.com/",
      image: "/images/resources/stackoverflow.png"
    },
    {
      title: "Cosmos",
      description: "Custom keyboard configurator.",
      link: "https://ryanis.cool/cosmos/",
    }
  ],
  'coding-challenges': [
    {
      title: "LeetCode",
      description: "Practice coding interview questions.",
      link: "https://leetcode.com/",
      image: "/images/resources/leetcode.png"
    },
    {
      title: "Advent of Code",
      description: "Annual coding challenge during December.",
      link: "https://adventofcode.com/",
      image: "/images/resources/adventofcode.png"
    }
  ],
  'cs-foundations': [
    {
      title: "Big-O Cheat Sheet",
      description: "Big-O complexities of common algorithms used in Computer Science.",
      link: "https://www.bigocheatsheet.com/",
      image: "/images/resources/bigo.png"
    },
    {
      title: "CS50: Introduction to Computer Science",
      description: "Harvard's popular introductory course to computer science.",
      link: "https://cs50.harvard.edu/",
      image: "/images/resources/cs50.png"
    }
  ],
  'career': [
    {
      title: "Tech Interview Handbook",
      description: "Carefully curated free content to help you ace your next technical interview.",
      link: "https://techinterviewhandbook.org/",
      image: "/images/resources/techinterview.svg"
    }
  ]
};

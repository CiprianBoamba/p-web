import React, { useEffect } from 'react';
import '../App.css';
import TagCloud from 'TagCloud';

interface TextItem {
  text: string;
}
interface TagCloudOptions {
  radius: number;
  maxSpeed: 'normal' | 'slow' | 'fast' | undefined;
  initSpeed: 'normal' | 'slow' | 'fast' | undefined;
  keep: boolean;
}

const Skills: React.FC = () => {
  useEffect(() => {
    return () => {
      const container = document.querySelector(
        '.tagcloud'
      ) as HTMLElement | null;

      const texts: TextItem[] = [
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'SASS' },
        { text: 'JavaScript' },
        { text: 'React' },
        { text: 'TypeScript' },
        { text: 'Prisma ORM' },
        { text: 'WordPress' },
        { text: 'PHP' },
        { text: 'Jquery' },
        { text: 'ES6' },
        { text: 'GIT' },
        { text: 'MAMP' },
        { text: 'Problem Solving' },
        { text: 'Critical thinking' },
        { text: 'Next.js' },
      ];

      if (container) {
        const options: TagCloudOptions = {
          radius: 300,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          keep: true,
        };

        const textStrings = texts.map((item) => item.text);

        TagCloud(container, textStrings, options);
      }
    };
  }, []);

  return (
    <>
      <div className="text-shpere bg-slate-400 dark:bg-slate-600">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Skills;

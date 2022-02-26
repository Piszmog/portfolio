import { Prism } from '@mantine/prism';
import { Center } from '@mantine/core';
import { Language } from 'prism-react-renderer';
import React, { useEffect, useState } from 'react';
import { bash, cpp, go, jsx, makefile, python } from './codeStrings';
import Typist from 'react-typist';

type HelloCodeProps = {
  style?: React.CSSProperties;
};

const HelloCode = ({ style }: HelloCodeProps) => {
  const [lang, setLang] = useState(nextLang());
  const [count, setCount] = useState(1);
  useEffect(() => setCount(1), [count]);

  const onTypingDone = () => {
    setLang(nextLang(lang.language));
    setCount(0);
  };

  return (
    <Center style={style}>
      <TypistCode count={count} language={lang.language} codeString={lang.code} onTypingDone={onTypingDone} />
    </Center>
  );
};

type TypistCodeProps = {
  count: number;
  language: Language;
  codeString: string;
  onTypingDone?: () => void;
};

const TypistCode = ({ count, language, codeString, onTypingDone }: TypistCodeProps) => {
  return (
    <Typist key={count} avgTypingDelay={15} cursor={{ show: false }} onTypingDone={onTypingDone}>
      <Prism
        language={language}
        noCopy
      >
        {codeString}
      </Prism>
      <Typist.Backspace count={codeString.length} delay={1200} />
    </Typist>
  );
};

const nextLang = (current?: Language): SelectedLanguage => {
  switch (current) {
    case 'jsx':
      return { language: 'go', code: go };
    case 'go':
      return { language: 'bash', code: bash };
    case 'bash':
      return { language: 'python', code: python };
    case 'python':
      return { language: 'cpp', code: cpp };
    case 'cpp':
      return { language: 'makefile', code: makefile };
    case 'makefile':
      return { language: 'jsx', code: jsx };
    default:
      return { language: 'jsx', code: jsx };
  }
};

type SelectedLanguage = {
  language: Language;
  code: string;
};

export default HelloCode;

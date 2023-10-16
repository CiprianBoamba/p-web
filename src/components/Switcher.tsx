import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import useDarkSide from '../Hooks/useDarkSide';

const MyToggle: React.FC = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light');

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <Switch
      checked={darkSide}
      onChange={toggleDarkMode}
      className={`${
        darkSide ? 'bg-emerald-700' : 'bg-gray-400'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          darkSide ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default MyToggle;

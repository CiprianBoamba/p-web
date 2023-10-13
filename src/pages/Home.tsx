import React from 'react';
import { Button } from '@material-tailwind/react';

const HomePage = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl font-bold">homepage</h1>
      <Button>Button</Button>
    </div>
  );
};

export default HomePage;

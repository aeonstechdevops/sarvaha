import React from "react";

const PrimaryColors = () => (
  <div className="flex items-center gap-4">
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-primary-1">
      Primary 1
    </div>
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-primary-2">
      Primary 2
    </div>
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-primary-3">
      Primary 3
    </div>
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-primary-4">
      Primary 4
    </div>
  </div>
);

const SecondaryColors = () => (
  <div className="flex items-center gap-4">
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-secondary-1">
      Secondary 1
    </div>
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-secondary-2">
      Secondary 2
    </div>
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-secondary-3">
      Secondary 3
    </div>
    <div className="p-4 items-center justify-center flex text-background h-48 aspect-square bg-secondary-4">
      Secondary 4
    </div>
  </div>
);

const Typography = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center text-nowrap">
      <h1>Heading 1</h1>
      <h1 className="text-light-text">Heading 1 - Light</h1>
    </div>
    <div className="flex gap-4 items-center overflow-x-auto">
      <h2>Heading 2</h2>
      <h2 className="text-light-text">Heading 2 - Light</h2>
    </div>
    <div className="flex gap-4 items-center overflow-x-auto">
      <p>Body text 1</p>
      <p className="text-light-text">Body text 1</p>
    </div>
    <div className="flex gap-4 items-center overflow-x-auto">
      <p className="text-body-text-2 font-body-font-weight-2">Body text 2</p>
      <p className="text-body-text-2 font-body-font-weight-2 text-light-text">
        Body text 2
      </p>
    </div>
  </div>
);
const Design = () => {
  return (
    <div className="w-[80%] mx-auto py-10 relative overflow-hidden flex flex-col gap-6">
      <PrimaryColors />
      <SecondaryColors />
      <Typography />
    </div>
  );
};

export default Design;

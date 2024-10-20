import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function GlobeButton() {
  const [effectI18N, setEffectI18N] = useState(false);

  return (
    <div>
      <button
        type="button"
        onMouseDown={() => {
          setEffectI18N(true);
        }}
        onMouseUp={() => setEffectI18N(false)}
        className={`${
          effectI18N &&
          'duration-400 animate-click hover:translate-x-0.5  hover:translate-y-0.5 hover:shadow-neubrutalism-sm '
        } inline-flex items-center justify-center 
          border
        border-dark-bg
          p-2.5
          text-sm 
          font-bold 
          shadow-neubrutalism-sm 
          transition 
          duration-300 
          ease-in-out
          hover:-translate-x-0.5  hover:-translate-y-0.5  text-black  hover:text-customOrange
          hover:shadow-neubrutalism-md hover:bg-zinc-100
        dark:border-dark-third dark:bg-dark-second dark:text-dark-txt dark:hover:text-customOrange `}
      >
        <GlobeAltIcon className="h-5  w-5 md:h-5 md:w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

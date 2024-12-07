'use client';

import { useGlobalContext } from '@/context/GlobalContext';

export default function Notification() {
  const { isListFull, isAlreadyInList, closeNotification, isNotificationVisible } = useGlobalContext();

  const handleExit = () => {
    closeNotification();
  };

  if (!isNotificationVisible) return null;

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-75 p-2 lg:p-5'>
      <div className='w-full h-1/2 md:w-[70%] lg:w-[40%] border-2 rounded-xl border-black bg-gray-100 px-8 text-black flex flex-col items-center justify-center text-center'>
          {isListFull &&
            <h2 className='mb-6'>This list already has 10 items. Please remove some in order to add more.</h2>
          }

          {isAlreadyInList &&
            <h2 className='mb-6'>This item is already in your list.</h2>
          }
        <button className='border border-dashed rounded-full border-black px-7 py-1 text-black' onClick={handleExit}>
          <p>Exit</p>
        </button>
      </div>
    </div>
  )

};
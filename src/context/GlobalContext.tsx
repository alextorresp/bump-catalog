'use client';

import React, { useState, createContext, useContext, useEffect, ReactNode, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation'
import { GlobalState } from '@/utils/types';

// Context 
export const GlobalContext = createContext<GlobalState  | undefined>(undefined);

// Provider 
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Helper function to retreive items from local storage
  const getFromLocalStorage = <T extends any>(key: string, defaultValue: T): T => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  };

  // States to keep track of
  const [userName, setUserName] = useState<string>(getFromLocalStorage('userName', ''));
  const [topArtists, setTopArtists] = useState<number[]>(getFromLocalStorage('topArtists', []));
  const [topAlbums, setTopAlbums] = useState<number[]>(getFromLocalStorage('topAlbums', []));
  const [topTracks, setTopTracks] = useState<number[]>(getFromLocalStorage('topTracks', []));
  const [isListFull, setIsListFull] = useState<boolean>(false);
  const [isAlreadyInList, setIsAlreadyInList] = useState<boolean>(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

  // Update each individual state to local storage
  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName));
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('topArtists', JSON.stringify(topArtists));
  }, [topArtists]);

  useEffect(() => {
    localStorage.setItem('topAlbums', JSON.stringify(topAlbums));
  }, [topAlbums]);

  useEffect(() => {
    localStorage.setItem('topTracks', JSON.stringify(topTracks));
  }, [topTracks]);

  // Reset notification states on page navigation
  useEffect(() => {
    const handleRouteChange = () => {
      closeNotification();
    };

    handleRouteChange();
  }, [pathname]);

  // Functions
  const addToListHelper = (list: number[], setList: React.Dispatch<React.SetStateAction<number[]>>, id: number, limit: number) => {
    if (list.length === limit) {
      setIsListFull(true);
      setIsNotificationVisible(true);
    } else if (list.includes(id)) {
      setIsAlreadyInList(true);
      setIsNotificationVisible(true);
    } else {
      setList((prevList) => [...prevList, id]);
    }
  };  

  const addToList = useCallback((type: string, id: number) => {
    if (isNotificationVisible) {
      return
    };

    if (type === 'artist' || type === 'artists') {
      addToListHelper(topArtists, setTopArtists, id, 10);
    } else if (type === 'album' || type === 'albums') { 
      addToListHelper(topAlbums, setTopAlbums, id, 10);
    } else if (type === 'track' || type === 'tracks') {
      addToListHelper(topTracks, setTopTracks, id, 10);
    };
  }, [addToListHelper]);

  const closeNotification = () => {
    setIsNotificationVisible(false);
    setIsAlreadyInList(false);
    setIsListFull(false);
  };

  const removeFromList = (() => {
    if (isNotificationVisible) {
      return
    };
  });

  return <GlobalContext.Provider value={{
    userName,
    topArtists,
    topAlbums,
    topTracks,
    isListFull, 
    isAlreadyInList,
    isNotificationVisible,
    removeFromList,
    // reorderList,
    setUserName,
    addToList,
    closeNotification,
  }}>
    {children}
  </GlobalContext.Provider>
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be wrapped in a Provider');
  };
  return context;
};
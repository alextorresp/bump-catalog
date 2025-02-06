'use client';

import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CatelogItem, GlobalState, ItemType } from '@/utils/types';

// Context 
export const GlobalContext = createContext<GlobalState  | undefined>(undefined);

// Provider 
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // Helper function to retreive items from local storage
  const getFromLocalStorage = <T extends any>(key: string, defaultValue: T): T => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    };
    return defaultValue;
  };

  // States to keep track of
  const [userName, setUserName] = useState<string>(getFromLocalStorage('userName', ''));
  const [topArtists, setTopArtists] = useState<CatelogItem[]>(getFromLocalStorage('topArtists', []));
  const [topAlbums, setTopAlbums] = useState<CatelogItem[]>(getFromLocalStorage('topAlbums', []));
  const [topTracks, setTopTracks] = useState<CatelogItem[]>(getFromLocalStorage('topTracks', []));
  const [isListFull, setIsListFull] = useState<boolean>(false);
  const [isAlreadyInList, setIsAlreadyInList] = useState<boolean>(false);
  const [errorFetching, setErrorFetching] = useState<boolean>(false);
  const [addingToList, setAddingToList] = useState<boolean>(false);
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
    closeNotification();
  }, [pathname]);

  // Functions
  // Adds an item to a list
  const addToList = (type: string, item: CatelogItem): boolean => {
    if (isNotificationVisible) return false;

    let list: CatelogItem[], setList: React.Dispatch<React.SetStateAction<CatelogItem[]>>
    // Filter what type the item is and what list it belong to
    if (type === 'artist') {
      list = topArtists;
      setList = setTopArtists;
    } else if (type === 'album') {
      list = topAlbums;
      setList = setTopAlbums;
    } else if (type === 'track') {
      list = topTracks;
      setList = setTopTracks;
    } else {
      return false;
    };

    // Check whether the item is already in the list or if the list is full
    const canProceed = addToListHelper(list, item.id, 10, type);

    // If neither, store the item in the list
    if (canProceed) {
      setList((prevList) => [...prevList, item]);
      return true;
    };
    return false;
  };

  // Check whether the item is already in the list or the list is full
  const addToListHelper = (
    list: CatelogItem[],
    id: number,
    limit: number,
    type: ItemType
  ): boolean => {
    if (list.length >= limit) {
      setIsListFull(true);
      setIsNotificationVisible(true);
      return false;
    };

    if (list.find(item => item.id === id)) {
      setIsAlreadyInList(true);
      setIsNotificationVisible(true);
      return false;
    };

    return true;
  };

  const closeNotification = () => {
    setIsNotificationVisible(false);
    setIsAlreadyInList(false);
    setIsListFull(false);
    setErrorFetching(false);
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
    addingToList,
    errorFetching,
    isNotificationVisible,
    removeFromList,
    setAddingToList,
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
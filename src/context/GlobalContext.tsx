'use client';

import React, { useState, createContext, useContext, useEffect, ReactNode, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation'
import getItemData from '../../app/api/data/getItemData';
import filterData from '@/utils/helpers';
import { Artist, Album, Track, CatelogItem, GlobalState, ItemType } from '@/utils/types';

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
  const fetchDataAndAddToList = async (
    id: number,
    type: ItemType,
    list: CatelogItem[],
    setList: React.Dispatch<React.SetStateAction<CatelogItem[]>>
  ): Promise<boolean> => {
    try {
      const data = await getItemData<Album | Track | Artist>(type, id);
      if (!data) throw new Error('Data not found');
  
      let filteredItem = filterData({ type, data });

      if (filteredItem) {
        const item = filteredItem as CatelogItem;
        setList((prevList) => [...prevList, item]);
      };
      
      return true;
    } catch (error) {
      console.error('Error adding to list:', error);
      closeNotification();
      return false;
    };
  };  

  // Check whether the item is already in the list or the list is full
  const addToListHelper = (
    list: CatelogItem[],
    setList: React.Dispatch<React.SetStateAction<CatelogItem[]>>,
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

  // Adds an item to a list
  const addToList = async (type: string, id: number): Promise<boolean> => {
    if (isNotificationVisible) return false;

    let list: CatelogItem[], setList: React.Dispatch<React.SetStateAction<CatelogItem[]>>, itemType: ItemType;
    // Filter what type the item is and what list it belong to
    if (type === 'artist') {
      list = topArtists;
      setList = setTopArtists;
      itemType = 'artist';
    } else if (type === 'album') {
      list = topAlbums;
      setList = setTopAlbums;
      itemType = 'album';
    } else if (type === 'track') {
      list = topTracks;
      setList = setTopTracks;
      itemType = 'track';
    } else {
      return false;
    };

    // Check whether the item is already in the list or if the list is full
    const canProceed = addToListHelper(list, setList, id, 10, itemType);

    // If neither, fetch the data and store it in the list
    if (canProceed) {
      return await fetchDataAndAddToList(id, itemType, list, setList);
    };
    return false;
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
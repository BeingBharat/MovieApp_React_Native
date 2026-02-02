import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie } from '../api/types';
import { getUpcomingMovies } from '../api/tmdbAPI';
import VerticalList from '../component/verticalList';
import { updatedArr } from '../utility/utils';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Upcoming() {
  const [data, setData] = useState<Movie[]>([]);

 useEffect(() => {
    async function fetchData() {
      try {
      
        const upcoming = await getUpcomingMovies();
        setData(updatedArr(upcoming));
       
      } catch (error) {
        console.error('Failed to fetch upcoming movies:', error);
      }
    }

    fetchData();
  }, []); 

const onDelete = (val:Movie)=>{
  let newData = [...data.filter(element => element.id != val.id )]
  setData(newData)
}

  return (
    <SafeAreaView style={styles.safeArea}>
      <VerticalList title="Upcoming Movies" data={data} onDelete={onDelete}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})
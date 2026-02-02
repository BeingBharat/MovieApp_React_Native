import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../component/searchBar';
import { getnowPlayingMovies, searchMovies } from '../api/tmdbAPI';
import { updatedArr } from '../utility/utils';
import { Movie } from '../api/types';
import VerticalList from '../component/verticalList';

export default function Search() {
const [text,setText] = useState<string>("")
  const [data, setData] = useState<Movie[]>([]);
  const onSearch = (val:string)=>{
  
     setText(val)



  }
const searchMovie = async() =>{
const res =  await searchMovies(text)
  setData(updatedArr(res));

}
 useEffect(() => {
    async function fetchData() {
      try {
      
        const upcoming = await getnowPlayingMovies();
        setData(updatedArr(upcoming));
       
      } catch (error) {
        console.error('Failed to fetch upcoming movies:', error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <SearchBar value={text} onChangeText={onSearch} searchMovie={searchMovie} />
      </View>
      <VerticalList data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

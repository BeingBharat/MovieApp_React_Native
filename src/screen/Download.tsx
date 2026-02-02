import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMMKVString } from 'react-native-mmkv'
import { downloadKeyStorage } from '../constant/config'
import { SafeAreaView } from 'react-native-safe-area-context';
import VerticalList from '../component/verticalList';
import { formToJSON } from 'axios';
import { Movie } from '../api/types';

export default function Download() {

const [data,setData] = useMMKVString(downloadKeyStorage);



const onDelete = (val:Movie)=>{
  let newData = [...JSON.parse(data || "[]")?.filter((element:Movie) => element.id != val.id )]
  setData(JSON.stringify(newData))
}

  return (
  <SafeAreaView style={styles.safeArea}>
     <VerticalList title="Downloads" data={JSON.parse(data || "[]")} onDelete={onDelete}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})
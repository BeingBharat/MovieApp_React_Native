import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Movie } from '../api/types';

interface HorizontalViewProps {
  title: string;
  data: Movie[];
}

export default function HorizontalView({ title, data }: HorizontalViewProps) {
  const _renderItem = ({ item }: { item: Movie }) => {
    return (
      <View>
        <Image
          source={{ uri: item.poster_path }}
          style={styles.posterImage}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        renderItem={_renderItem}
        data={data}
        keyExtractor={item => item.id?.toString()}
        contentContainerStyle={styles.listContent}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  posterImage: {
    width: 200,
    height: 150,
    borderRadius: 15,
  },
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
    paddingLeft: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContent: {
    gap: 15,
  },
});

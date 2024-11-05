import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

interface ArticleDetailsProps {
  route: {
    params: {
      article: {
        title: string;
        description: string;
        urlToImage: string | null;
        content: string;
      };
    };
  };
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ route}) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
        <View>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
});

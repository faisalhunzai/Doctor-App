import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  Share,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string | null;
  content: string;
  likes: number;
  comments?: string[];
}

const HomeScreen = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");
  const [isModalVisible, setModalVisible] = useState<boolean>(false); // Modal visibility
  const [selectedArticleIndex, setSelectedArticleIndex] = useState<
    number | null
  >(null); // Track article index for commenting

  const API_KEY = "665d949d48b94646b0d1f3108ef8bdd2";
  const data = [
    { label: "General", value: "general" },
    { label: "Business", value: "business" },
    { label: "Technology", value: "technology" },
  ];

  const fetchNews = async (category = "general") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );
      const articlesWithLikes = response.data.articles.map((article: any) => ({
        ...article,
        likes: 0,
        comments: [],
      }));
      setNews(articlesWithLikes);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (selectedValue) {
      fetchNews(selectedValue);
    }
  }, [selectedValue]);

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLike = (index: number) => {
    const updatedNews = [...news];
    updatedNews[index].likes += 1;
    setNews(updatedNews);
  };

  const handleComment = (index: number) => {
    setSelectedArticleIndex(index);
    setModalVisible(true);
  };

  const submitComment = () => {
    if (selectedArticleIndex !== null) {
      const updatedNews = [...news];
      updatedNews[selectedArticleIndex].comments?.push(commentText);
      setNews(updatedNews);
      setCommentText("");
      setModalVisible(false);
    }
  };

  const handleShare = async (article: NewsArticle) => {
    try {
      await Share.share({
        message: `${article.title}\n\n${article.description}\n\nRead more: ${
          article.urlToImage || "No URL available"
        }`,
      });
    } catch (error) {
      console.error("Error sharing article:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a Comment</Text>
            <TextInput
              placeholder="Type your comment here..."
              style={styles.commentInput}
              value={commentText}
              onChangeText={setCommentText}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button title="Submit" onPress={submitComment} />
              <Button
                title="Close"
                onPress={() => setModalVisible(false)}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Category"
          value={selectedValue}
          onChange={(item) => setSelectedValue(item.value)}
        />

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search by title"
            style={styles.searchInput}
            placeholderTextColor="black"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.article}>
              <TouchableOpacity
                onPress={() => router.push("ArticleDetails", { article: item })}
              >
                {item.urlToImage ? (
                  <Image
                    source={{ uri: item.urlToImage }}
                    style={styles.image}
                  />
                ) : (
                  <Text style={styles.noImageText}>No Image Available</Text>
                )}
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>

              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  onPress={() => handleLike(index)}
                  style={styles.actionButton}
                >
                  <FontAwesome name="thumbs-up" size={20} color="#007BFF" />
                  <Text style={styles.actionText}>{item.likes} Likes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleComment(index)}
                  style={styles.actionButton}
                >
                  <FontAwesome name="comment" size={20} color="#007BFF" />
                  <Text style={styles.actionText}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleShare(item)}
                  style={styles.actionButton}
                >
                  <FontAwesome name="share" size={20} color="#007BFF" />
                  <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dropdown: {
    width: "45%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  searchInput: { flex: 1, fontSize: 16, color: "black" },
  loader: { marginTop: 20 },
  article: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  title: { fontSize: 16, fontWeight: "bold" },
  image: { width: "100%", height: 200, resizeMode: "cover", marginBottom: 10 },
  noImageText: { fontSize: 14, color: "#888", marginBottom: 10 },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  actionButton: { flexDirection: "row", alignItems: "center" },
  actionText: { marginLeft: 5, fontSize: 14, color: "#007BFF" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  commentInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});

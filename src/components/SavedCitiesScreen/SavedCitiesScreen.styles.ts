import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181A",
    paddingTop: 32,
    alignItems: "center",
  },
  searchBlock: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE0D3",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: "85%",
    alignSelf: "center",
    marginBottom: 22,
  },
  arrowBack: {
    marginRight: 6,
    padding: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: "#222",
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 6,
  },
  searchIcon: {
    fontSize: 20,
    color: "#222",
    marginLeft: 4,
    marginRight: 2,
  },
  cityList: {
    width: "100%",
    alignItems: "center",
  },
  cityButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 14,
    alignSelf: "center",
    minWidth: "85%",
    elevation: 2,
  },
  cityButtonActive: {
    // Можно добавить рамку или тень для выделенного города, если нужно
  },
  cityText: {
    fontSize: 22,
    color: "#222",
    marginLeft: 8,
    fontWeight: "400",
  },
  cityTextActive: {
    fontWeight: "700",
    color: "#222",
  },
});
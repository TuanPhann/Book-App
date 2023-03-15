import { List, Stack, Text } from "@mantine/core";
import { useQuery } from "@apollo/client";
import { GET_BOOK_DETAIL } from "../graphqlRequest/Request";

function BookDetail({ state }) {
  const { loading, error, data } = useQuery(GET_BOOK_DETAIL, {
    variables: {
      bookId: state,
    },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!!!!</p>;

  return (
    <Stack style={{ padding: 20, backgroundColor: "#92c5dd", borderRadius: 8 }}>
      {data.book === null ? (
        <Text>please select book...</Text>
      ) : (
        <>
          <Text>{data.book.name}</Text>
          <Text>{data.book.author.name}</Text>
          <Text>{data.book.author.age}</Text>
          <Text>All books by this author</Text>
          <List>
            {data.book.author.book.map((item, index) => (
              <List.Item key={index}>{item.name}</List.Item>
            ))}
          </List>
        </>
      )}
    </Stack>
  );
}

export default BookDetail;

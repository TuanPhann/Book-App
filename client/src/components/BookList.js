import { Grid, Text } from "@mantine/core";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphqlRequest/Request";
import BookDetail from "./BookDetail";
import { useState } from "react";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [state, setState] = useState();

  const handleShowBookdetail = (id) => {
    setState(id);
  };
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!!!!</p>;

  return (
    <Grid>
      <Grid.Col span={8}>
        <Grid>
          {data.books.map((item, index) => (
            <Grid.Col span={4} key={index}>
              <div
                onClick={() => handleShowBookdetail(item.id)}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                  borderRadius: 8,
                  padding: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Text>{item.name}</Text>
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
      <Grid.Col span={4}>
        <BookDetail state={state} />
      </Grid.Col>
    </Grid>
  );
}

export default BookList;

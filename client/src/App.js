import { Container, Grid, Stack, Title } from "@mantine/core";
import BookList from "./components/BookList";
import FormAddAuthor from "./components/FormAddAuthor";
import FormAddBook from "./components/FormAddBook";

function App() {
  return (
    <div className="App">
      <Container
        size="xl"
        style={{ backgroundColor: "#ccc", marginTop: 150, borderRadius: 8 }}
      >
        <Title
          style={{ textAlign: "center", marginBottom: 40, paddingTop: 30 }}
        >
          Book-App
        </Title>
        <Stack style={{ padding: "0 30px" }}>
          <Grid>
            <Grid.Col span={6}>
              <FormAddBook />
            </Grid.Col>
            <Grid.Col
              span={6}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <FormAddAuthor />
            </Grid.Col>
          </Grid>

          <BookList />
        </Stack>
      </Container>
    </div>
  );
}

export default App;

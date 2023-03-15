import { Button, Stack, TextInput } from "@mantine/core";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_BOOK, GET_AUTHOR, GET_BOOKS } from "../graphqlRequest/Request";
import { useForm } from "@mantine/form";

function FormAddBook() {
  const { loading, error, data } = useQuery(GET_AUTHOR);
  // eslint-disable-next-line no-unused-vars
  const [addBook, book] = useMutation(ADD_BOOK);

  const form = useForm({
    initialValues: {
      category: "",
      name: "",
      authorId: "",
    },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!!!!</p>;

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        addBook({
          variables: {
            category: values.category,
            name: values.name,
            authorId: values.authorId,
          },
          refetchQueries: [{ query: GET_BOOKS }],
        })
      )}
    >
      <Stack>
        <TextInput
          placeholder="Book name"
          value={form.values.name}
          onChange={(event) =>
            form.setFieldValue("name", event.currentTarget.value)
          }
        />
        <TextInput
          placeholder="Book category"
          value={form.values.category}
          onChange={(event) =>
            form.setFieldValue("category", event.currentTarget.value)
          }
        />
        <select
          value={form.values.authorId}
          onChange={(event) =>
            form.setFieldValue("authorId", event.currentTarget.value)
          }
        >
          <option value="" disabled>
            Select author
          </option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <Button type="submit">Add book</Button>
      </Stack>
    </form>
  );
}

export default FormAddBook;

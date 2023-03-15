import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../graphqlRequest/Request";

function FormAddAuthor() {
  // eslint-disable-next-line no-unused-vars
  const [addAuthor, { data, loading, error }] = useMutation(ADD_AUTHOR);
  const form = useForm({
    initialValues: {
      author: "",
      age: "",
    },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={form.onSubmit((values) =>
        addAuthor({
          variables: {
            age: values.age,
            name: values.author,
          },
        })
      )}
    >
      <Stack>
        <TextInput
          placeholder="Author name"
          value={form.values.author}
          onChange={(event) => {
            form.setFieldValue("author", event.target.value);
          }}
        />
        <TextInput
          placeholder="Author age"
          value={form.values.age}
          onChange={(e) => {
            form.setFieldValue("age", e.target.value);
          }}
        />
        <Group style={{ justifyContent: "flex-end" }}>
          <Button type="submit">Add author</Button>
        </Group>
      </Stack>
    </form>
  );
}

export default FormAddAuthor;

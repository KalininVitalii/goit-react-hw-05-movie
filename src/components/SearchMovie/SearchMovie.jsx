import { Form, Button } from './SearchMovie.styled';

export const SearchBox = ({ value, onInput, onFormSubmit }) => {
  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <input type="text" name="search" value={value} onInput={onInput} />
        <Button>Search</Button>
      </Form>
    </div>
  );
};

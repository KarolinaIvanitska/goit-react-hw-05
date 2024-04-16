import { Formik, Field, Form } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({ setUseSearchParams }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    setUseSearchParams({ query: values.query });
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="query"
            placeholder="Search..."
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;

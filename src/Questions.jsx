
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('search' || '')

  const filteredQuestion = questions?.filter((question) => question?.title.toLowerCase().includes(searchQuery?.toLowerCase()))

  return (
    <section className='container'>
      <h1>Questions</h1>
      <form action="">
        <label htmlFor="search">Search</label>
        <input type="search" name="search" id="search" />
      </form>
      {filteredQuestion?.length > 0 ? (
        filteredQuestion.map((question) => (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        ))
      ) : (
        questions?.map((question) => {
          return <SingleQuestion key={question.id} {...question}></SingleQuestion>
        })
      )}
    </section>
  );
};
export default Questions;

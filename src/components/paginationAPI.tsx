const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit } = props;
  const totalPages = props.response.totalPages - 1;
  const data = props.response.data;
  return <div></div>;
};

export default Pagination;

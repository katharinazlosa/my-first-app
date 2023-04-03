const Flex = () => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-container__one">
          <div>
            <img
              className="img"
              src="https://img.icons8.com/ios/40/null/xbox-x.png"
            />
            <span className="text">text</span>
          </div>
          <img
            className="img"
            src="https://img.icons8.com/ios/40/null/edit-row.png"
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-container__two">
          <span>text</span>
          <img
            className="img"
            src="https://img.icons8.com/ios/40/null/xbox-x.png"
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-container__three">
          <img
            className="img"
            src="https://img.icons8.com/ios/40/null/xbox-x.png"
          />
          <span>text</span>
        </div>
      </div>
    </>
  );
};

export default Flex;

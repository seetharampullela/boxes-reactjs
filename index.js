const Box = (props) => {
  //  Write your code here.
  const { styles1, content } = props;
  return <p className={styles1}>{content}</p>;
};

const element = (
  //  Write your code here.
  <div>
    <div>
      {" "}
      <h1 className="heading"> Boxes </h1>{" "}
    </div>
    <div className="box-container">
      <Box styles1="box1" content="Small" />
      <Box styles1="box2" content="Medium" />
      <Box styles1="box3" content="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

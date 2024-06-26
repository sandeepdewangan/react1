import Progress from "./Progress";

function Header({ index, numQuestions, points, maxPoints, status }) {
  return (
    <div className="header">
      <h1>REACT QUIZ!</h1>
      <Progress
        index={index}
        numQuestions={numQuestions}
        points={points}
        maxPoints={maxPoints}
        status={status}
      />
    </div>
  );
}

export default Header;

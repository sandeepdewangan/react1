import "./Progress.css";

function Progress({ index, numQuestions, points, maxPoints, status }) {
  if (status === "ready") return;
  return (
    <div className="progress">
      <h2>
        Questions: {index + 1}/{numQuestions} <br /> Points: {points}/
        {maxPoints}
      </h2>
    </div>
  );
}
export default Progress;

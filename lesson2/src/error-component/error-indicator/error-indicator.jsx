import "./error-indicator.css";
import Icon from "./death-star.png";

// interface MessageProps {
//   message: string;
// }
const ErrorIndicator = (props) => {
  return (
    <div className="error-indicator">
      <img src={Icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droinds to fix it)</span>
      <span>Message: {props.message}</span>
    </div>
  );
};

export default ErrorIndicator;

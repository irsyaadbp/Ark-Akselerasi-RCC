// import { useHistory } from "react-router-dom";

export default function Button({ text = "Title", handleClick = () => {} }) {
  // const history = useHistory();

  // history.push("/pagination")
  return <button onClick={handleClick}>{text}</button>;
}

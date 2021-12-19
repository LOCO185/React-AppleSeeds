import "./styles.css";
import { data } from "./data.js";

export default function Names() {
  console.log({ data });

  const getNames = (data) => {
    return data.map((element) => {
      return <h1>{element.name}</h1>;
    });
  };
  const getOldPeople = (data, year) => {
    return data.filter((element) => {
      return +element.birthday.slice(-4) <= year;
    });
  };
  return (
    <div className="Names">
      <h1>{getNames(data)}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

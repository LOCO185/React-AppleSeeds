import Box from "./Box";
import "./style.css";

export default function SlidingBoxes() {
  const boxArray = [
    {
      id: 0,
      size: "100px"
    },
    {
      id: 1,
      size: "75px"
    },
    {
      id: 2,
      size: "125px"
    },
    {
      id: 3,
      size: "150px"
    }
  ];
  return (
    <div>
      {boxArray.map((box) => {
        return <Box key={box.id} size={box.size} />;
      })}
    </div>
  );
}

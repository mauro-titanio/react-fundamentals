import useIsMobile from "../../hooks/useIsMobile";
import useNumber from "../../hooks/useNumber";

export default function ComponentA() {
  const number = useNumber();
  console.log("Component A: ", number);
  const isMobile = useIsMobile();
  console.log("Is mobile? ", isMobile);

  return (
    <div>
      <h1>Custom hooks</h1>
      <p>Is mobile? {isMobile ? "Yes!!" : "Nooo!"}</p>
    </div>
  );
}

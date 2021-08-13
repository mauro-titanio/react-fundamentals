import useNumber from "../../hooks/useNumber";

export default function ComponentB() {
  const number = useNumber();
  console.log("Component B: ", number);
  return <div></div>;
}

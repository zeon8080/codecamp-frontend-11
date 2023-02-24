export default function Checkbox() {
  const qqq2 = () => {
    alert("2클");
  };
  const qqq3 = (event) => {
    event.stopPropagation();
    alert("3클");
  };
  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}

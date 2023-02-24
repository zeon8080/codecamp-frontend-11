export default function HofPage(): JSX.Element {
  const onClickButton = (number: any) => () => {
    console.log(number);
  };

  return (
    <>
      <button onClick={onClickButton(123)}>버튼</button>
    </>
  );
}

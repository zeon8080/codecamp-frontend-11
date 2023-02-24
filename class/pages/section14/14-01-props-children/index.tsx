import Example from "../../../components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>+++++++++빨 파 초++++++++++</div>
      {/* 쏙 들어가기, 땡겨오기 */}
      <Example school="다람쥐초등학교">
        <div>
          <input type="text" />
          <div>저는 철수입니다.</div>
          <button>클릭 미</button>
        </div>
      </Example>
      <div>+++++++++빨 파 초++++++++++</div>
    </div>
  );
}

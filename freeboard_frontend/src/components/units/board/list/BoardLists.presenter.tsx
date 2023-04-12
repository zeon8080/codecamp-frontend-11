import PaginationBasic from "../../../commons/pagination/Basic/paginationBasic.container";
import * as S from "./BoardLists.styles";
import { v4 as uuidv4 } from "uuid";
import { IBoardListsUI } from "./BoardLists.types";

export default function BoardListsUI(props: IBoardListsUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ListsRowHead>
          <S.TitleSearch
            type="text"
            placeholder="제목을 검색해주세요."
            onChange={props.onChangeSearch}
          ></S.TitleSearch>
        </S.ListsRowHead>

        <div>
          <div>
            <S.ListsRow>
              <S.HeaderShort>NUMBER</S.HeaderShort>
              <S.HeaderLong>TITLE</S.HeaderLong>
              <S.HeaderShort>NAME</S.HeaderShort>
              <S.HeaderShort>DATE</S.HeaderShort>
            </S.ListsRow>
          </div>
          {props.data?.fetchBoards.map((el: any) => (
            <S.ListsWrapper key={el._id}>
              <S.ListsRow>
                <S.ContentShort>
                  {String(el._id).slice(-4).toUpperCase()}
                </S.ContentShort>
                <S.ContentsLong
                  id={el._id}
                  onClick={props.onClickMoveBoardDetail}
                >
                  {el.title
                    .slice(0, 20)
                    .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                    .split("!@#")
                    .map((el) => (
                      <span
                        key={uuidv4()}
                        style={{
                          color: el === props.keyword ? "#444f59" : "#2f3137",
                        }}
                      >
                        {el}
                      </span>
                    ))}
                </S.ContentsLong>
                <S.ContentShort>{el.writer.slice(0, 8)}</S.ContentShort>
                <S.ContentShort>{el.createdAt.slice(0, 10)}</S.ContentShort>
              </S.ListsRow>
            </S.ListsWrapper>
          ))}
          <S.ListsFooter>
            <PaginationBasic refetch={props.refetch} count={props.count} />
            <S.WriteButton onClick={props.onClickMoveBoard}>
              NEW POST
            </S.WriteButton>
          </S.ListsFooter>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}

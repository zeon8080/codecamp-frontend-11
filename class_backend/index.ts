// const qqq: string = "HELLO";

// console.log(qqq);

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API DOCS 만들기
const typeDefs = `#graphql


input CreateBoardInput {
  writer:String,
  title:String,
  contents: String
}


type MyBoard { 
  number:Int
  writer:String
  title:String
  contents:String
}

  type Query {
    fetchBoards:  [MyBoard]
  }

  type Mutation {
    # 연습용 example 방식
    # createBoard(writer: String, title: String, contents:String): String!
    # 그래프큐엘 스트링 = 대문자

    # 실무용 practice 방식
    createBoard(createBoardInput: CreateBoardInput): String!
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두꺼내기
      const result = await Board.find();
      console.log(result);

      // 한개 꺼내기
      // const result = await Board.findOne({ where: { number: 3 } });
      // console.log(result);
    },
  },
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,
        //하나하나 모두 입력하는 비효율적인 방식.....?
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "게시글 등록";
    },

    // updateBoard: async () => {
    //   //3번 게시글 영희로 바꿔
    //   await Board.update({ number: 3 }, { writer: "영희" });
    // },

    // deleteBoard: async () => {
    //   //3번 게시글 삭제.
    //   await Board.delete({ number: 3 });
    //   await Board.update({ number: 3 }, { isDeleted: true }); //3번 게시글 삭제했다 쳐  소프트딜리트
    //   // isDeleted가 초기값인 false면 삭제 안댐, true면 삭제 댐
    //   await Board.update({ number: 3 }, { deleteAt: new Date() }); //3번 게시글 삭제했다 쳐  소프트딜리트
    //   // deleteAt 초기값인 null이면 삭제 안된 거, new Date() 들어있으면 삭제된 거
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cors: true,

  // 선택한 사이트만 풀어주고 싶을 때
  // cors: {origin:"http://naver.com","http://coupang.com"}
  //
});

const AppDataSource = new DataSource({
  type: "postgres",
  //   host: "데이터베이스 깔린 컴퓨터 아이피 주소",
  host: "34.64.244.122",
  //  port: "데이터베이스 깔린 컴퓨터 포트",
  port: 5012,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다.");
    startStandaloneServer(server).then(() => {
      console.log("그래프큐엘 서버가 실행되었습니다."); //포트: 4000
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인: ", error);
  });

const getUsers = async (pageNum = 0) => {
   // fetch함수는 프로미스를 반환하는 대표적인 함수
   // 프로미스 : 아직 상태가 정해지지 않았지만 (pending, rejected, fulfilled)3개의 상태중의 하나가 약속된 객체
   const res = await fetch(`http://localhost:8080/api/admin?page=${pageNum}`);
   const data = await res.json(); //받아온 데이터를 JS가 활용가능하도록 가공
   //아래 콘솔문은 브라우서에서 CORS에러가 발생됨
   console.log(data);
 };
 
 getUsers(1);
 /*
   Cross Origin Domain policy
   다른 서버의 데이터를 클라이언트가 보안상 접근 불가한 정책
   - Cors를 풀려면 데이터를 제공하는 서버쪽에서 데이터 응답하는 클라이언트 서버에 권한 부여
 */
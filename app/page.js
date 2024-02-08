import Link from "next/link";
import Header from "@/components/header";

export default function Home() { //이건 클라이언트에서 실행 되는게 아니라 백에서 실행된다.
  //그러므로 console.log를 찍어도 client 에서는 보이지 않고 서버에서만 보임
  console.log("hello world and executing") // 클라이언트엔 보이지 않고 서버에서만 볼수 있음
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div>
        <Link href="/about">go to about page</Link> 
      </div>
    </main> //html 여기는 client에서 html 파일로 보인다. 
  );
}

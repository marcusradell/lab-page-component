import { Main } from "@/ui";

const data = { total: 10, sick: 5 };

export default function Home() {
  return (
    <Main>
      <h1>Sick report</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Main>
  );
}

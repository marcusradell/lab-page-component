import { Main, PageTitle } from "@/ui";

const data = { total: 10, sick: 5 };

export default function Home() {
  return (
    <Main>
      <PageTitle text="Sick report" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Main>
  );
}

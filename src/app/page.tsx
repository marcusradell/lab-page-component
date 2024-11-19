import { Page } from "@/ui";

const data = { total: 10, sick: 5 };

export default function Home() {
  return (
    <Page title="Sick Report">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Page>
  );
}

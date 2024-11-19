const data = { total: 10, sick: 5 };

export default function Home() {
  return (
    <>
      <h1>Sick report</h1>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

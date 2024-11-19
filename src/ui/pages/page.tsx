import { ReactNode } from "react";
import { PageTitle } from "../headings";
import { Main } from "../layouts";

type Props = { title: string; children: ReactNode };

export function Page({ title, children }: Props) {
  return (
    <Main>
      <PageTitle text={title} />
      {children}
    </Main>
  );
}

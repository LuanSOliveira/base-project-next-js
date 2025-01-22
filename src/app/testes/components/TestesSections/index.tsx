import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const TestesSections = ({ title, children }: Props) => {
  return (
    <section className="mb-8">
      <h1 className="font-bold mb-2 text-3xl">{title}</h1>
      {children}
    </section>
  );
};

export default TestesSections;

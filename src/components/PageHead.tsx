import Head from 'next/head';

interface PageHeadProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHead({ title, children }: PageHeadProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Aproveite todos os benefícios do clube de vantagens Staging"
        />
      </Head>
      {children}
    </>
  );
}

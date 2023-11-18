import Head from 'next/head';
import NavBar from './NavBar';
import Title from './Title';
import Image from 'next/image'

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Next Shop`}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <p>hhhh</p>
        <h1>ggggggg</h1>
        <Image
          src="/img/1.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}

export default Page;

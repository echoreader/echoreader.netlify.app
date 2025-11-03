import CustomHead from './Head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, globalData, meta }) {
  return (
    <>
      <CustomHead 
        title={meta?.title}
        description={meta?.description}
      />
      <Header name={globalData?.name} />
      <main className="w-full max-w-3xl mx-auto px-4 py-10 text-gray-800 bg-white">
        {children}
      </main>
      <Footer copyrightText={globalData?.footerText} />
    </>
  );
}

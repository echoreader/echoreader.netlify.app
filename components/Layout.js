import CustomHead from './Head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, globalData, meta, className  }) {
  return (
    <>
      <div className={className}>
        <CustomHead 
          title={meta?.title}
          description={meta?.description}
        />
        <Header name={globalData?.name} />
        <main className="flex-grow pt-16 px-4 max-w-4xl mx-auto">
          {children}
        </main>
        <Footer copyrightText={globalData?.footerText} />
      </div>
    </>
  );
}

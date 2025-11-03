export default function Disclaimer() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
        Disclaimer
      </h1>

      <section className="space-y-4 text-base leading-relaxed">
        <p>This blog is intended for informational purposes only. I make no guarantees about the completeness, reliability, or accuracy of the information presented.</p>

        <h2>1. No Professional Advice</h2>
        <p>The content on this blog does not constitute professional advice of any kind. Always seek qualified guidance for legal, financial, medical, or other matters.</p>

        <h2>2. Personal Opinions</h2>
        <p>All views expressed are my own and do not represent those of any organization or entity.</p>

        <h2>3. Limitation of Liability</h2>
        <p>I will not be liable for any losses or damages arising from the use of this blog or reliance on its content.</p>

        <h2>4. External Links</h2>
        <p>This blog may link to external websites. I do not control or endorse the content on those sites and am not responsible for any issues that may arise from their use.</p>
      </section>
    </>
  );
}

Disclaimer.meta = {
  title: 'Disclaimer',
  description: 'Read this disclaimer to understand the limitations of the information provided on this blog.',
};
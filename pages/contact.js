export default function Contact() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
        Contact
      </h1>

      <section className="space-y-4 text-base leading-relaxed">
        <p>If you have any questions, suggestions, or would like to get in touch, feel free to contact me using the information below.</p>

        <h2>Email</h2>
        <p>tom dot bisnis at gmail dot com</p>

        <h2>Feedback</h2>
        <p>I welcome constructive feedback and collaboration ideas. Please reach out if you would like to connect.</p>
      </section>
    </>
  );
}

Contact.meta = {
  title: 'Contact',
  description: 'Get in touch with me for questions, feedback, or collaboration opportunities.',
};
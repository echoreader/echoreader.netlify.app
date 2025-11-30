import Schema from '../components/Schema'; // ← tambahkan import

export default function About() {
  return (
    <>
      {/* === SCHEMA === */}
      <Schema type="organization"/>
      <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
        About CraftFlavor
      </h1>

      <section className="space-y-4 text-base leading-relaxed">
        <p>
          CraftFlavor celebrates creativity in the kitchen and beyond. From DIY projects and food crafts to cooking hacks and global recipes, we invite you to craft joy through flavor, design, and everyday inspiration.
        </p>

        <p>
          This blog is curated by Echo Reader — a modular content studio exploring niche storytelling across independent domains. 
          <br/>
          Echo Reader - echoreader.blog
        </p>

      </section>
    </>
  );
}

About.meta = {
  title: 'About CraftFlavor — Where DIY Meets Culinary Creativity',
  description: 'CraftFlavor is a creative space for makers who love food and design. We blend DIY tutorials, handmade projects, cooking hacks, and global recipes.',
};
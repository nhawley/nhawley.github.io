export function ProfileCard() {
  return (
    <div className="prose prose-lg max-w-none space-x-4">
      <img
        src="/profile.jpeg"
        alt="Nate Hawley III"
        className="w-24 h-24 md:w-30 md:h-30 rounded-full mx-auto object-cover border-4 border-primary-500 shadow-lg"
      />
      <p className="text-lg leading-relaxed mb-4">
        I'm a full-stack engineer with a decade of experience building high-performance
        web and mobile apps. I specialize in React, TypeScript, and React Native,
        with a recent focus on integrating AI/ML capabilities into user-facing products.
      </p>
      <p className="text-lg leading-relaxed">
        Currently exploring opportunities in the Bay Area where I can contribute to
        products that leverage modern AI tech. I'm particularly interested in
        companies pushing the boundaries of reactive UI, developer tools, and
        consumer AI products.
      </p>
    </div>
  );
}

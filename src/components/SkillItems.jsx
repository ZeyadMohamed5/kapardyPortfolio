const SkillItems = ({ data }) => {
  const { figure, title, description } = data;

  return (
    <div className="md:col-span-4  justify-items-center text-center col-span-12">
      <img src={figure} alt={title} />
      <h2 className="text-2xl mt-10">{title}</h2>
      <p className="text-xl mt-5 text-text-muted">{description}</p>
    </div>
  );
};
export default SkillItems;

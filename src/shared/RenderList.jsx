const RenderList = ({ data = [], ItemComponent }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <>
      {data.map((item, index) => (
        <ItemComponent key={index} data={item} />
      ))}
    </>
  );
};

export default RenderList;

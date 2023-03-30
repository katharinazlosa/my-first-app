type ListItemType = {
  title: string;
  description: number;
};

const Main = () => {
  const list: ListItemType[] = [
    {
      title: "Afghanistan",
      description: 38928346,
    },
    {
      title: "Albania",
      description: 2877797,
    },
    {
      title: "Algeria",
      description: 43851044,
    },
    {
      title: "Andorra",
      description: 77265,
    },
    {
      title: "Angola",
      description: 32866272,
    },
    {
      title: "Argentina",
      description: 45195774,
    },
    {
      title: "Armenia",
      description: 2963243,
    },
    {
      title: "Australia",
      description: 25499884,
    },
    {
      title: "Austria",
      description: 9006398,
    },
    {
      title: "Azerbaijan",
      description: 10139177,
    },
  ];

  return (
    <div className="main">
      <h1>Countries that start with letter A</h1>
      {list.map((item, index) => (
        <div key={index} className="card">
          <div>Country name: {item.title}</div>
          <div>Country population: {item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Main;

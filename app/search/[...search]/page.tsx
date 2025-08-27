import React from "react";

const SearchPage = (params: { params: { search: string[] } }) => {
  console.log("PROPS ==>", params);
  return (
    <div>
      SearchPage 2 :
      {params.params.search?.map((item: string) => (
        <div key={item} className="font-bold text-3xl">
          {"-->   "}
          {item}
        </div>
      ))}
    </div>
  );
};

export default SearchPage;

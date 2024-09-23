import React, { useState } from "react";
import { Select } from "antd";

function Faq(props) {
  const { data } = props;
  const [option, setOption] = useState([]);

  const fetchData = async (search) => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      `${search}`
    )}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data?.items;
  };
  // console.log("🚀 ~ Faq ~ props:", props);

  const handleSearch = async (val) => {
    const data = await fetchData(val);
    setOption(data);
  };
  return (
    <div>
      Faq details
      <div>
        <Select showSearch optionFilterProp="children" onSearch={handleSearch}>
          {option.map((op) => (
            <Select.Option key={op?.id}>{op?.volumeInfo?.title}</Select.Option>
          ))}
        </Select>
        {data?.items?.map((e) => {
          console.log("🚀 ~ {props?.data?.items?.map ~ e:", e);
          return (
            <div key={e?.id}>
              <p>{e?.volumeInfo?.title}</p>
              <img
                src={e?.volumeInfo?.imageLinks?.thumbnail}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Faq;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
//     "education"
//   )}`;
//   const res = await fetch(apiUrl);
//   const data = await res.json();

//   // Pass fetched data as props to the page component
//   return {
//     props: {
//       data,
//     },
//   };
// }

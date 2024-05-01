import { useState, useEffect } from "react";

export const useSearch = ({ searchValue, retrieve }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const crawl = (data, allValues) => {
      if (!allValues) allValues = [];

      for (let key in data) {
        if (typeof data[key] === "object") crawl(data[key], allValues);
        else allValues.push(`${data[key]} `);
      }

      return allValues;
    };

    const fetchData = async () => {
      const dataSet = retrieve;
      setOriginalData(dataSet);
      setFilteredData(dataSet);

      const searchIdx = dataSet?.map((data) => {
        const allValues = crawl(data);
        return { allValues: allValues.toString() };
      });

      setSearchIndex(searchIdx);
      if (dataSet) setLoading(false);
    };
    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchValue) {
      const reqData = searchIndex?.map((data, index) => {
        if (
          data.allValues.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        )
          return originalData[index];
        return null;
      });

      setFilteredData(
        reqData?.filter((data) => {
          if (data) return true;
          return false;
        })
      );
    } else {
      setFilteredData(originalData);
    }
  }, [searchValue, originalData, searchIndex]);

  return { filteredData, loading };
};

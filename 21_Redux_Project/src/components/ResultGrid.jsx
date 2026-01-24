import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setResult, setLoading, setError } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const { query, activeTab, loading, error, result } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    dispatch(setLoading());
    let data;
    const getData = async () => {
      try {
        if (activeTab === "Photos") {
          let res = await fetchPhotos(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Untitled Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
          // dispatch(setResult(data.results))
        } else {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
          // dispatch(setResult(data.results))
        }
        // console.log(data)
        dispatch(setResult(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, activeTab]);
  if (error)
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <h1 className="text-red-500 text-2xl font-bold">
          ⚠️ Something went wrong
        </h1>
      </div>
    );
  if (loading)
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <h1 className="text-indigo-500 text-5xl font-semibold animate-pulse">
          Loading...
        </h1>
      </div>
    );

    //main content
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      {!query ? (
        <h1 className="text-gray-300 text-5xl font-medium">
          🔍 Type something to search
        </h1>
      ) : (
    <div className="grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4">
  {result.map((item) => (
    <ResultCard
      key={item.id}
      item={item}
      activeTab={activeTab}
    />
  ))}
</div>
      )}
    </div>
  );
};

export default ResultGrid;

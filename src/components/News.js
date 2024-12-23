import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const fetchNews = async (url) => {
    try {
      let data = await fetch(url);
      if (data.status === 429) {
        console.log("Rate limit exceeded, retrying after delay...");
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 60 seconds
        return fetchNews(url);
      }
      let parsedData = await data.json();
      return parsedData;
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      return null;
    }
  }

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let parsedData = await fetchNews(url);
    if (parsedData) {
      props.setProgress(50);
      setArticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
  }

  useEffect(() => {
    document.title = `InsightToday - ${capitalizeFirstLetter(props.category)} News`;
    updateNews();
  }, [props.category, props.apiKey, props.pageSize]);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let parsedData = await fetchNews(url);
    if (parsedData) {
      setArticles(articles.concat(parsedData.articles));
      settotalResults(parsedData.totalResults);
    }
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: "70px" }}>Insight Today - Top Headlines for {capitalizeFirstLetter(props.category)}</h2>
      <InfiniteScroll
        dataLength={articles?.length || 0}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<div className="text-center"><Spinner /></div>}
      >
        <div className="container text-center">
          <div className="row text-center">
            {articles?.map((element) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={element.url}>
                  <Newsitem title={element.title ? element.title : "News"} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 18,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
  apiKey: PropTypes.string
}

export default News;
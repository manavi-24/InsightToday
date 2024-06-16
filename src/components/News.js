import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
 
    static defaultProps={
      country: 'in',
      pageSize: 18,
      category: 'general'
    } 
    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }



    articles=[
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "A strange intermittent radio signal from space has astronomers puzzled - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/sci-tech/science/a-strange-intermittent-radio-signal-from-space-has-astronomers-puzzled/article68284451.ece",
          "urlToImage": null,
          "publishedAt": "2024-06-13T12:15:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "NewsX",
          "title": "'Lal', 'Mursan' and 'Hilsa' Craters In Mars Named After Indian Physicist And Towns Of Bihar, UP - NewsX",
          "description": null,
          "url": null,
          "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/13/1600x900/adam-smigielski-K5mPtONmpHM-unsplash_1700479308572_1718274586121.jpg",
          "publishedAt": "2024-06-13T11:46:06Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Ajit Doval Reappointed NSA, PK Mishra to Stay Principal Secretary To PM - NDTV",
          "description": "Ajit Doval has been reappointed as the National Security Advisor and PK Mishra as the Principal Secretary to the Prime Minister with effect from June 10, the government said today.",
          "url": "https://www.ndtv.com/india-news/ajit-dovals-tenure-as-national-security-advisor-extended-5882199",
          "urlToImage": "https://c.ndtvimg.com/2024-06/fk46o4ag_ajit-doval-pk-mishra-ani-_650x400_13_June_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
          "publishedAt": "2024-06-13T11:42:01Z",
          "content": "Mr Doval has been the NSA since 2014.\r\nNew Delhi: Ajit Doval has been reappointed as the National Security Advisor and PK Mishra as the Principal Secretary to the Prime Minister with effect from June… [+1832 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Nishant Kumar",
          "title": "Stock market today: Sensex, Nifty 50 settle at fresh record closing highs; 5 key reasons why investors are enthused | Stock Market News - Mint",
          "description": "Stock market today: Sensex closed at 76,810.90, up 204 points, or 0.27 per cent, while the Nifty 50 settled with a gain of 76 points, or 0.33 per cent, at 23,398.90.",
          "url": "https://www.livemint.com/market/stock-market-news/stock-market-today-sensex-nifty-50-hit-fresh-record-highs-investors-earn-about-3-lakh-crore-in-a-day-11718272623620.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/13/1600x900/adam-smigielski-K5mPtONmpHM-unsplash_1700479308572_1718274586121.jpg",
          "publishedAt": "2024-06-13T11:26:23Z",
          "content": "Stock market today: The Indian stock market's frontline indices - the Sensex and the Nifty 50 - hit their fresh record highs during the session on Thursday, June 13, buoyed by healthy macroeconomic n… [+7397 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI News Desk",
          "title": "Bengaluru court issues non-bailable arrest warrant against former CM B S Yediyurappa in POCSO case - The Times of India",
          "description": "India News: NEW DELHI: A Bengaluru court on Thursday issued a non-bailable arrest warrant against former Karnataka chief minister B S Yediyurappa in a Pocso case.",
          "url": "https://timesofindia.indiatimes.com/india/bengaluru-court-issues-non-bailable-arrest-warrant-against-former-cm-b-s-yediyurappa-in-pocso-case/articleshow/110969719.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-110972486,width-1070,height-580,imgsize-41654,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-13T11:17:00Z",
          "content": null
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI News Desk",
          "title": "'Unwarranted': India reacts to J&K's reference in China-Pakistan joint statement - The Times of India",
          "description": "India News: In a China-Pakistan joint statement, China said J&K dispute is left over from history. MEA reacted strongly to the statement and said no country has l",
          "url": "https://timesofindia.indiatimes.com/india/unwarranted-india-reacts-to-jks-reference-in-china-pakistan-joint-statement/articleshow/110969091.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-110969218,width-1070,height-580,imgsize-447211,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-13T11:00:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Livelaw.in"
          },
          "author": "LIVELAW NEWS NETWORK",
          "title": "NEET-UG 2024 Candidates' Plea In Supreme Court Seeks CBI Investigation Into Alleged Paper Leak &... - Live Law - Indian Legal News",
          "description": "A writ petition filed by NEET-UG candidates in the Supreme Court seeks a CBI investigation into the alleged instances of paper leak and malpractices in the conduct of the NEET-UG 2024 exam on May 5...",
          "url": "https://www.livelaw.in/top-stories/neet-ug-2024-candidates-plea-in-supreme-court-seeks-cbi-investigation-into-alleged-paper-leak-malpractices-260424",
          "urlToImage": "https://www.livelaw.in/h-upload/2024/06/11/544146-neet-ug-2024-sc-01.webp",
          "publishedAt": "2024-06-13T10:54:21Z",
          "content": "A writ petition filed by NEET-UG candidates in the Supreme Court seeks a CBI investigation into the alleged instances of paper leak and malpractices in the conduct of the NEET-UG 2024 exam on May 5 t… [+5024 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "The Indian Express",
          "title": "Amid J&K terror strikes, PM Modi chairs review meet, directs deployment of full counter-terror capabilities - The Indian Express",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS9pbmRpYS9qay10ZXJyb3Itc3RyaWtlcy1wbS1tb2RpLWNoYWlycy1yZXZpZXctbWVldC05MzkwMjU5L9IBYmh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS9pbmRpYS9qay10ZXJyb3Itc3RyaWtlcy1wbS1tb2RpLWNoYWlycy1yZXZpZXctbWVldC05MzkwMjU5L2xpdGUv?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-13T10:41:31Z",
          "content": null
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Shivendra Kumar",
          "title": "Vodafone Idea approves fundraising worth Rs 2,458 crore - The Economic Times",
          "description": "The decision was taken at a meeting on Thursday and the announcement was made after market hours. In its filing to the exchanges, the company said upto 1,02,70,27,024 equity shares of face value of Rs 10 apiece will be issued at a price of Rs 14.80. Besides, …",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/vodafone-idea-approves-fundraising-worth-rs-2458-crore/articleshow/110968619.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-110968574,width-1200,height-630,imgsize-68770,overlay-etmarkets/photo.jpg",
          "publishedAt": "2024-06-13T10:38:16Z",
          "content": "Vodafone Idea's board of directors have approved a fundraising plan where the company will raise up to Rs 2,458 crore by issuing over 166 crore fully paid-up equity shares in one or more tranches on … [+995 chars]"
        },
        {
          "source": {
            "id": "techradar",
            "name": "TechRadar"
          },
          "author": "David Nield",
          "title": "Samsung just leaked the Galaxy Watch 7, Galaxy Watch FE, and Galaxy Buds 3 in its own app - TechRadar",
          "description": "Lots of new gadgets on the way",
          "url": "https://www.techradar.com/health-fitness/smartwatches/samsung-just-leaked-the-galaxy-watch-7-galaxy-watch-fe-and-galaxy-buds-3-in-its-own-app",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/XZ7w9NuBW7eWZEMdouwo6C-1200-80.jpg",
          "publishedAt": "2024-06-13T10:27:22Z",
          "content": "Over the next month or so we're expecting Samsung to unveil a pile of shiny new products – and quite a few of them have been leaked early, in Samsung's very own Galaxy Watch 6 beta software.\r\nAs spot… [+2254 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "Gainers & Losers: 10 stocks that moved the most on June 13 - Moneycontrol",
          "description": "Indian benchmark indices Nifty and Sensex ended higher for the third straight session on June 13. Here are some of the stocks that moved the most intraday.",
          "url": "https://www.moneycontrol.com/news/business/markets/gainers-losers-10-stocks-that-moved-the-most-on-june-13-3-12747864.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240612102432_sensex_nifty-market.jpg",
          "publishedAt": "2024-06-13T10:23:12Z",
          "content": "Indian benchmark indices ended higher for the third straight session on June 13. At close, the Sensex was up 204.33 points or 0.27 percent at 76,810.90, and the Nifty was up 75.90 points or 0.33 perc… [+2644 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Himachal's U-Turn On Providing Water To Parched Delhi Draws Top Court Rap - NDTV",
          "description": "In a twist in the Supreme Court battle over Delhi's spiralling water crisis, Himachal Pradesh has said it does not have surplus water to send to the national capital, a day after the hill state said it had released water for Delhi",
          "url": "https://www.ndtv.com/india-news/dont-have-surplus-to-share-with-delhi-himachals-u-turn-amid-water-crisis-5880372",
          "urlToImage": "https://c.ndtvimg.com/2024-05/rfpcfkio_delhi-water-crisis_625x300_29_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
          "publishedAt": "2024-06-13T10:19:00Z",
          "content": "In a twist in the Supreme Court battle over Delhi's spiralling water crisis, Himachal Pradesh has said it does not have surplus water to send to the national capital, a day after the hill state said … [+3724 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "Nandini Yadav",
          "title": "With Xiaomi 14 Civi we have brought gun to a knife fight, says Xiaomi India CMO Anuj Sharma - India Today",
          "description": "At the launch event of the Xiaomi 14 Civi in India Xiaomi India CMO Anuj Sharma discussed the smartphones pricing AI features and future plans in a conversation with India Today Tech",
          "url": "https://www.indiatoday.in/technology/features/story/with-xiaomi-14-civi-we-have-brought-gun-to-a-knife-fight-xiaomi-india-cmo-anuj-sharma-2552732-2024-06-13",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/xiaomi-india-cmo-anuj-sharma-134207784-16x9_0.jpg?VersionId=RR2ZzKM1JAZn5m_NnBxjWNZqay7pVndE",
          "publishedAt": "2024-06-13T09:42:52Z",
          "content": "“I don’t think it’s fair what we have done,” says Xiaomi India’s chief marketing officer Anuj Sharma, as he twists open a candy and pops it in his mouth. “I think we have brought a gun to a knife fig… [+4168 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Khushi Pal",
          "title": "10 captivating images of space captured by NASA telescopes - Hindustan Times",
          "description": "Here is a look at ten captivating images of space shared by NASA.",
          "url": "https://www.hindustantimes.com/web-stories/in-focus/10-captivating-images-of-space-captured-by-nasa-telescopes-101718262834668.html",
          "urlToImage": null,
          "publishedAt": "2024-06-13T09:00:10Z",
          "content": "By Khushi PalPublished Jun 13, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Clara Lewis",
          "title": "Ajit Pawar's wife Sunetra files nomination for Rajya Sabha; BJP-Shiv Sena leaders absent - The Times of India",
          "description": "NCP leader Ajit Pawar's wife, Sunetra, filed her nomination for the Rajya Sabha bypolls after losing in the Lok Sabha election against her sister-in-l",
          "url": "https://timesofindia.indiatimes.com/city/mumbai/ajit-pawars-wife-sunetra-files-nomination-for-rajya-sabha-bjp-shiv-sena-leaders-absent/articleshow/110964784.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-110968025,width-1070,height-580,imgsize-32830,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-13T09:00:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Lupin.com"
          },
          "author": "kw2023",
          "title": "The Rising Threat of Liver Diseases: Why Screening Matters - Lupin",
          "description": null,
          "url": "https://www.lupin.com/the-rising-threat-of-liver-diseases-why-screening-matters/",
          "urlToImage": "https://www.lupin.com/wp-content/uploads/2023/09/mr.-sourabh-agrawal-senior-vice-president-lupin-limited.jpeg",
          "publishedAt": "2024-06-13T08:33:30Z",
          "content": "Amidst the backdrop of India’s burgeoning health landscape, a concerning trend is emerging: the rise of lifestyle-related diseases, particularly those affecting the liver. With unhealthy habits takin… [+4757 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI Tech Desk",
          "title": "Oppo F27 Pro+ 5G rugged smartphone with military grade certification, fast charging support launched: Pri - The Times of India",
          "description": "MOBILES & TABLETS News: Oppo F27 Pro+ 5G: MediaTek chipset, military grade durability, IP rating, 360-degree Armour Body protection, Corning Gorilla Glass Victus 2, Dusk Pink",
          "url": "https://timesofindia.indiatimes.com/technology/mobiles-tabs/oppo-f27-pro-5g-rugged-smartphone-with-military-grade-certification-fast-charging-support-launched-price-offers-and-more/articleshow/110964012.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-110963978,width-1070,height-580,imgsize-36476,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-13T08:30:00Z",
          "content": null
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI Sports Desk",
          "title": "How Babar Azam's Pakistan can still reach 'Super 8s' at T20 World Cup - The Times of India",
          "description": "Cricket News: Pakistan's cricket team has been facing criticism for their underwhelming performance in the current T20 World Cup. However, they received a boost whe",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/how-babar-azams-pakistan-can-still-reach-super-8s-at-t20-world-cup/articleshow/110963187.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-110963598,width-1070,height-580,imgsize-77994,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-13T08:20:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Scroll.in"
          },
          "author": "Scroll Staff",
          "title": "West Bengal has no case of bird flu, team constituted to monitor situation, says official - Scroll.in",
          "description": "On Tuesday, the World Health Organization confirmed a case of human infection in the state caused by the avian influenza in January.",
          "url": "https://scroll.in/latest/1069240/west-bengal-has-no-case-of-bird-flu-team-constituted-to-monitor-situation-says-official",
          "urlToImage": null,
          "publishedAt": "2024-06-13T07:55:00Z",
          "content": "West Bengal has no case of the avian influenza A (H9N2) virus colloquially known as bird flu and the government has set up a team to evaluate the situation in the state, PTI reported on Wednesday, qu… [+1638 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Yemen’s Houthis say they targeted Greek-owned ship in Red Sea - Al Jazeera English",
          "description": "The attack on the cargo ship caused flooding and damage to the engine room, but there were no reports of casualties.",
          "url": "https://www.aljazeera.com/news/2024/6/13/yemens-houthis-say-they-targeted-greek-owned-ship-in-red-sea",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240104__349J7QF__v4__HighRes__TopshotYemenPalestinianIsraelProtest-1718260242.jpg?resize=1920%2C1440",
          "publishedAt": "2024-06-13T07:52:30Z",
          "content": "Yemens Houthi rebels have claimed responsibility for a small watercraft and missile attack that left a Greek-owned cargo ship taking water and in need of rescue near the Red Sea port of Hodeidah.\r\nTh… [+2863 chars]"
        }
      ]

      capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props) {
        super(props);
        this.state = {
          articles: this.articles,
          //articles:[],
          loading: false,
          page: 1,
          totalResults:0
        }
        document.title=`InsightToday- ${this.capitalizeFirstLetter(this.props.category) } News`
        }



    async componentDidMount() {
      this.props.setProgress(10)
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        let data=await fetch(url);
        this.props.setProgress(50)
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,
          totalArticles:parsedData.totalResults,
          loading:false,
        
        })
        this.props.setProgress(100)
        }

     handleNextClick=async()=>{
      //if(this.state.page+1>Math.ceil(this.state.totalArticles/18)){}
      //else{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,
        page: this.state.page+1,
        loading:false})
      //}
    }

        handlePrevClick=async()=>{
          this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,
        page: this.state.page+1,
        loading:false
      })
    }

    fetchMoreData = async() => {
      this.setState({page: this.state.page+1})
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:this.state.articles.concat(parsedData.articles),
          totalArticles:parsedData.totalResults,
          loading:false})
    };

  render() {
    {/*return (
      <div className="container my-3">
        <h2 className="text-center">Insight Today- Top Headlines for {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <div className="text-center"><Spinner/></div>}
        <div className="container text-center ">
          <div className="row text-center">
            {!this.state.loading && this.state.articles.map((element)=>{
                return(
                 <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={element.url} >
                 <Newsitem title={element.title} description={element.description} imageURL={element.urlToImage} 
                 newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
               </div>)

            })}
           </div>
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={(this.state.page+1)>(Math.ceil(this.state.totalArticles/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      );*/}

      return (
        <div className="container my-3">
          <h2 className="text-center">Insight Today- Top Headlines for {this.capitalizeFirstLetter(this.props.category)}</h2>
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<div className="text-center"><Spinner/></div>}
        >
          <div className="container text-center ">
            <div className="row text-center">
              {this.state.articles.map((element)=>{
                  return(
                   <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={element.url} >
                   <Newsitem title={element.title} description={element.description} imageURL={element.urlToImage} 
                   newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                 </div>)
  
              })}
             </div>
          </div>
          </InfiniteScroll>
          
        </div>
        );


  }
}

export default News;

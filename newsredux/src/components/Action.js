export const FetchNews= (code) => dispatch=>
    fetch(`https://newsapi.org/v2/top-headlines?country=${code}&category=business&apiKey=cf9dce39ff4748cfa8e2a1e3265f04d6`)
    .then((response)=> response.json())
        .then((json)=>{     
        // console.log(json)
           dispatch(addNews(json.articles));
        });
        
export const addNews=(articles)=>{
    return {
        type: "ADD_NEWS",
        payload: articles
    }
}
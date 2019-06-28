import React from 'react';
import '../css/Countryname.css';
import { connect } from 'react-redux';
import {FetchNews} from './Action'
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'

class Countryname extends React.Component{
    constructor(props){
        super(props);
        this.state={
            country: [{fullName:"INDIA",
                        shortName:"in"},
                        {fullName:"USA",
                        shortName:"us"},
                        {fullName:"AUSTRALIA",
                        shortName:"au"},
                        {fullName:"RUSSIA",
                        shortName:"ru"},
            ], 
        }
    }
array=()=>{
        this.setState({
            country: [...this.state.country]
        })
    }
news=(e)=>{
      this.props.FetchNews(e.target.getAttribute("code"));
    }

render(){
        const newsi= this.props.articles.map(
            (article,i)=>{
                return <div key={i} className="news"><h2 className="para">{article.title}</h2>
                       <figure><img className="img" src={article.urlToImage} alt="NewsPicture Not Available"/></figure>
                       </div>
        })

    const Cname = this.state.country.map(
        (item,i) => { 
            return <Link to="/" style={{textDecoration: "inherit",marginRight: "5px"}}><li className="li" onClick={this.news} code={item.shortName} key={i}>{item.fullName}</li></Link> 
    })
        return(
            <div>
          <ul className="ul">{Cname}</ul> <br /><br />
            <div> 
            {newsi}
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    return{
        articles: state.articles
    }
  }

const mapDispatchToProps=dispatch =>
    bindActionCreators({
        FetchNews,
      },
      dispatch,
      );

  
console.log(mapDispatchToProps);

  export default connect(mapStateToProps,mapDispatchToProps)(Countryname);
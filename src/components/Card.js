
const Card = ({title,button,imgurl,desc}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href="#" className="btn btn-primary">{button}</a>
  </div>
</div>
  )
}

export default Card
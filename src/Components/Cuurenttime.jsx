function Cuurrenttime(){
  let date=new Date();

  return <div className="time">
    This is current time:{date.toLocaleDateString()}-{date.toLocaleTimeString()}
  </div>
}

export default Cuurrenttime;
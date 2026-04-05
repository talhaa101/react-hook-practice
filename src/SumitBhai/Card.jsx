function Card({ name, age, profession, image }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      margin: "10px",
      width: "200px",
      textAlign: "center",
      borderRadius: "10px"
      
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default Card;
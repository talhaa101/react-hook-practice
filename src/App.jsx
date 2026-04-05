import Card from "./SumitBhai/Card";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>

      <Card 
        name="Rahim"
        age="25"
        profession="Web Developer"
        image="https://i.pravatar.cc/200?img=1"
      />

      <Card 
        name="Karim"
        age="28"
        profession="Designer"
        image="https://i.pravatar.cc/200?img=2"
      />

      <Card 
        name="Sakib"
        age="22"
        profession="Student"
        image="https://i.pravatar.cc/200?img=3"
      />

      <Card 
        name="Nusrat"
        age="24"
        profession="Teacher"
        image="https://i.pravatar.cc/200?img=4"
      />

      <Card 
        name="Ayesha"
        age="26"
        profession="Engineer"
        image="https://i.pravatar.cc/200?img=5"
      />

    </div>
  );
}

export default App;
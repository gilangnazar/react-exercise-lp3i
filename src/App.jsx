import './App.css'
import Header from './meeting2/Header'
// import Content from './meeting2/Content'
// import Dropdown from './meeting2/Dropdown';
// import DataWithTable from './meeting2/DataWithTable';
import Accordion from './meeting2/Accordion';

function App() {
//   const biodata = [
//     {nama: "Gilang Nazar", jurusan: "Manajemen Informatika"},
//     {nama: "Alpin", jurusan: "Hubungan Masyarakat"},
//     {nama: "Faridb", jurusan: "Bisnis Digital"}
// ]
  const data = [
    {title: "Title data #1", description: "lorem1"},
    {title: "Title data #2", description: "lorem 2"},
    {title: "Title data #3", description: "lorem 3"}
]

  return (
    <>
      <Header />
      {/* <Content data = {biodata}/> */}
      {/* <Dropdown data = {biodata}/> */}
      {/* <DataWithTable data={biodata}/> */}
      <Accordion data={data} />
    </>
  )
}

export default App

import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="home"></section>
        <section id="technologies"></section>
        <section id="projects"></section>
        <section id="about"></section>
        <section id="contact"></section>
      </main>
    </>
  );
};

export default App;
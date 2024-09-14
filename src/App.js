import "./App.css";
import Navbar from "./components/Navbar";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Hello...!!!!</h1>
      </header>

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ComponentOne />
          <ComponentTwo />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

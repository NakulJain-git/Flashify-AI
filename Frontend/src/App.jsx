import HomePage from "./pages/Homepage";
import CreateFlashCard from "./components/CreateFlashCard";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import FlipCardComponent from "./components/FlipCardComponent";
import FlashcardPackPage from "./components/FlashcardPackPage";
import AIFlashcardGenerator from "./components/AIFlashcardGenerator";
import EditFlashcardPack from "./components/EditFlashcardPack";  
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="create-flashcard" element={<CreateFlashCard />} />
            <Route path="/flashcard-pack/:id" element={<FlashcardPackPage />} />
            <Route path="/ai-generator" element={<AIFlashcardGenerator />} />
            <Route path="/test" element={<FlipCardComponent />} />
            <Route path="/flashcard-pack/:id" element={<FlashcardPackPage />} />
            <Route path="/edit-pack/:id" element={<EditFlashcardPack />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
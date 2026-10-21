import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index";

// Le portfolio est une page unique. Le LanguageProvider est monte dans Index.
const App = () => (
  <>
    <Index />
    <Toaster />
  </>
);

export default App;

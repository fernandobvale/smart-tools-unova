import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import VideoToAudio from "./pages/VideoToAudio";
import Receipts from "./pages/Receipts";
import ReceiptForm from "./components/receipts/ReceiptForm";
import CpfConsulta from "./pages/CpfConsulta";
import SeoGenerator from "./pages/SeoGenerator";
import MarkdownEditor from "./pages/MarkdownEditor";
import Notes from "./pages/Notes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/text-splitter" element={<Index />} />
              <Route path="/video-to-audio" element={<VideoToAudio />} />
              <Route path="/receipts" element={<Receipts />} />
              <Route path="/receipts/new/:payeeId" element={<ReceiptForm />} />
              <Route path="/cpf-consulta" element={<CpfConsulta />} />
              <Route path="/seo-generator" element={<SeoGenerator />} />
              <Route path="/markdown-editor" element={<MarkdownEditor />} />
              <Route path="/notes" element={<Notes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
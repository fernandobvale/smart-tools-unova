import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Music, Receipt, UserSearch, FileText, FileEdit, StickyNote, GraduationCap, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const tools = [
    {
      title: "Divisor de Texto",
      description: "Divida textos longos em partes menores",
      icon: <Scissors className="w-6 h-6" />,
      href: "/text-splitter"
    },
    {
      title: "Conversor de Vídeo para Áudio",
      description: "Extraia o áudio de seus vídeos MP4",
      icon: <Music className="w-6 h-6" />,
      href: "/video-to-audio"
    },
    {
      title: "Sistema de Recibos",
      description: "Gere e gerencie recibos facilmente",
      icon: <Receipt className="w-6 h-6" />,
      href: "/receipts"
    },
    {
      title: "Consulta CPF",
      description: "Consulte dados de CPF e veja histórico",
      icon: <UserSearch className="w-6 h-6" />,
      href: "/cpf-consulta"
    },
    {
      title: "Gerador de SEO",
      description: "Gere descrições otimizadas para SEO utilizando IA",
      icon: <FileText className="w-6 h-6" />,
      href: "/seo-generator"
    },
    {
      title: "Editor Markdown",
      description: "Edite e visualize textos em Markdown em tempo real",
      icon: <FileEdit className="w-6 h-6" />,
      href: "/markdown-editor"
    },
    {
      title: "Notas",
      description: "Crie e gerencie suas notas com um editor rico",
      icon: <StickyNote className="w-6 h-6" />,
      href: "/notes"
    },
    {
      title: "Gestão de Certificados",
      description: "Gerencie e acompanhe o envio de certificados",
      icon: <FileText className="w-6 h-6" />,
      href: "/certificates/manage"
    },
    {
      title: "Lista de Professores",
      description: "Gerencie e visualize inscrições de professores",
      icon: <GraduationCap className="w-6 h-6" />,
      href: "/teacher-list"
    },
    {
      title: "Lista de Prompts",
      description: "Visualize e gerencie prompts personalizados",
      icon: <MessageSquare className="w-6 h-6" />,
      href: "/prompt-list"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mt-14 md:mt-0">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tools.map((tool, index) => (
          <Link key={index} to={tool.href} className="block h-full">
            <Card className="h-full hover:bg-accent transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base sm:text-lg font-semibold">
                  {tool.title}
                </CardTitle>
                {tool.icon}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
export type SkillCategory = "backend" | "frontend" | "database" | "tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: number;
  evidence: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  mode: "Atual" | "Anterior";
  focus: string;
  highlights: string[];
  stack: string[];
};

export const profile = {
  name: "Matheus Rodrigues da Silva",
  title: "Desenvolvedor Full Stack",
  location: "Brasil",
  age: "21 anos",
  pitch:
    "Desenvolvedor em evolução com base forte em Delphi para backend, APIs REST com Horse, documentação com GBSwagger e experiência em front-end moderno com React, NestJS e RTK Store.",
  objective:
    "Busco atuar como Desenvolvedor Full Stack, colaborando em soluções escaláveis, bem documentadas e integradas entre sistemas.",
  links: {
    whatsapp: "https://wa.me/5519987710936",
    email: "mailto:matheusrdsilva1@gmail.com",
    linkedin: "https://www.linkedin.com/in/matheus-silva-0b2798259/",
    github: "https://github.com/TheuZCoder",
    avatar: "https://github.com/TheuZCoder.png"
  }
};

export const skills: Skill[] = [
  {
    name: "Delphi / RAD Studio 10.3",
    category: "backend",
    level: 90,
    evidence: "Backend em Delphi com arquitetura MVC, Horse e APIs RESTful."
  },
  {
    name: "Horse Framework",
    category: "backend",
    level: 86,
    evidence: "Criação de API para separar SQL do ERP legado e estruturar uma camada backend."
  },
  {
    name: "APIs REST",
    category: "backend",
    level: 84,
    evidence: "Desenvolvimento, validação, documentação e integração entre sistemas."
  },
  {
    name: "React",
    category: "frontend",
    level: 76,
    evidence: "Atuação em front-end com React e consumo de APIs."
  },
  {
    name: "NestJS",
    category: "backend",
    level: 72,
    evidence: "Experiência em stack full stack com NestJS."
  },
  {
    name: "RTK Store",
    category: "frontend",
    level: 70,
    evidence: "Gerenciamento de estado em interfaces React."
  },
  {
    name: "Angular",
    category: "frontend",
    level: 68,
    evidence: "Experiência em desenvolvimento frontend com Angular."
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 66,
    evidence: "Experiência em frontend com Next.js."
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: 72,
    evidence: "Conhecimento em administração e uso de bancos relacionais."
  },
  {
    name: "Oracle",
    category: "database",
    level: 68,
    evidence: "Contato com administração e integração com bancos relacionais."
  },
  {
    name: "Git / GitHub",
    category: "tools",
    level: 78,
    evidence: "Controle de versão em desenvolvimento colaborativo."
  },
  {
    name: "Postman / Insomnia / Thunder Client",
    category: "tools",
    level: 82,
    evidence: "Testes e validação de contratos de APIs."
  },
  {
    name: "GBSwagger",
    category: "tools",
    level: 74,
    evidence: "Documentação de APIs RESTful em projetos Delphi."
  }
];

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Trainee",
    company: "Zucchetti Brasil",
    period: "17/07/2025 - atualmente",
    mode: "Atual",
    focus: "Full stack com foco em backend Delphi e integrações REST.",
    highlights: [
      "Backend Delphi no RAD Studio Rio 10.3 em arquitetura MVC.",
      "APIs RESTful com Horse e documentação com GBSwagger.",
      "Experiência complementar no front-end com React, NestJS e RTK Store."
    ],
    stack: ["Delphi", "RAD Studio", "Horse", "GBSwagger", "React", "NestJS", "RTK Store"]
  },
  {
    role: "Estagiário em Desenvolvimento de Sistemas",
    company: "Zucchetti Brasil",
    period: "21/07/2024 - 17/07/2025",
    mode: "Anterior",
    focus: "Modernização gradual de ERP legado por meio de APIs.",
    highlights: [
      "Desenvolvimento de API em Delphi utilizando o framework Horse.",
      "Separação de SQL embutido na interface para uma arquitetura backend.",
      "Evolução de base técnica em sistemas corporativos."
    ],
    stack: ["Delphi", "Horse", "SQL", "APIs REST"]
  },
  {
    role: "Programador de Sistema da Informação",
    company: "Indústrias Machina Zaccaria",
    period: "16/02/2023 - 06/2024",
    mode: "Anterior",
    focus: "Suporte técnico, infraestrutura e administração de rede.",
    highlights: [
      "Suporte técnico nível 1 para usuários e estações.",
      "Manutenção de computadores, formatações e instalação de sistemas.",
      "Cabeamento e administração de rede."
    ],
    stack: ["Suporte N1", "Redes", "Manutenção", "Sistemas"]
  }
];

export const education = [
  {
    title: "Superior em Análise e Desenvolvimento de Sistemas",
    place: "UniCesumar",
    period: "19/02/2024 - conclusão prevista em 30/06/2026"
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    place: "Senai Luiz Varga",
    period: "Concluído em 30/12/2024"
  }
];

export const categoryLabels: Record<SkillCategory | "all", string> = {
  all: "Todas",
  backend: "Backend",
  frontend: "Frontend",
  database: "Dados",
  tools: "Ferramentas"
};

export type SkillCategory = "backend" | "frontend" | "database" | "tools";

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  status: "Confirmado" | "A confirmar";
  credentialUrl: string;
  relatedSkills: string[];
  summary: string;
};

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  evidence: string;
  impact: string;
  certificationIds: string[];
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
    certifications:
      "https://www.linkedin.com/in/matheus-silva-0b2798259/details/certifications/",
    github: "https://github.com/TheuZCoder",
    avatar: "https://github.com/TheuZCoder.png"
  }
};

export const certifications: Certification[] = [
  {
    id: "embarcadero-2025",
    title: "Embarcadero Conference 2025",
    issuer: "Embarcadero do Brasil",
    issuedAt: "Emitida em set de 2025",
    status: "Confirmado",
    credentialUrl:
      "https://www.linkedin.com/in/matheus-silva-0b2798259/details/certifications/",
    relatedSkills: ["Delphi / RAD Studio 10.3", "APIs REST", "GBSwagger"],
    summary:
      "Participação em evento técnico do ecossistema Embarcadero, conectado ao uso de Delphi, RAD Studio e backend corporativo."
  },
  {
    id: "embarcadero-2024",
    title: "Embarcadero Conference 2024",
    issuer: "Embarcadero do Brasil",
    issuedAt: "Emitida em set de 2024",
    status: "Confirmado",
    credentialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7128093053982040065/",
    relatedSkills: ["Delphi / RAD Studio 10.3", "APIs REST"],
    summary:
      "Participação em evento focado no ecossistema Delphi e ferramentas Embarcadero."
  },
  {
    id: "codedex-html",
    title: "The Origins I: HTML",
    issuer: "Codédex",
    issuedAt: "Emitida em mai de 2024",
    status: "Confirmado",
    credentialUrl: "https://www.codedex.io/certificates/9c1d4f45-4151-47ec-a2d0-4710351c03fb",
    relatedSkills: ["HTML", "Frontend", "React"],
    summary:
      "Base de HTML para construção de interfaces web e estruturação semântica de páginas."
  },
  {
    id: "codedex-javascript",
    title: "The Origins III: JavaScript",
    issuer: "Codédex",
    issuedAt: "Emitida em mai de 2024",
    status: "Confirmado",
    credentialUrl: "https://www.codedex.io/certificates/e50ec83c-fa23-45d2-bcdf-140db4f48ba1",
    relatedSkills: ["JavaScript", "React", "Next.js"],
    summary:
      "Fundamentos de JavaScript aplicáveis a front-end moderno, lógica de interação e consumo de APIs."
  },
  {
    id: "senai-java-foundations",
    title: "Programação Oracle - Java Foundations",
    issuer: "Senai São Paulo",
    issuedAt: "Emitida em dez de 2023",
    status: "Confirmado",
    credentialUrl: "https://www.sp.senai.br/consulta-certificado?qrcode=50523246011/14001306",
    relatedSkills: ["Java", "Programação", "Backend"],
    summary:
      "Certificado SENAI com código de credencial 50523246011/14001306."
  },
  {
    id: "senai-java-fundamentals",
    title: "Programação Oracle - Java Fundamentals",
    issuer: "Senai São Paulo",
    issuedAt: "Emitida em dez de 2023",
    status: "Confirmado",
    credentialUrl: "https://www.sp.senai.br/consulta-certificado?qrcode=50523247578/14163599",
    relatedSkills: ["Java", "Programação", "Backend"],
    summary:
      "Certificado SENAI com código de credencial 50523247578/14163599."
  },
  {
    id: "microsoft-linkedin-software",
    title: "Fundamentos para Desenvolvimento de Software por Microsoft e LinkedIn",
    issuer: "Microsoft",
    issuedAt: "Emitida em nov de 2023",
    status: "Confirmado",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/94aa84a711014a9da0a3ae0eeac465197c6c3a1f87d92ce306fe6f86cb5450b1",
    relatedSkills: ["Desenvolvimento de software", "Programação", "Git / GitHub"],
    summary:
      "Fundamentos de desenvolvimento de software, programação e práticas essenciais para carreira técnica."
  },
  {
    id: "oracle-java-foundations",
    title: "Java Foundations",
    issuer: "Oracle",
    issuedAt: "Emitida em ago de 2023",
    status: "Confirmado",
    credentialUrl:
      "https://www.linkedin.com/in/matheus-silva-0b2798259/details/certifications/",
    relatedSkills: ["Java", "Programação", "Backend"],
    summary:
      "Certificação Oracle cadastrada no LinkedIn, relacionada a fundamentos de Java."
  }
];

export const skills: Skill[] = [
  {
    id: "delphi",
    name: "Delphi / RAD Studio 10.3",
    category: "backend",
    level: 90,
    evidence: "Backend em Delphi com arquitetura MVC, Horse e APIs RESTful.",
    impact: "Base principal para evoluir ERP legado em serviços com responsabilidades mais claras.",
    certificationIds: ["embarcadero-2025", "embarcadero-2024"]
  },
  {
    id: "horse",
    name: "Horse Framework",
    category: "backend",
    level: 86,
    evidence: "Criação de API para separar SQL do ERP legado e estruturar uma camada backend.",
    impact: "Permite criar endpoints REST leves, documentáveis e conectados ao ecossistema Delphi.",
    certificationIds: ["embarcadero-2025", "embarcadero-2024"]
  },
  {
    id: "apis-rest",
    name: "APIs REST",
    category: "backend",
    level: 84,
    evidence: "Desenvolvimento, validação, documentação e integração entre sistemas.",
    impact: "Conecta front-end, ERP e banco de dados com contratos mais previsíveis.",
    certificationIds: ["embarcadero-2025", "embarcadero-2024"]
  },
  {
    id: "java",
    name: "Java",
    category: "backend",
    level: 72,
    evidence: "Certificações Oracle/SENAI em fundamentos de Java e programação.",
    impact: "Reforça fundamentos de backend, orientação a objetos e lógica de programação.",
    certificationIds: ["senai-java-foundations", "senai-java-fundamentals", "oracle-java-foundations"]
  },
  {
    id: "html-javascript",
    name: "HTML / JavaScript",
    category: "frontend",
    level: 78,
    evidence: "Certificados Codédex The Origins I: HTML e The Origins III: JavaScript.",
    impact: "Base direta para interfaces web, manipulação de comportamento e evolução com React.",
    certificationIds: ["codedex-html", "codedex-javascript"]
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 76,
    evidence: "Atuação em front-end com React e consumo de APIs.",
    impact: "Entrega interfaces orientadas a estado, componentes e integração com serviços.",
    certificationIds: ["codedex-html", "codedex-javascript"]
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    level: 72,
    evidence: "Experiência em stack full stack com NestJS.",
    impact: "Complementa a visão backend com arquitetura modular em TypeScript.",
    certificationIds: ["microsoft-linkedin-software"]
  },
  {
    id: "rtk-store",
    name: "RTK Store",
    category: "frontend",
    level: 70,
    evidence: "Gerenciamento de estado em interfaces React.",
    impact: "Organiza fluxo de dados em telas com consumo de APIs e estados compartilhados.",
    certificationIds: ["codedex-javascript"]
  },
  {
    id: "angular",
    name: "Angular",
    category: "frontend",
    level: 68,
    evidence: "Experiência em desenvolvimento frontend com Angular.",
    impact: "Amplia repertório em aplicações SPA e componentes estruturados.",
    certificationIds: ["codedex-html", "codedex-javascript"]
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 66,
    evidence: "Experiência em frontend com Next.js.",
    impact: "Aproxima front-end de rotas, renderização web e organização de produto.",
    certificationIds: ["codedex-javascript"]
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    level: 72,
    evidence: "Conhecimento em administração e uso de bancos relacionais.",
    impact: "Apoia modelagem, consultas e integração de APIs com persistência relacional.",
    certificationIds: []
  },
  {
    id: "oracle",
    name: "Oracle",
    category: "database",
    level: 68,
    evidence: "Contato com administração e integração com bancos relacionais.",
    impact: "Reforça experiência com ambientes corporativos e bases legadas.",
    certificationIds: ["senai-java-foundations", "senai-java-fundamentals", "oracle-java-foundations"]
  },
  {
    id: "git",
    name: "Git / GitHub",
    category: "tools",
    level: 78,
    evidence: "Controle de versão em desenvolvimento colaborativo.",
    impact: "Sustenta colaboração, histórico de mudanças e evolução incremental do código.",
    certificationIds: ["microsoft-linkedin-software"]
  },
  {
    id: "api-tools",
    name: "Postman / Insomnia / Thunder Client",
    category: "tools",
    level: 82,
    evidence: "Testes e validação de contratos de APIs.",
    impact: "Reduz regressões em endpoints e acelera investigação de integrações.",
    certificationIds: []
  },
  {
    id: "gbswagger",
    name: "GBSwagger",
    category: "tools",
    level: 74,
    evidence: "Documentação de APIs RESTful em projetos Delphi.",
    impact: "Facilita entendimento de contratos e consumo dos endpoints por outros times.",
    certificationIds: ["embarcadero-2025"]
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

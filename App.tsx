import { useMemo, useState } from "react";
import {
  Certification,
  Skill,
  SkillCategory,
  categoryLabels,
  certifications,
  education,
  experiences,
  profile,
  skills
} from "./src/data/profile";

type Filter = SkillCategory | "all";

const filters: Filter[] = ["all", "backend", "frontend", "database", "tools"];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0].id);
  const [activeExperience, setActiveExperience] = useState(0);

  const visibleSkills = useMemo(
    () => skills.filter((skill) => activeFilter === "all" || skill.category === activeFilter),
    [activeFilter]
  );

  const selectedSkill = skills.find((skill) => skill.id === selectedSkillId) ?? skills[0];
  const selectedExperience = experiences[activeExperience];
  const selectedCertifications = certifications.filter((certification) =>
    selectedSkill.certificationIds.includes(certification.id)
  );

  function selectFilter(filter: Filter) {
    setActiveFilter(filter);
    const nextSkill = skills.find((skill) => filter === "all" || skill.category === filter);
    if (nextSkill) {
      setSelectedSkillId(nextSkill.id);
    }
  }

  return (
    <main className="page">
      <section className="hero-shell reveal">
        <div className="hero-accent" />
        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Currículo interativo</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-pitch">{profile.pitch}</p>
            <div className="actions" aria-label="Links de contato">
              <ActionLink href={profile.links.linkedin} label="LinkedIn" primary />
              <ActionLink href={profile.links.certifications} label="Certificados" />
              <ActionLink href={profile.links.github} label="GitHub" />
              <ActionLink href={profile.links.whatsapp} label="WhatsApp" />
              <ActionLink href={profile.links.email} label="Email" />
            </div>
          </div>

          <aside className="profile-panel" aria-label="Resumo do perfil">
            <img className="profile-visual" src={profile.links.avatar} alt={`Foto de ${profile.name}`} />
            <div className="metric-grid">
              <Metric value="3+" label="experiências" />
              <Metric value={String(skills.length)} label="skills" />
              <Metric value={String(certifications.length)} label="certificados" />
            </div>
            <p className="objective">{profile.objective}</p>
          </aside>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Stack técnica</p>
            <h2>Skills com evidência</h2>
            <p>
              Filtre por área e selecione uma skill para ver impacto, evidência e vínculo com
              certificações.
            </p>
          </div>

          <div className="filter-bar" aria-label="Filtros de skills">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "filter active" : "filter"}
                key={filter}
                type="button"
                onClick={() => selectFilter(filter)}
              >
                {categoryLabels[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="skill-workspace">
          <div className="skill-grid">
            {visibleSkills.map((skill) => (
              <SkillCard
                active={selectedSkill.id === skill.id}
                key={skill.id}
                onSelect={() => setSelectedSkillId(skill.id)}
                skill={skill}
              />
            ))}
          </div>

          <aside className="skill-detail" aria-label="Detalhe da skill selecionada">
            <p className="detail-label">Skill selecionada</p>
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.impact}</p>
            <Progress value={selectedSkill.level} tone="gold" />
            <p className="detail-evidence">{selectedSkill.evidence}</p>
            <div className="pill-row">
              <span>{categoryLabels[selectedSkill.category]}</span>
              <span>{selectedSkill.level}% domínio prático</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="certification-band reveal">
        <div className="certification-intro">
          <p className="section-eyebrow">LinkedIn</p>
          <h2>Certificações conectadas às skills</h2>
          <p>
            Cards baseados nos links e prints enviados, com acesso direto às credenciais públicas
            quando disponível.
          </p>
          <ActionLink href={profile.links.certifications} label="Abrir certificados no LinkedIn" />
        </div>

        <div className="certification-list">
          {(selectedCertifications.length ? selectedCertifications : certifications).map(
            (certification) => (
              <CertificationCard certification={certification} key={certification.id} />
            )
          )}
        </div>
      </section>

      <section className="timeline-section reveal">
        <div className="timeline-list">
          <p className="section-eyebrow">Experiência</p>
          <h2>Cargos e trajetória</h2>
          {experiences.map((experience, index) => (
            <button
              className={activeExperience === index ? "timeline-item active" : "timeline-item"}
              key={`${experience.company}-${experience.role}`}
              type="button"
              onClick={() => setActiveExperience(index)}
            >
              <span className="timeline-marker" aria-hidden="true" />
              <span className="timeline-copy">
                <span className="timeline-mode">{experience.mode}</span>
                <strong>{experience.role}</strong>
                <span>{experience.company}</span>
                <small>{experience.period}</small>
              </span>
            </button>
          ))}
        </div>

        <article className="experience-panel">
          <p>{selectedExperience.company}</p>
          <h3>{selectedExperience.role}</h3>
          <span>{selectedExperience.focus}</span>
          <ul>
            {selectedExperience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="stack-row">
            {selectedExperience.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="section reveal">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Formação</p>
            <h2>Base acadêmica</h2>
            <p>Formação conectada com prática em sistemas reais.</p>
          </div>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.title}>
              <h3>{item.title}</h3>
              <strong>{item.place}</strong>
              <p>{item.period}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ActionLink({ href, label, primary = false }: { href: string; label: string; primary?: boolean }) {
  return (
    <a className={primary ? "action primary" : "action"} href={href} rel="noreferrer" target="_blank">
      {label}
    </a>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SkillCard({ skill, active, onSelect }: { skill: Skill; active: boolean; onSelect: () => void }) {
  return (
    <button className={active ? "skill-card active" : "skill-card"} type="button" onClick={onSelect}>
      <span className="skill-topline">
        <strong>{skill.name}</strong>
        <em>{skill.level}%</em>
      </span>
      <Progress value={skill.level} />
      <span className="skill-evidence">{skill.evidence}</span>
      <span className={skill.certificationIds.length > 0 ? "cert-link" : "cert-muted"}>
        {skill.certificationIds.length > 0 ? "Certificação vinculada" : "Sem certificado informado"}
      </span>
    </button>
  );
}

function Progress({ value, tone = "coral" }: { value: number; tone?: "coral" | "gold" }) {
  return (
    <span className="progress" aria-label={`${value}%`}>
      <span className={tone === "gold" ? "progress-fill gold" : "progress-fill"} style={{ width: `${value}%` }} />
    </span>
  );
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <a className="certification-card" href={certification.credentialUrl} rel="noreferrer" target="_blank">
      <span className="certification-topline">
        <strong>{certification.status}</strong>
        <em>{certification.issuer}</em>
      </span>
      <h3>{certification.title}</h3>
      <small>{certification.issuedAt}</small>
      <p>{certification.summary}</p>
      <span className="certification-skills">
        {certification.relatedSkills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </span>
    </a>
  );
}

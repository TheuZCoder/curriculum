import { useMemo, useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native";
import {
  SkillCategory,
  categoryLabels,
  education,
  experiences,
  profile,
  skills
} from "./src/data/profile";
import { colors, shadow } from "./src/theme";

type Filter = SkillCategory | "all";

const filters: Filter[] = ["all", "backend", "frontend", "database", "tools"];
const profileVisual = require("./assets/profile-visual.png");

export default function App() {
  const { width } = useWindowDimensions();
  const isWide = width >= 900;
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [activeExperience, setActiveExperience] = useState(0);

  const visibleSkills = useMemo(
    () => skills.filter((skill) => activeFilter === "all" || skill.category === activeFilter),
    [activeFilter]
  );

  const selectedExperience = experiences[activeExperience];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={[styles.hero, isWide && styles.heroWide]}>
          <View style={styles.heroCopy}>
            <Text style={styles.kicker}>Currículo interativo</Text>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.pitch}>{profile.pitch}</Text>

            <View style={styles.actions}>
              <ActionButton label="LinkedIn" href={profile.links.linkedin} variant="primary" />
              <ActionButton label="GitHub" href={profile.links.github} />
              <ActionButton label="WhatsApp" href={profile.links.whatsapp} />
              <ActionButton label="Email" href={profile.links.email} />
            </View>
          </View>

          <View style={styles.profilePanel}>
            <View style={styles.avatarFrame}>
              <Image source={profileVisual} style={styles.avatar} />
            </View>
            <View style={styles.metricGrid}>
              <Metric value="3+" label="experiências" />
              <Metric value="13" label="skills mapeadas" />
              <Metric value="2026" label="formação ADS" />
            </View>
            <Text style={styles.objective}>{profile.objective}</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mapa de skills</Text>
          <Text style={styles.sectionText}>
            Filtre por área e toque visualmente no que sustenta cada tecnologia no currículo.
          </Text>
        </View>

        <View style={styles.filterBar}>
          {filters.map((filter) => (
            <Pressable
              key={filter}
              onPress={() => setActiveFilter(filter)}
              style={[styles.filterButton, activeFilter === filter && styles.filterActive]}
            >
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                {categoryLabels[filter]}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.skillGrid}>
          {visibleSkills.map((skill) => (
            <View key={skill.name} style={styles.skillCard}>
              <View style={styles.skillTopline}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillLevel}>{skill.level}%</Text>
              </View>
              <View style={styles.track}>
                <View style={[styles.fill, { width: `${skill.level}%` }]} />
              </View>
              <Text style={styles.skillEvidence}>{skill.evidence}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.timelineSection, isWide && styles.timelineWide]}>
          <View style={styles.timelineList}>
          <Text style={styles.sectionTitle}>Cargos e trajetória</Text>
            {experiences.map((experience, index) => (
              <Pressable
                key={`${experience.company}-${experience.role}`}
                onPress={() => setActiveExperience(index)}
                style={[
                  styles.timelineItem,
                  activeExperience === index && styles.timelineItemActive
                ]}
              >
                <Text style={styles.timelineMode}>{experience.mode}</Text>
                <Text style={styles.timelineRole}>{experience.role}</Text>
                <Text style={styles.timelineCompany}>{experience.company}</Text>
                <Text style={styles.timelinePeriod}>{experience.period}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.experiencePanel}>
            <Text style={styles.experienceCompany}>{selectedExperience.company}</Text>
            <Text style={styles.experienceRole}>{selectedExperience.role}</Text>
            <Text style={styles.experienceFocus}>{selectedExperience.focus}</Text>
            <View style={styles.highlights}>
              {selectedExperience.highlights.map((highlight) => (
                <View key={highlight} style={styles.highlightRow}>
                  <View style={styles.dot} />
                  <Text style={styles.highlightText}>{highlight}</Text>
                </View>
              ))}
            </View>
            <View style={styles.stackWrap}>
              {selectedExperience.stack.map((item) => (
                <View key={item} style={styles.stackPill}>
                  <Text style={styles.stackText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.educationSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Formação</Text>
            <Text style={styles.sectionText}>Base acadêmica conectada com prática em sistemas reais.</Text>
          </View>
          <View style={styles.educationGrid}>
            {education.map((item) => (
              <View key={item.title} style={styles.educationCard}>
                <Text style={styles.educationTitle}>{item.title}</Text>
                <Text style={styles.educationPlace}>{item.place}</Text>
                <Text style={styles.educationPeriod}>{item.period}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ActionButton({
  label,
  href,
  variant = "secondary"
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => Linking.openURL(href)}
      style={({ pressed }) => [
        styles.actionButton,
        variant === "primary" && styles.primaryButton,
        pressed && styles.pressed
      ]}
    >
      <Text style={[styles.actionText, variant === "primary" && styles.primaryText]}>{label}</Text>
    </Pressable>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.canvas
  },
  page: {
    gap: 28,
    padding: 20,
    paddingBottom: 42,
    width: "100%",
    maxWidth: 1180,
    alignSelf: "center"
  },
  hero: {
    gap: 22,
    paddingTop: 20
  },
  heroWide: {
    flexDirection: "row",
    alignItems: "stretch"
  },
  heroCopy: {
    flex: 1.4,
    minWidth: 0,
    justifyContent: "center",
    gap: 12
  },
  kicker: {
    color: colors.teal,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  name: {
    color: colors.ink,
    fontSize: 48,
    lineHeight: 52,
    fontWeight: "900",
    letterSpacing: 0
  },
  title: {
    color: colors.moss,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "800",
    letterSpacing: 0
  },
  pitch: {
    maxWidth: 680,
    color: colors.muted,
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingTop: 8
  },
  actionButton: {
    minHeight: 44,
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    paddingHorizontal: 16
  },
  primaryButton: {
    backgroundColor: colors.graphite,
    borderColor: colors.graphite
  },
  actionText: {
    color: colors.ink,
    fontWeight: "800",
    letterSpacing: 0
  },
  primaryText: {
    color: colors.panel
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }]
  },
  profilePanel: {
    flex: 1,
    minWidth: 280,
    borderRadius: 8,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 18,
    gap: 18,
    ...shadow
  },
  avatarFrame: {
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e7ece8"
  },
  avatar: {
    width: "100%",
    height: "100%"
  },
  metricGrid: {
    flexDirection: "row",
    gap: 10
  },
  metric: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#eef3ee",
    padding: 12
  },
  metricValue: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    marginTop: 2
  },
  objective: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0
  },
  sectionHeader: {
    gap: 6
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "900",
    letterSpacing: 0
  },
  sectionText: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0
  },
  filterBar: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  filterButton: {
    minHeight: 40,
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    paddingHorizontal: 14
  },
  filterActive: {
    backgroundColor: colors.teal,
    borderColor: colors.teal
  },
  filterText: {
    color: colors.ink,
    fontWeight: "800",
    letterSpacing: 0
  },
  filterTextActive: {
    color: colors.panel
  },
  skillGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14
  },
  skillCard: {
    flexGrow: 1,
    flexBasis: 250,
    minWidth: 250,
    maxWidth: 370,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
    gap: 10
  },
  skillTopline: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10
  },
  skillName: {
    flex: 1,
    color: colors.ink,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "900",
    letterSpacing: 0
  },
  skillLevel: {
    color: colors.saffron,
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 0
  },
  track: {
    height: 8,
    borderRadius: 8,
    backgroundColor: "#e8eee9",
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: colors.coral
  },
  skillEvidence: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0
  },
  timelineSection: {
    gap: 16
  },
  timelineWide: {
    flexDirection: "row",
    alignItems: "stretch"
  },
  timelineList: {
    flex: 0.88,
    gap: 12,
    minWidth: 280
  },
  timelineItem: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
    gap: 5
  },
  timelineItemActive: {
    borderColor: colors.teal,
    backgroundColor: "#eef7f6"
  },
  timelineMode: {
    color: colors.teal,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  timelineRole: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "900",
    letterSpacing: 0
  },
  timelineCompany: {
    color: colors.moss,
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0
  },
  timelinePeriod: {
    color: colors.muted,
    fontSize: 14,
    letterSpacing: 0
  },
  experiencePanel: {
    flex: 1.2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.graphite,
    padding: 22,
    gap: 12,
    ...shadow
  },
  experienceCompany: {
    color: "#a6dad8",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  experienceRole: {
    color: colors.panel,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
    letterSpacing: 0
  },
  experienceFocus: {
    color: "#d6dfd9",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0
  },
  highlights: {
    gap: 10,
    paddingVertical: 4
  },
  highlightRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.saffron,
    marginTop: 7
  },
  highlightText: {
    flex: 1,
    color: "#edf3ee",
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0
  },
  stackWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  stackPill: {
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 10,
    paddingVertical: 7
  },
  stackText: {
    color: colors.panel,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0
  },
  educationSection: {
    gap: 14
  },
  educationGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14
  },
  educationCard: {
    flexGrow: 1,
    flexBasis: 300,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 18,
    gap: 7
  },
  educationTitle: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "900",
    letterSpacing: 0
  },
  educationPlace: {
    color: colors.teal,
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 0
  },
  educationPeriod: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0
  }
});

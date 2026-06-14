J’ai regardé la vidéo de ce que Codex a produit. Verdict : **c’est propre, cohérent, premium sombre, mais ce n’est pas encore au niveau MotionSites**.

Ce que Codex a bien fait :

* la V1 est beaucoup plus sérieuse que le template Vite ;
* l’univers dark + jaune acide marche ;
* le hero a déjà une identité ;
* l’offre est claire ;
* le parcours commercial est lisible ;
* la base technique semble saine : pas d’énorme usine à gaz visible.

Mais ce qui manque encore :

* **la galerie “Design Worlds” n’apparaît pas vraiment dans la vidéo** ;
* les cards flottantes du hero ressemblent encore à des UI cards, pas à des mini-univers ;
* il n’y a pas assez de 3D/pseudo-3D ;
* pas assez de “scènes” visuelles différentes ;
* le site vend encore surtout “un prompt premium”, alors qu’il doit vendre **une machine à créer des mondes visuels**.

MotionSites se présente comme une bibliothèque de prompts/designs premium pour hero sections, animated backgrounds, gradients et templates, donc notre angle doit être plus précis : pas copier leur bibliothèque, mais vendre un service personnalisé qui transforme une idée en **direction artistique + prompt Codex + système anti-template**. ([MotionSites][1])

## Ce qu’on doit développer au max

Tu as raison : la partie “génération de prompts” doit devenir le cœur du produit.

Pas juste :

```text
Je te fais un prompt Codex.
```

Mais :

```text
Je te fabrique une direction artistique complète, puis je la traduis en prompt exécutable par Codex.
```

Donc l’offre doit être structurée comme ça :

## Le produit réel à vendre

Nom recommandé :

```text
Premium Design Blueprint
```

Sous-produit :

```text
Codex Visual World Prompt
```

Ce que le client reçoit :

1. **Creative Diagnosis**

   * analyse de son idée ;
   * cible ;
   * émotion recherchée ;
   * niveau premium attendu ;
   * pièges à éviter.

2. **5 Visual Worlds**

   * 5 directions artistiques différentes ;
   * chacune avec métaphore, palette, typo, motion, 3D/depth, interaction.

3. **Selected Art Direction**

   * une direction choisie ;
   * spécification détaillée ;
   * layout ;
   * composants ;
   * animations ;
   * responsive ;
   * accessibilité ;
   * performance.

4. **Codex-ready Prompt**

   * prompt complet prêt à coller ;
   * fichiers attendus ;
   * contraintes techniques ;
   * anti-patterns ;
   * critères de validation.

5. **AGENTS.md**

   * règles persistantes du projet ;
   * style premium ;
   * interdictions ;
   * checklist.

6. **Review Prompt**

   * prompt pour forcer Codex à relire brutalement son rendu ;
   * score design ;
   * score code ;
   * score mobile ;
   * score performance.

7. **Polish Prompt**

   * prompt final pour pousser le design après première génération.

C’est ça qui a de la valeur.

## Ce qu’il faut ajouter au site maintenant

Le site actuel montre bien l’offre, mais pas encore assez le produit.

Il faut ajouter une section centrale :

```text
The Blueprint Engine
```

Elle doit montrer les étapes :

```text
Raw idea
→ Creative diagnosis
→ 5 visual worlds
→ Selected direction
→ Codex implementation prompt
→ Anti-template review
```

Et surtout une section :

```text
Prompt Output Example
```

Où on montre un exemple de prompt généré, mais en version très stylée.

Pas un gros bloc de texte chiant. Il faut une interface premium avec tabs :

```text
01 Diagnosis
02 Visual Worlds
03 Art Direction
04 Codex Prompt
05 Review System
```

## Prompt à donner à Codex maintenant

Celui-ci est plus important que le précédent. Il ne demande pas juste du polish visuel. Il restructure le site autour du vrai produit : **la génération de prompts premium**.

```text
You are a senior product designer, conversion strategist, creative director, motion designer, and React frontend engineer.

We already have a working React + TypeScript + Vite + Tailwind CSS landing page for PromptForge Studio.

The current site looks premium, but the product value is not explicit enough.

The core product is not "a prompt".
The core product is a complete Premium Design Blueprint that transforms a rough idea into:
- creative diagnosis
- 5 visual worlds
- selected art direction
- Codex-ready implementation prompt
- AGENTS.md creative rules
- anti-template review prompt
- polish prompt

Goal:
Make the landing page sell the prompt generation system much more clearly.

The page must visually explain:
"PromptForge does not sell generic prompts. It forges complete visual worlds and translates them into Codex-ready design systems."

Keep the existing dark premium art direction:
- cinematic black
- acid yellow accent
- oversized typography
- cursor spotlight
- glass/dark panels
- subtle grid/noise
- premium motion

But improve the information architecture.

Add these new sections:

1. Blueprint Engine section
A premium process interface that shows:

Raw idea
→ Creative diagnosis
→ 5 visual worlds
→ Selected art direction
→ Codex-ready prompt
→ Anti-template review

This should look like a high-end command interface, not a boring process list.

Use:
- connected nodes
- glowing active step
- code/prompt fragments
- premium dark panels
- subtle motion
- responsive layout

2. Visual Worlds Gallery section
Add 12 mini-world cards inspired by premium MotionSites cards.

Each card must feel like a different website direction, not a generic card.

Create:
- Cinematic AI Lab
- Spatial Product Launch
- Geology Cursor Reveal
- Luxury Editorial
- Naturecore Portal
- 3D Collectible Hero
- Brutalist Portfolio
- Holographic Dashboard
- Dreamcore Landing
- Clean AI Object
- Architectural SaaS
- Kinetic Typography

Each card needs:
- CSS-only visual scene
- unique background
- unique visual metaphor
- title
- category
- short design traits
- subtle hover depth
- no fake screenshots
- no external images
- no canvas
- no Three.js for now

3. Prompt Anatomy section
Show what the final Codex prompt contains.

Use a premium split layout:
Left side:
"Generic prompt"
A weak short prompt:
"Build me a modern landing page."

Right side:
"PromptForge output"
A structured prompt anatomy with layers:
- Role
- Art direction
- Visual metaphor
- Layout system
- Motion system
- Interaction system
- Technical constraints
- Accessibility
- Anti-patterns
- Review criteria

This section must make the buyer understand why the output is valuable.

4. Deliverables section
Replace or strengthen the offer content.

The package is:
Premium Design Blueprint — 79€

Includes:
- 5 custom visual worlds
- 1 selected premium art direction
- 1 Codex-ready implementation prompt
- 1 AGENTS.md creative rule file
- 1 anti-template review prompt
- 1 implementation polish prompt
- 1 responsive/performance checklist

Make it feel concrete, not vague.

5. Proof without fake testimonials
Add a "Why this works" section:
- AI tools execute instructions, they do not invent taste
- generic prompts create generic websites
- premium output requires art direction before code
- constraints improve creativity
- review prompts prevent template drift

Use strong copy and visual hierarchy.

Hero update:
Update headline to:
"Stop prompting for pages. Start prompting for worlds."

Subheadline:
"PromptForge Studio turns rough ideas into cinematic art directions, Codex-ready prompts, and anti-template systems that help AI generate original premium websites."

Hero visual:
Improve the right hero visual into a "Forge Engine":
- weak prompt fragments enter from one side
- a glowing core transforms them
- visual world cards exit from the other side
- use CSS-only shapes and cards
- subtle motion
- no heavy dependencies

Important design rules:
- Do not make the site look like a generic SaaS landing page.
- Do not create boring cards.
- Do not create a flat process list.
- Do not create a fake dashboard unless it helps explain the product.
- Each visual world card must have a unique identity.
- The mobile version must still feel premium.
- The offer must feel worth 79€.

Technical constraints:
- Modify mainly src/App.tsx and src/index.css
- React + TypeScript
- Tailwind CSS
- lucide-react
- no backend
- no routing
- no external images
- no canvas
- no Three.js
- no React state updates per animation frame
- use CSS animations, transform, opacity, filters, CSS variables
- support prefers-reduced-motion
- semantic HTML
- accessible buttons and links
- no horizontal overflow

Before coding:
1. summarize the strengthened product positioning
2. list the sections you will add or change
3. explain how you will avoid performance problems
4. explain how you will prevent generic design output

Then implement the full update.
```

## Et pour la génération de prompts, voilà le vrai système

À terme, le service peut utiliser un formulaire client très simple :

```text
Nom du projet
Secteur
Cible
Objectif commercial
Style souhaité
Styles refusés
Niveau d’animation
Technos
Exemples aimés
Exemples détestés
```

Et derrière, tu produis toujours ce format :

```text
1. Creative diagnosis
2. 5 visual worlds
3. Selected art direction
4. Codex implementation prompt
5. AGENTS.md
6. Review prompt
7. Polish prompt
```

## Template de prompt “produit final” à vendre

Celui-là, garde-le. C’est le squelette de sortie que ton service doit générer pour chaque client.

```text
# Premium Design Blueprint

## 1. Project Context

Brand:
[brand name]

Business:
[what the client sells]

Target audience:
[who the website is for]

Conversion goal:
[book call / buy / subscribe / contact / download]

Core pain:
[main problem the website must solve]

Desired perception:
[premium / trustworthy / bold / cinematic / technical / luxury / playful]

Forbidden perception:
[generic / cheap / boring / SaaS template / corporate / childish]

## 2. Creative Diagnosis

The current idea is too generic because:
- [reason 1]
- [reason 2]
- [reason 3]

The website needs a stronger visual metaphor:
[visual metaphor]

The page must make the visitor feel:
[emotion]

The strongest design opportunity is:
[opportunity]

## 3. Visual Worlds

Create 5 radically different design directions.

### World 1 — [Name]
Mood:
[description]

Visual metaphor:
[description]

Layout:
[description]

Typography:
[description]

Color palette:
[description]

Motion:
[description]

3D/depth:
[description]

Signature interaction:
[description]

Best for:
[description]

Risk:
[description]

### World 2 — [Name]
[...]

### World 3 — [Name]
[...]

### World 4 — [Name]
[...]

### World 5 — [Name]
[...]

## 4. Selected Art Direction

Selected world:
[name]

Reason:
[why this is the strongest direction]

Art direction:
[detailed visual direction]

Page structure:
- Hero
- Problem
- Transformation
- Offer
- Proof
- CTA

Visual system:
- Background:
- Typography:
- Color:
- Motion:
- Components:
- Depth:
- Interactions:

## 5. Codex-ready Implementation Prompt

You are a senior creative director, motion designer, conversion designer, accessibility-aware frontend engineer, and React architect.

Build a premium landing page for:
[brand/project]

The result must look like a premium 2026 website inspired by MotionSites/Awwwards quality, not like a generic Tailwind SaaS template.

Goal:
[goal]

Art direction:
[art direction]

Visual metaphor:
[visual metaphor]

Required sections:
[sections]

Signature effect:
[effect]

Motion system:
[motion]

Technical stack:
- React
- TypeScript
- Vite
- Tailwind CSS
- lucide-react

Performance rules:
- no unnecessary dependencies
- no React state updates every animation frame
- use transform and opacity
- respect prefers-reduced-motion

Accessibility rules:
- semantic HTML
- accessible buttons and links
- readable contrast
- keyboard navigation

Anti-patterns:
- no generic SaaS look
- no boring cards
- no random blobs
- no basic centered hero
- no cheap glassmorphism
- no fake testimonials

Generate complete files:
- package.json
- index.html
- vite.config.ts
- src/main.tsx
- src/App.tsx
- src/index.css

Before coding, explain:
- art direction
- files changed
- performance risks avoided

Then implement.

## 6. AGENTS.md

# Project Creative Rules

This project must never produce generic AI-generated web design.

Quality target:
- premium
- cinematic
- original
- motion-first
- conversion-oriented
- mobile-first
- accessible
- performant

Forbidden:
- generic SaaS layout
- default Tailwind look
- flat cards
- random blobs
- basic fade-up only
- weak typography
- no visual metaphor

Required:
- strong art direction
- signature visual effect
- responsive design
- reduced motion support
- anti-template review before final output

## 7. Review Prompt

Review the implementation like a brutal senior creative director and frontend performance engineer.

Score from 0 to 10:
- originality
- premium feeling
- visual metaphor
- typography
- motion
- depth
- mobile quality
- accessibility
- performance
- code maintainability
- conversion clarity

If any score is below 8, refactor the implementation.

The page fails if it looks like:
- a Tailwind template
- a generic SaaS page
- a random AI-generated website
- a Dribbble clone without conversion logic

## 8. Polish Prompt

Push the current implementation one level closer to premium MotionSites/Awwwards quality.

Improve:
- visual signature
- motion quality
- depth
- typography
- section rhythm
- CTA clarity
- mobile polish
- performance

Do not rewrite everything.
Do not simplify the design.
Do not break accessibility.
Do not add unnecessary dependencies.
```

## Mon conseil clair

Ne fais pas encore un générateur automatique. Pas maintenant.

Pour vendre vite :

* landing premium ;
* formulaire Tally/Google Form ;
* paiement Stripe ou lien manuel ;
* tu produis le blueprint à la main avec IA ;
* tu vois si des gens paient.

Ensuite seulement, on automatise.

Parce que sinon tu vas passer 3 semaines à coder un générateur sans preuve que quelqu’un achète.

Là, le bon MVP, c’est :

```text
Landing page + offre 79€ + formulaire client + livraison manuelle du blueprint
```

Puis après :

```text
v2 = générateur semi-automatisé
v3 = dashboard
v4 = marketplace de prompts
```

Mais le cœur à développer maintenant, c’est bien **le système de blueprint**, pas juste la beauté du site.

[1]: https://motionsites.ai/?utm_source=chatgpt.com "MotionSites — Premium AI Hero Prompts & Design Library"

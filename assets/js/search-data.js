// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Selected and full publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects, paper resources, and code releases.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected open-source repositories and research code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Academic CV, generated from the latest structured CV data.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-ulysses",
          title: 'Ulysses',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ulysses/";
            },},{id: "news-the-preprint-vision-language-models-map-logos-to-text-via-semantic-entanglement-in-the-visual-projector-is-available-on-arxiv",
          title: 'The preprint Vision Language Models Map Logos to Text via Semantic Entanglement in...',
          description: "",
          section: "News",},{id: "news-semvink-advancing-vlms-semantic-understanding-of-optical-illusions-via-visual-global-thinking-was-presented-as-an-oral-paper-at-the-emnlp-2025-main-conference-in-suzhou",
          title: 'SemVink: Advancing VLMs’ Semantic Understanding of Optical Illusions via Visual Global Thinking was...',
          description: "",
          section: "News",},{id: "news-the-preprint-optisql-executable-sql-generation-from-optical-tokens-is-available-on-arxiv",
          title: 'The preprint OptiSQL: Executable SQL Generation from Optical Tokens is available on arXiv....',
          description: "",
          section: "News",},{id: "news-i-started-as-an-assistant-researcher-in-ai4science-at-shanghai-ai-lab",
          title: 'I started as an assistant researcher in AI4Science at Shanghai AI Lab.',
          description: "",
          section: "News",},{id: "news-the-preprint-geosvg-rl-geometry-aware-reinforcement-learning-for-layout-constrained-text-to-svg-diagram-generation-is-available-on-arxiv",
          title: 'The preprint GeoSVG-RL: Geometry-Aware Reinforcement Learning for Layout-Constrained Text-to-SVG Diagram Generation is available...',
          description: "",
          section: "News",},{id: "projects-geosvg-rl",
          title: 'GeoSVG-RL',
          description: "Geometry-aware reinforcement learning for layout-constrained text-to-SVG diagram generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geosvg-rl/";
            },},{id: "projects-hrm-idioma",
          title: 'HRM-Idioma',
          description: "Hierarchical reasoning model pretrained with language data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hrm-idioma/";
            },},{id: "projects-logotext",
          title: 'LogoText',
          description: "Semantic entanglement between logos and text in vision-language models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/logotext/";
            },},{id: "projects-optisql",
          title: 'OptiSQL',
          description: "Executable SQL generation from optical tokens.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optisql/";
            },},{id: "projects-replace-in-translation",
          title: 'Replace in Translation',
          description: "Boosting concept alignment in counterfactual text-to-image generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/replace-in-translation/";
            },},{id: "projects-semvink",
          title: 'SemVink',
          description: "Visual global thinking for VLM semantic understanding of optical illusions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/semvink/";
            },},{id: "projects-tcm-llm-name-bias",
          title: 'TCM LLM Name Bias',
          description: "Large language models over-rely on names to identify Chinese drug ingredients.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tcm-llm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%66%6C%69%6A%6F%68%6E@%66%6F%78%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/johnnyZeppelin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/john-lechest-0721b1368", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-0482-1479", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Gc1bAVwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

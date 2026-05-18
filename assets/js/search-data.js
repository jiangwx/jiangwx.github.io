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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected and full publication list in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "LPU project overview and technical notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and selected repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "教育经历、工作经历、研究方向与代表成果。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-愿景-理论-行动",
        
          title: "愿景-理论-行动",
        
        description: "围绕读研、科研、项目和职业发展的问题清单，给出愿景、理论与行动的整体框架。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/vision-theory-action/";
          
        },
      },{id: "post-怎么发现问题",
        
          title: "怎么发现问题？",
        
        description: "从“复现-优化”路径的局限，谈问题意识如何在自己的项目体系中生长出来。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/how-to-find-problems/";
          
        },
      },{id: "post-金字塔原理",
        
          title: "金字塔原理",
        
        description: "用需求、层次和统摄关系组织复杂项目、复杂知识与复杂沟通。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/pyramid-principle/";
          
        },
      },{id: "post-造火箭原理",
        
          title: "造火箭原理",
        
        description: "先凑齐做成一件事所需的关键要素，再进入执行。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rocket-principle/";
          
        },
      },{id: "post-算力-算法-数据理论",
        
          title: "算力、算法、数据理论",
        
        description: "用算力、算法和数据解释科研训练与人才培养的基本逻辑。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/computing-algorithm-data/";
          
        },
      },{id: "projects-lpu",
          title: 'LPU',
          description: "面向端侧大模型推理的处理器架构设计项目，覆盖需求分析、架构定义、Memory Model、Execution Model 与后续 RTL 落地路径。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lpu/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6E%67%77%65%69%78%69%6F%6E%67@%74%6F%6E%67%6A%69.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jiangwx", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6014-6453", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://tju-opentpu.feishu.cn/wiki/UmSNwezqTi0y6gkG8L0cEwl4n1f", "_blank");
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

module.exports = [
  {
    id: "vim",
    name: "Vim",
    alternative: "Neovim, Nano, Emacs, Sublime Text, Micro",
    category: "Development",
    subcategory: "General",
    license: "Vim",
    version: "9.1.0",
    fileSize: "15 MB",
    description: "Highly configurable, ubiquitous modal text editor designed for efficient text and code manipulation.",
    fullDescription: "Vim (Vi IMproved) is an advanced, highly configurable command-line and graphical text editor built to enable efficient text editing. Standard on almost every Unix-like operating system and accessible across Windows and macOS, Vim's modal editing philosophy separates text navigation, insertion, visual selection, and command execution, allowing developers to manipulate complex codebases without their fingers ever leaving the home row. It features extensive syntax highlighting, multi-level undo trees, regex search and replace, and thousands of community plugins.",
    features: [
      "Modal editing paradigm (Normal, Insert, Visual, Command-line) maximizing typing ergonomics",
      "Persistent multi-level branching undo tree allowing navigation backward and forward through editing history",
      "Extensive syntax highlighting, automated indentation, and code folding for hundreds of programming languages",
      "Powerful search and substitution engine powered by Perl-compatible regular expressions",
      "Extensible scripting engine supporting Vimscript and modern compiled Vim9 script execution",
      "Ubiquitous availability across Linux, BSD, macOS, Windows, and remote SSH terminal sessions"
    ],
    uses: "Edit configuration files on remote servers, write software across diverse languages, and perform high-speed text refactoring.",
    tags: ["vim", "modal-editor", "text-editor", "cli", "terminal", "vi", "development"],
    logoSource: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/vim.svg",
    screenshotSources: [],
    download: "https://www.vim.org/download.php",
    source: "https://github.com/vim/vim",
    website: "https://www.vim.org/",
    docs: "https://www.vim.org/docs.php",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install vim" },
      { label: "Fedora", command: "sudo dnf install vim" },
      { label: "Arch Linux", command: "sudo pacman -S vim" },
      { label: "macOS (brew)", command: "brew install vim" },
      { label: "Windows (winget)", command: "winget install vim.vim" }
    ],
    comparisonData: {
      columns: ["Vim", "Nano / Traditional Editors"],
      rows: [
        { feature: "Ergonomic modal keybindings with zero mouse requirement", values: [true, false] },
        { feature: "Full branching undo tree history", values: [true, false] },
        { feature: "Ubiquitous default deployment on virtually all servers", values: [true, false] },
        { feature: "Advanced macro recording and replay", values: [true, false] },
        { feature: "Open Source (Vim Charityware License)", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, macOS, Windows, BSD, Unix\nRuns on any CPU architecture\nRequires under 20 MB of RAM",
    maintainer: "community",
    developer: "Bram Moolenaar & The Vim Development Team",
    developerUrl: "https://www.vim.org/",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"]
  },
  {
    id: "neovim",
    name: "Neovim",
    alternative: "Vim, Visual Studio Code, Emacs, Sublime Text, Helix",
    category: "Development",
    subcategory: "General",
    license: "Apache-2.0",
    version: "0.10.2",
    fileSize: "22 MB",
    description: "Hyperextensible, modern Vim-fork focused on extensibility, Lua configuration, and native LSP integration.",
    fullDescription: "Neovim is an aggressive, modern refactoring of Vim designed to maximize extensibility and modernize the developer experience. Neovim introduces a first-class Lua scripting runtime, asynchronous job control, and built-in Language Server Protocol (LSP) and Tree-sitter integration for syntax-aware code parsing, autocompletion, and refactoring. Featuring an embeddable architecture with message-pack RPC APIs, Neovim powers terminal workflows as well as sophisticated graphical GUI wrappers and IDE extensions.",
    features: [
      "Built-in Language Server Protocol (LSP) client offering autocompletion, go-to-definition, and diagnostics",
      "Native Tree-sitter integration providing incremental semantic syntax highlighting and AST navigation",
      "First-class Lua 5.1/LuaJIT configuration engine enabling blazing-fast plugin execution",
      "Asynchronous job control ensuring external formatters, linters, and compilers never freeze the UI",
      "Modern terminal emulator (:terminal) embedded directly within editor split buffers",
      "Full backward compatibility with existing Vim editing commands and modal idioms"
    ],
    uses: "Develop full-stack web and systems software, navigate large enterprise codebases, and configure modern terminal IDEs.",
    tags: ["neovim", "nvim", "lua", "lsp", "tree-sitter", "modal-editor", "terminal", "development"],
    logoSource: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/neovim.svg",
    screenshotSources: [],
    download: "https://neovim.io/",
    source: "https://github.com/neovim/neovim",
    website: "https://neovim.io/",
    docs: "https://neovim.io/doc/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.neovim.nvim" },
      { label: "Ubuntu / Debian", command: "sudo apt install neovim" },
      { label: "Arch Linux", command: "sudo pacman -S neovim" },
      { label: "macOS (brew)", command: "brew install neovim" },
      { label: "Windows (winget)", command: "winget install Neovim.Neovim" }
    ],
    comparisonData: {
      columns: ["Neovim", "Classic Vim"],
      rows: [
        { feature: "Built-in Language Server Protocol (LSP) client", values: [true, false] },
        { feature: "Native Tree-sitter AST syntax parser", values: [true, false] },
        { feature: "High-performance LuaJIT configuration and plugins", values: [true, false] },
        { feature: "Asynchronous job control by default", values: [true, false] },
        { feature: "Open Source (Apache-2.0)", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS 10.15+\n1 GHz CPU, 512 MB RAM\nModern terminal emulator with TrueColor support recommended",
    maintainer: "community",
    developer: "Thiago de Arruda & Neovim Core Contributors",
    developerUrl: "https://github.com/neovim",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"]
  },
  {
    id: "geany",
    name: "Geany",
    alternative: "Notepad++, Visual Studio Code, Code::Blocks, Kate, Sublime Text",
    category: "Development",
    subcategory: "IDEs",
    license: "GPL-2.0-or-later",
    version: "2.0.0",
    fileSize: "18 MB",
    description: "Lightweight, lightning-fast integrated development environment using the GTK toolkit and Scintilla editor.",
    fullDescription: "Geany is a small, lightweight integrated development environment (IDE) engineered to be fast, responsive, and completely independent of bulky desktop environments. Utilizing the Scintilla editing engine and GTK toolkit, Geany requires only minimal libraries, launching near instantaneously while providing full IDE capabilities: syntax highlighting for over 50 languages, code folding, symbol lists, autocompletion, integrated build commands, and terminal emulation.",
    features: [
      "Ultra-fast startup time and minimal RAM usage (<40 MB idle) powered by Scintilla and GTK",
      "Syntax highlighting and code folding covering more than 50 programming and markup languages",
      "Symbol navigation panel listing functions, variables, macros, and classes in real time",
      "Configurable build system allowing compilation and execution directly with single key shortcuts",
      "Embedded VTE terminal emulator providing seamless shell command execution inside the editor",
      "Extensible plugin system providing Git status, spell check, project management, and XML formatting"
    ],
    uses: "Develop C, C++, Python, and Web code on resource-constrained hardware, quick code edits, and lightweight IDE workflows.",
    tags: ["ide", "code-editor", "scintilla", "gtk", "lightweight-ide", "c-cpp", "python", "development"],
    logoSource: "https://www.geany.org/favicon.ico",
    screenshotSources: [],
    download: "https://www.geany.org/download/",
    source: "https://github.com/geany/geany",
    website: "https://www.geany.org/",
    docs: "https://www.geany.org/documentation/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.geany.Geany" },
      { label: "Ubuntu / Debian", command: "sudo apt install geany" },
      { label: "Fedora", command: "sudo dnf install geany" },
      { label: "Windows (winget)", command: "winget install Geany.Geany" },
      { label: "macOS (brew)", command: "brew install --cask geany" }
    ],
    comparisonData: {
      columns: ["Geany", "VS Code"],
      rows: [
        { feature: "Native C/GTK binary launching in fractions of a second", values: [true, false] },
        { feature: "Minimal memory footprint (under 50 MB RAM)", values: [true, false] },
        { feature: "Zero Electron bloat or web runtime dependency", values: [true, false] },
        { feature: "Integrated symbol list and compilation shortcuts", values: [true, true] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 7/10/11, macOS, BSD\n500 MHz CPU, 256 MB RAM\nGTK 3 runtime",
    maintainer: "community",
    developer: "Geany Development Team & Enrico Tröger",
    developerUrl: "https://github.com/geany",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"]
  },
  {
    id: "code-blocks",
    name: "Code::Blocks",
    alternative: "Microsoft Visual Studio, CLion, Dev-C++, Eclipse CDT",
    category: "Development",
    subcategory: "IDEs",
    license: "GPL-3.0-or-later",
    version: "20.03",
    fileSize: "48 MB",
    description: "Extensible, highly configurable C, C++, and Fortran IDE built to meet the most demanding developer needs.",
    fullDescription: "Code::Blocks is an open-source, cross-platform integrated development environment built specifically for C, C++, and Fortran programmers. Designed around an extensible plugin architecture, Code::Blocks lets developers customize every aspect of their workflow. It supports multiple compilers out of the box—including GCC/Clang, MinGW, MSVC, and Digital Mars—and features full multi-target project management, an interactive visual debugger (GDB/CDB), and wxSmith visual GUI builder for wxWidgets applications.",
    features: [
      "Multi-compiler support: GCC (MinGW), Clang, Microsoft Visual C++, Borland C++, and Intel C++",
      "Interactive visual debugger frontend integrated with GDB, CDB, and custom breakpoints",
      "wxSmith visual RAD designer for drag-and-drop creation of wxWidgets desktop user interfaces",
      "High-speed compilation with parallel multi-core build scheduling and custom build steps",
      "Advanced code completion, class browser, code refactoring, and smart indenting",
      "Extensible plugin architecture with bundled tools for hex editing, code statistics, and source formatting"
    ],
    uses: "Develop high-performance C and C++ applications, teach computer science programming courses, and build GUI tools.",
    tags: ["c", "cpp", "ide", "compiler", "gdb", "wxwidgets", "debugger", "development"],
    logoSource: "https://www.codeblocks.org/favicon.ico",
    screenshotSources: [],
    download: "https://www.codeblocks.org/downloads/",
    source: "https://sourceforge.net/projects/codeblocks/",
    website: "https://www.codeblocks.org/",
    docs: "https://www.codeblocks.org/user-manual/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install codeblocks" },
      { label: "Fedora", command: "sudo dnf install codeblocks" },
      { label: "Arch Linux", command: "sudo pacman -S codeblocks" },
      { label: "Windows (winget)", command: "winget install CodeBlocks.CodeBlocks" }
    ],
    comparisonData: {
      columns: ["Code::Blocks", "Visual Studio Community"],
      rows: [
        { feature: "Lightweight installation size (<100 MB vs >15 GB)", values: [true, false] },
        { feature: "Built-in wxWidgets visual RAD designer (wxSmith)", values: [true, false] },
        { feature: "Native cross-platform execution on Linux and Windows", values: [true, false] },
        { feature: "Multi-compiler switching within the same project", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 7/8/10/11, macOS\n1 GHz CPU, 1 GB RAM\nGCC/G++ or Clang compiler toolchain installed",
    maintainer: "community",
    developer: "The Code::Blocks Team",
    developerUrl: "https://www.codeblocks.org/",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "eclipse-ide",
    name: "Eclipse IDE",
    alternative: "IntelliJ IDEA, Apache NetBeans, Visual Studio, VS Code",
    category: "Development",
    subcategory: "IDEs",
    license: "EPL-2.0",
    version: "2024-09",
    fileSize: "120 MB",
    description: "Enterprise-grade integrated development environment renowned for Java development and massive plugin ecosystem.",
    fullDescription: "The Eclipse IDE is a renowned open-source integrated development environment maintained by the Eclipse Foundation. Renowned as the industry gold standard for Java enterprise software engineering, Eclipse provides first-class support for Java, Jakarta EE, C/C++, PHP, Rust, and Python. Eclipse is built on the OSGi modular framework, featuring an unmatched ecosystem of thousands of plugins via the Eclipse Marketplace, incremental compilation, advanced refactoring tools, and deep Git/Maven/Gradle integration.",
    features: [
      "Industry-leading Java Development Tools (JDT) with incremental compilation and real-time error checking",
      "Eclipse Marketplace integration providing access to thousands of enterprise developer plugins",
      "Automated code refactoring: rename, extract method, pull up/push down, and type migration",
      "Native support for build systems including Apache Maven, Gradle, Ant, and Tycho",
      "Extensible OSGi plugin framework enabling modular enterprise workbench customization",
      "Integrated visual debugger, code profiler, and JUnit/TestNG automated unit test runners"
    ],
    uses: "Develop enterprise Java services, build Spring Boot microservices, debug C/C++ embedded systems, and author plugins.",
    tags: ["eclipse", "java", "ide", "enterprise", "maven", "gradle", "spring-boot", "development"],
    logoSource: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/eclipseide.svg",
    screenshotSources: [],
    download: "https://www.eclipse.org/downloads/",
    source: "https://github.com/eclipse-platform/eclipse.platform",
    website: "https://www.eclipse.org/",
    docs: "https://help.eclipse.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.eclipse.Java" },
      { label: "Windows (winget)", command: "winget install EclipseFoundation.EclipseInstaller" },
      { label: "macOS (brew)", command: "brew install --cask eclipse-java" },
      { label: "Official Installer", command: "https://www.eclipse.org/downloads/" }
    ],
    comparisonData: {
      columns: ["Eclipse IDE", "IntelliJ IDEA Ultimate"],
      rows: [
        { feature: "Full Java EE / Jakarta enterprise features free forever", values: [true, false] },
        { feature: "Incremental background compilation during keystrokes", values: [true, false] },
        { feature: "Massive open plugin marketplace with zero paywalls", values: [true, false] },
        { feature: "Deep OSGi modular architecture", values: [true, false] },
        { feature: "Open Source (EPL-2.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\nJava Development Kit (JDK) 17+ or 21+\n2 GHz multi-core CPU, 4 GB RAM minimum (8 GB recommended)",
    maintainer: "organization",
    developer: "Eclipse Foundation & Community Contributors",
    developerUrl: "https://www.eclipse.org/",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "apache-netbeans",
    name: "Apache NetBeans",
    alternative: "IntelliJ IDEA, Eclipse IDE, Visual Studio, VS Code",
    category: "Development",
    subcategory: "IDEs",
    license: "Apache-2.0",
    version: "23",
    fileSize: "135 MB",
    description: "Versatile, out-of-the-box integrated development environment for Java, PHP, HTML5, and JavaScript.",
    fullDescription: "Apache NetBeans is an open-source development environment, tooling platform, and application framework that provides complete out-of-the-box language support without requiring complicated initial configuration. NetBeans delivers first-class development tools for Java SE, Java EE, PHP, C/C++, and HTML5/JavaScript, featuring smart code completion, syntax highlighting, type hints, an interactive visual Swing GUI designer (Matisse), and native Maven and Gradle project handling.",
    features: [
      "Out-of-the-box support for modern Java 21+ features including pattern matching and virtual threads",
      "Matisse visual drag-and-drop GUI builder for rapid Java Swing and desktop application design",
      "Native Maven and Gradle project support requiring zero proprietary configuration metadata",
      "Rich web development tools for HTML5, CSS3, JavaScript, TypeScript, and popular PHP frameworks",
      "Integrated Git, Mercurial, and Subversion version control with visual side-by-side diff viewers",
      "Comprehensive refactoring tools and static code analysis hints for performance optimization"
    ],
    uses: "Develop Java desktop and backend services, build PHP websites, design Swing GUI interfaces, and manage Maven builds.",
    tags: ["netbeans", "java", "ide", "php", "maven", "swing", "matisse", "development"],
    logoSource: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/apachenetbeanside.svg",
    screenshotSources: [],
    download: "https://netbeans.apache.org/front/main/download/",
    source: "https://github.com/apache/netbeans",
    website: "https://netbeans.apache.org/",
    docs: "https://netbeans.apache.org/tutorial/main/index.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.apache.netbeans" },
      { label: "Ubuntu (Snap)", command: "sudo snap install netbeans --classic" },
      { label: "Windows (winget)", command: "winget install Apache.NetBeans" },
      { label: "macOS (brew)", command: "brew install --cask netbeans" }
    ],
    comparisonData: {
      columns: ["Apache NetBeans", "IntelliJ IDEA Community"],
      rows: [
        { feature: "Built-in visual Swing GUI designer (Matisse)", values: [true, false] },
        { feature: "Full PHP and web development included out of the box", values: [true, false] },
        { feature: "Native Maven and Gradle projects with zero lock-in", values: [true, true] },
        { feature: "Completely open-source Apache-2.0 licensing", values: [true, false] },
        { feature: "Zero recurring subscription fees", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\nJava Development Kit (JDK) 17+ or 21+\n2 GHz multi-core CPU, 4 GB RAM minimum",
    maintainer: "organization",
    developer: "Apache Software Foundation & NetBeans Contributors",
    developerUrl: "https://github.com/apache/netbeans",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "gnu-octave",
    name: "GNU Octave",
    alternative: "MATLAB, Scilab, Wolfram Mathematica, NumPy, Julia",
    category: "Development",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "9.2.0",
    fileSize: "85 MB",
    description: "High-level scientific programming language and numerical computation environment largely compatible with MATLAB.",
    fullDescription: "GNU Octave is a high-level scientific programming language and numerical computation environment engineered for mathematics, algorithm development, and engineering simulations. Octave features extensive syntax compatibility with MATLAB, allowing researchers, engineers, and educators to run their numerical scripts seamlessly on a fully free-software platform. It provides sophisticated tools for linear algebra, differential equations, signal processing, and interactive 2D/3D visualization using OpenGL and Gnuplot.",
    features: [
      "Extensive syntax compatibility with MATLAB scripts, functions, and mathematical routines",
      "Comprehensive linear algebra, matrix manipulation, polynomial factorization, and ODE solvers",
      "Interactive graphical user interface with editor, workspace variable browser, and command history",
      "Rich 2D and 3D data visualization powered by OpenGL with publication-quality vector exports",
      "Extensible Octave Forge package ecosystem for signal processing, control systems, and statistics",
      "C++ and Fortran foreign function interface (MEX) for high-performance algorithm acceleration"
    ],
    uses: "Simulate electrical engineering circuits, model numerical differential equations, teach linear algebra, and process sensor data.",
    tags: ["octave", "numerical-computing", "matlab-alternative", "linear-algebra", "scientific-computing", "gnu", "development"],
    logoSource: "https://octave.org/favicon.ico",
    screenshotSources: [],
    download: "https://octave.org/download",
    source: "https://git.savannah.gnu.org/cgit/octave.git",
    website: "https://octave.org/",
    docs: "https://docs.octave.org/latest/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.octave.Octave" },
      { label: "Ubuntu / Debian", command: "sudo apt install octave" },
      { label: "Fedora", command: "sudo dnf install octave" },
      { label: "Windows (winget)", command: "winget install GNU.Octave" },
      { label: "macOS (brew)", command: "brew install octave" }
    ],
    comparisonData: {
      columns: ["GNU Octave", "MATLAB"],
      rows: [
        { feature: "100% Free with zero license costs or activation limits", values: [true, false] },
        { feature: "Extensive syntax and functional compatibility", values: [true, true] },
        { feature: "No proprietary runtime or hardware locking", values: [true, false] },
        { feature: "Integrated GUI editor and workspace browser", values: [true, true] },
        { feature: "Open Source (GPL-3.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\n2 GHz dual-core CPU\n2 GB RAM minimum (4 GB recommended)\nOpenGL compatible GPU recommended",
    maintainer: "organization",
    developer: "GNU Project & John W. Eaton",
    developerUrl: "https://octave.org/",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "rstudio-desktop",
    name: "RStudio Desktop",
    alternative: "JupyterLab, Spyder, VS Code, Positron, PyCharm",
    category: "Development",
    subcategory: "IDEs",
    license: "AGPL-3.0-only",
    version: "2024.09.0",
    fileSize: "185 MB",
    description: "Premier integrated development environment for the R language, data science, statistical analysis, and Quarto.",
    fullDescription: "RStudio Desktop (developed by Posit) is the premier open-source integrated development environment purpose-built for statistical computing, data science, and reproducibility with R and Python. RStudio brings together a syntax-highlighting code editor, interactive console, workspace variable viewer, package management, history, and integrated plot viewers into a cohesive workbench. It provides first-class support for Quarto, R Markdown documents, Shiny web applications, and version control.",
    features: [
      "Integrated multi-pane environment combining source editor, R console, plots, and workspace variables",
      "First-class authoring for Quarto and R Markdown reproducible reports, books, and scientific slides",
      "Interactive data viewer for exploring and filtering large R data frames and tibbles in tabular grids",
      "Shiny web application development with live reloading, reactive debugging, and local execution",
      "Integrated package management tools for CRAN, Bioconductor, and GitHub R packages",
      "Integrated Git and SVN version control with visual commit history and branch management"
    ],
    uses: "Conduct biostatistical research, analyze econometric datasets, build interactive Shiny dashboards, and publish Quarto reports.",
    tags: ["rstats", "data-science", "rstudio", "statistics", "quarto", "posit", "shiny", "development"],
    logoSource: "https://raw.githubusercontent.com/rstudio/hex-stickers/main/SVG/RStudio.svg",
    screenshotSources: [],
    download: "https://posit.co/download/rstudio-desktop/",
    source: "https://github.com/rstudio/rstudio",
    website: "https://posit.co/products/open-source/rstudio/",
    docs: "https://docs.posit.co/ide/user/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian (.deb)", command: "https://posit.co/download/rstudio-desktop/" },
      { label: "Fedora (.rpm)", command: "https://posit.co/download/rstudio-desktop/" },
      { label: "Windows (winget)", command: "winget install RStudio.RStudio" },
      { label: "macOS (brew)", command: "brew install --cask rstudio" }
    ],
    comparisonData: {
      columns: ["RStudio Desktop", "VS Code"],
      rows: [
        { feature: "Dedicated statistical workspace inspector with data frame filtering", values: [true, false] },
        { feature: "Native Quarto and R Markdown document weaving", values: [true, false] },
        { feature: "Zero complex configuration required for R statistics", values: [true, false] },
        { feature: "Interactive Shiny application visual execution", values: [true, false] },
        { feature: "Open Source (AGPL-3.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux (Ubuntu/Debian/Fedora), Windows 10/11, macOS 11+\nR statistical environment 3.6+ or 4.0+\n2 GHz multi-core CPU, 4 GB RAM minimum",
    maintainer: "company",
    developer: "Posit Software, PBC (formerly RStudio)",
    developerUrl: "https://github.com/rstudio",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "jupyterlab",
    name: "JupyterLab",
    alternative: "Google Colab, Kaggle Notebooks, Deepnote, Databricks, Hex",
    category: "Development",
    subcategory: "IDEs",
    license: "BSD-3-Clause",
    version: "4.3.0",
    fileSize: "30 MB",
    description: "Next-generation web-based interactive development environment for notebooks, code, and data science workflows.",
    fullDescription: "JupyterLab is the flagship, next-generation user interface for Project Jupyter. It provides a flexible, modular web-based environment where developers and data scientists can configure and arrange workflows in data science, scientific computing, computational journalism, and machine learning. JupyterLab seamlessly integrates interactive Jupyter Notebooks (.ipynb), text editors, terminals, data viewers (CSV, JSON, GeoJSON, PDF, Vega), and interactive output consoles into a tabbed layout.",
    features: [
      "Modular tabbed workspace supporting flexible split panes, drag-and-drop cells, and floating panels",
      "Interactive Jupyter Notebooks combining live Python/R/Julia code, equations, and rich markdown text",
      "Multi-language kernel support: Python, R, Julia, Scala, C++, and over 100 computational languages",
      "Interactive visualization support with rich output for Matplotlib, Plotly, Altair, and Bokeh",
      "Integrated terminal emulator and text editor enabling full shell workflows within the browser",
      "Extensive extension architecture with thousands of community plugins on npm and PyPI"
    ],
    uses: "Train machine learning models, visualize complex datasets, draft reproducible computational papers, and explore APIs.",
    tags: ["jupyter", "notebooks", "python", "data-science", "machine-learning", "interactive-computing", "development"],
    logoSource: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/jupyter.svg",
    screenshotSources: [],
    download: "https://jupyter.org/install",
    source: "https://github.com/jupyterlab/jupyterlab",
    website: "https://jupyter.org/",
    docs: "https://jupyterlab.readthedocs.io/",
    youtube: "",
    installMethods: [
      { label: "Python (pip)", command: "pip install jupyterlab" },
      { label: "Conda / Mamba", command: "conda install -c conda-forge jupyterlab" },
      { label: "JupyterLab Desktop (winget)", command: "winget install ProjectJupyter.JupyterLabDesktop" },
      { label: "macOS (brew)", command: "brew install jupyterlab" }
    ],
    comparisonData: {
      columns: ["JupyterLab", "Google Colab"],
      rows: [
        { feature: "100% Local and self-hosted with complete privacy", values: [true, false] },
        { feature: "No session disconnection timeouts or execution quotas", values: [true, false] },
        { feature: "Freedom to run on custom local GPUs without subscription", values: [true, false] },
        { feature: "Supports hundreds of kernels beyond Python", values: [true, false] },
        { feature: "Open Source (BSD-3-Clause)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\nPython 3.8+\nModern web browser (Firefox, Chromium, Safari)\n2 GHz CPU, 2 GB RAM",
    maintainer: "organization",
    developer: "Project Jupyter & NumFOCUS",
    developerUrl: "https://github.com/jupyterlab",
    platforms: ["Linux", "Windows", "macOS", "Web"]
  },
  {
    id: "orange-data-mining",
    name: "Orange Data Mining",
    alternative: "KNIME, RapidMiner, Alteryx, SPSS Modeler, Weka",
    category: "Development",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "3.37.0",
    fileSize: "140 MB",
    description: "Visual programming environment for data visualization, machine learning, text mining, and bioinformatics.",
    fullDescription: "Orange is an open-source visual programming environment designed for data mining, exploratory data analysis, and machine learning. Targeted at students, researchers, data analysts, and non-programmers, Orange lets users construct powerful analytical pipelines visually by dragging and connecting interactive widgets—ranging from data loaders, clean-up filters, and PCA transforms to classification trees, random forests, neural networks, and hierarchical clustering visualizers.",
    features: [
      "Visual programming workflow canvas connecting interactive data analytics and modeling widgets",
      "Interactive visualizations: scatter plots, box plots, violin distributions, t-SNE, and heatmaps",
      "Comprehensive machine learning algorithms: Logistic Regression, Random Forests, SVM, Naive Bayes, and Neural Networks",
      "Specialized add-ons for bioinformatics, text mining, NLP, image analytics, and spectroscopy",
      "Interactive data selection: select outliers in a scatter plot to inspect corresponding table records instantly",
      "Educational suitability enabling students and analysts to learn machine learning principles without coding"
    ],
    uses: "Explore survey datasets, teach data science courses visually, classify medical bioinformatics samples, and cluster customer segments.",
    tags: ["data-mining", "machine-learning", "visual-programming", "data-visualization", "bioinformatics", "python", "development"],
    logoSource: "https://orangedatamining.com/favicon.ico",
    screenshotSources: [],
    download: "https://orangedatamining.com/download/",
    source: "https://github.com/biolab/orange3",
    website: "https://orangedatamining.com/",
    docs: "https://orangedatamining.com/getting-started/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub si.biolab.orange" },
      { label: "Python (pip)", command: "pip install orange3" },
      { label: "Windows (winget)", command: "winget install BioinformaticsLab.Orange" },
      { label: "macOS Installer", command: "https://orangedatamining.com/download/" }
    ],
    comparisonData: {
      columns: ["Orange Data Mining", "KNIME / RapidMiner"],
      rows: [
        { feature: "Instant interactive bidirectional visual data exploration", values: [true, false] },
        { feature: "100% Free with zero enterprise tier limitations", values: [true, false] },
        { feature: "Clean, intuitive UI optimized for fast exploratory analysis", values: [true, false] },
        { feature: "Built-in bioinformatics and text mining extensions", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\nPython 3.9+\n2 GHz multi-core processor\n4 GB RAM minimum (8 GB recommended)",
    maintainer: "organization",
    developer: "Bioinformatics Laboratory at University of Ljubljana",
    developerUrl: "https://github.com/biolab",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "openrefine",
    name: "OpenRefine",
    alternative: "Trifacta Wrangler, Microsoft Excel, Talend Data Preparation, Alteryx",
    category: "Development",
    subcategory: "General",
    license: "BSD-3-Clause",
    version: "3.8.2",
    fileSize: "115 MB",
    description: "Powerful tool for working with messy data: cleaning, transforming, normalizing, and reconciling with web services.",
    fullDescription: "OpenRefine (formerly Google Refine) is a powerful, open-source desktop data preparation tool designed to clean, transform, and extend large, messy datasets. Running locally in your web browser with complete data privacy, OpenRefine lets users explore massive tabular datasets with faceted browsing, normalize inconsistent text with advanced clustering algorithms (fingerprint, metaphone, levenshtein), reconcile local entities with Wikidata and knowledge bases, and parse nested JSON, XML, and CSV files.",
    features: [
      "Faceted data exploration allowing filtering of millions of rows by text facets, numeric ranges, and error conditions",
      "Advanced text clustering algorithms grouping misspelled or inconsistent values automatically for bulk correction",
      "Reconciliation services matching local entity strings against Wikidata and external authority databases",
      "General Refine Expression Language (GREL), Jython, and Clojure for programmatic column transformations",
      "Complete undo/redo history tracking allowing infinite rollbacks and reproducible JSON recipe exports",
      "100% Offline privacy ensuring sensitive databases and client records never leave the local computer"
    ],
    uses: "Clean and deduplicate customer registries, prepare dirty datasets for machine learning, normalize government open data, and reconcile with Wikidata.",
    tags: ["data-cleaning", "data-wrangling", "openrefine", "wikidata", "reconciliation", "clustering", "development"],
    logoSource: "https://raw.githubusercontent.com/OpenRefine/OpenRefine/master/main/webapp/modules/core/images/logo-gem-126.png",
    screenshotSources: [],
    download: "https://openrefine.org/download",
    source: "https://github.com/OpenRefine/OpenRefine",
    website: "https://openrefine.org/",
    docs: "https://openrefine.org/docs",
    youtube: "",
    installMethods: [
      { label: "Linux (Tarball)", command: "https://openrefine.org/download" },
      { label: "Ubuntu / Debian (PPA/deb)", command: "https://openrefine.org/download" },
      { label: "Windows (winget)", command: "winget install OpenRefine.OpenRefine" },
      { label: "macOS (brew)", command: "brew install --cask openrefine" }
    ],
    comparisonData: {
      columns: ["OpenRefine", "Microsoft Excel"],
      rows: [
        { feature: "Advanced algorithmic text clustering for typo resolution", values: [true, false] },
        { feature: "Direct entity reconciliation with Wikidata", values: [true, false] },
        { feature: "Exportable and reproducible JSON transformation recipes", values: [true, false] },
        { feature: "Handles large datasets without spreadsheet column limit errors", values: [true, false] },
        { feature: "Open Source (BSD-3-Clause)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\nJava Runtime Environment (JRE) 11+\n2 GHz CPU, 2 GB RAM minimum (4 GB recommended for large datasets)",
    maintainer: "community",
    developer: "OpenRefine Community & Code for Science & Society",
    developerUrl: "https://github.com/OpenRefine",
    platforms: ["Linux", "Windows", "macOS"]
  }
];

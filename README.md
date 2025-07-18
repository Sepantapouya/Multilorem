# ✍️ MultiLorem - Multi-language Text Generator for Figma

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/sepantapouya/multilorem)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Figma Plugin](https://img.shields.io/badge/Figma-Plugin-ff7262.svg)](https://figma.com/community)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://sepantapouya.com)

A professional Figma plugin that generates meaningful placeholder text in Persian, Arabic, and 6+ other languages with customizable formatting options. Perfect for designers working on international projects or needing RTL language support.

## ✨ Features

- **🌍 Multi-language Support**: Generate meaningful text in 8 languages:
  - 🇬🇧 English
  - 🇮🇷 Persian (فارسی) - Full RTL support
  - 🇸🇦 Arabic (العربية) - Full RTL support  
  - 🇪🇸 Spanish
  - 🇫🇷 French
  - 🇩🇪 German
  - 🇷🇺 Russian
  - 🇨🇳 Chinese

- **⚙️ Flexible Generation Options**:
  - By Characters (1-1000) - Exact character count
  - By Words (1-1000) - Individual words
  - By Sentences (1-1000) - Complete sentences
  - By Paragraphs (1-1000) - Formatted paragraphs

- **🎯 Smart Features**:
  - Meaningful content instead of traditional Lorem Ipsum
  - RTL language support for Arabic and Persian
  - Automatic text layer creation or replacement
  - Beautiful dark-themed UI matching Figma's interface
  - Option to start with meaningful opener phrases

## 🚀 Quick Start

### Option 1: Install from Figma Community (Recommended)
1. Open Figma (Desktop or Web)
2. Go to **Plugins** → **Browse plugins in Community**
3. Search for **"MultiLorem"**
4. Click **"Install"** to add it to your Figma
5. Start using it right away!

### Option 2: Development Setup
   ```bash
# Clone the repository
git clone https://github.com/sepantapouya/multilorem.git

# Install dependencies
   npm install

# Build the plugin
   npm run build

# In Figma: Plugins → Development → Import plugin from manifest
# Select the manifest.json file
   ```

## 📖 How to Use

### Basic Usage
1. **Launch**: Plugins → MultiLorem (or use Cmd/Ctrl + /)
2. **Select Language**: Choose from 8 available languages
3. **Choose Type**: Characters, Words, Sentences, or Paragraphs
4. **Set Count**: Enter desired amount (1-1000)
5. **Generate**: Click "Generate & Insert"

### Pro Tips
- **📝 Text Selection**: Select a text layer to replace its content
- **➕ No Selection**: Creates a new text layer at viewport center
- **🔄 RTL Support**: Persian and Arabic automatically apply right-to-left formatting
- **✨ Meaningful Content**: Toggle meaningful opener phrases for better context

## 💼 Use Cases

### For Designers
- **International Projects**: Test layouts with different languages
- **RTL Layout Testing**: Perfect for Arabic and Persian interface design
- **Content Strategy**: Use meaningful phrases instead of gibberish
- **Rapid Prototyping**: Quickly populate designs with realistic text

### For Teams
- **Client Presentations**: Show designs with relevant language content
- **Localization Testing**: Test text expansion/contraction across languages
- **Cultural Adaptation**: Use culturally appropriate placeholder text

## 🛠️ Development

### Project Structure
```
multilorem/
├── manifest.json      # Plugin configuration
├── code.ts           # Main plugin logic (TypeScript)
├── code.js           # Compiled JavaScript
├── ui.html           # Plugin UI interface
├── tsconfig.json     # TypeScript configuration
├── package.json      # Dependencies & scripts
└── README.md         # Documentation
```

### Development Commands
```bash
# Build once
npm run build

# Watch mode (auto-rebuild on changes)
npm run watch
```

### Tech Stack
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white)

## 🎨 Design System

The plugin features a modern dark theme that seamlessly integrates with Figma:
- **Primary Color**: `#d2145a` (Pink accent)
- **Background**: `#21252b` (Dark gray)
- **Typography**: Inter font family
- **Interactions**: Smooth hover effects and transitions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sepanta Pouya**
- Website: [Sepantapouya.com](https://sepantapouya.com)
- GitHub: [@sepantapouya](https://github.com/sepantapouya)

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🐛 Issues & Support

Found a bug or need help? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 🔮 Roadmap

- [ ] **More Languages**: Japanese, Korean, Hindi, Turkish
- [ ] **Custom Dictionaries**: Upload your own word lists
- [ ] **Batch Processing**: Generate text for multiple layers
- [ ] **Export Options**: Save generated text to files
- [ ] **Template System**: Save and reuse generation settings
- [ ] **Advanced RTL**: Enhanced right-to-left language support

---

<div align="center">

**Made with ❤️ for the global design community**

[⭐ Star this repo](https://github.com/sepantapouya/multilorem) • [🐛 Report Bug](https://github.com/sepantapouya/multilorem/issues) • [💡 Request Feature](https://github.com/sepantapouya/multilorem/issues)

</div> 
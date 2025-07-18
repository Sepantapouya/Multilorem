# MultiLorem Changelog

## Version 1.1.0 - UI & Functionality Improvements

### Changed
- **Generation Type Selection**: Replaced radio buttons with a dropdown menu for better UX
- **Direct Text Insertion**: Removed preview step - text is now inserted directly into Figma
- **Fixed Word Generation**: "Words" option now generates individual words only (not sentences)
- **Loading State**: Added spinner animation to the generate button while processing
- **Toast Notifications**: Added success/error toast messages for better feedback
- **Simplified Workflow**: One-click generation and insertion for faster workflow

### UI Improvements
- Cleaner interface without preview section
- Better visual feedback with loading states
- Success notifications when text is inserted
- Responsive button states

### Technical Updates
- Refactored message handling to use `generate-and-insert` flow
- Improved error handling and user feedback
- Optimized TypeScript compilation settings

## Version 1.0.0 - Initial Release

### Features
- Multi-language Lorem Ipsum generation (8 languages)
- Support for English, Persian, Arabic, Spanish, French, German, Russian, and Chinese
- Generation by words, sentences, paragraphs, or characters
- RTL support for Arabic and Persian
- Option to start with traditional "Lorem ipsum..." text
- Dark theme UI matching Figma's interface 
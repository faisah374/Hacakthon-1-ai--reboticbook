# Quickstart Guide: AI/Spec-Driven Book Creation

**Feature**: 1-ai-humanoid-book
**Created**: 2025-12-21
**Status**: Draft

## Overview
This guide provides step-by-step instructions to set up, develop, and deploy the AI/Spec-Driven Book on Physical AI & Humanoid Robotics Systems using Docusaurus and GitHub Pages.

## Prerequisites
- Node.js v18 or higher
- Git version control system
- GitHub account
- Basic knowledge of Markdown format
- Text editor or IDE

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies
```bash
cd my-website  # Navigate to the Docusaurus project directory
npm install
```

## Development

### 1. Start Local Development Server
```bash
npm run start
```
This command starts a local development server and opens the website in your browser at `http://localhost:3000`.

### 2. Create Book Content
1. Navigate to the `docs` directory
2. Create or edit the following files:
   - `intro.md` - Introduction to the book
   - `module-1-ros2.md` - ROS 2 middleware module
   - `module-2-simulation.md` - Simulation environments module
   - `module-3-ai-perception.md` - AI perception module
   - `module-4-vla.md` - Vision-Language-Action module
   - `capstone-project.md` - Capstone project section
   - `references.md` - Academic citations and references

### 3. Add Academic Citations
1. Follow APA format for in-text citations
2. Add full citations to the references.md file
3. Ensure minimum 8 peer-reviewed sources from 2015-2025

### 4. Configure Navigation
1. Edit `sidebars.js` to organize the navigation structure
2. Ensure proper linking between modules
3. Test navigation flow during development

## Building and Deployment

### 1. Build Static Site
```bash
npm run build
```
This command generates the static content in the `build` directory.

### 2. Deploy to GitHub Pages
1. Ensure GitHub Pages is enabled in your repository settings
2. Push changes to the main branch:
```bash
git add .
git commit -m "Add book content"
git push origin main
```
3. Configure GitHub Actions for automated deployment (if not already set up)

### 3. Verify Deployment
1. Visit your GitHub Pages URL: `https://<username>.github.io/<repository>`
2. Verify all modules are accessible
3. Test navigation between sections
4. Confirm references are properly formatted

## Content Creation Guidelines

### Module Structure
Each module should include:
- Clear learning objectives
- Technical content (750-1250 words)
- In-text citations to academic sources
- Cross-references to related modules
- Appropriate diagrams or code examples (where helpful)

### Academic Standards
- Use APA citation format consistently
- Include minimum 8 peer-reviewed sources
- Ensure all major claims are supported by evidence
- Verify sources were published within the last 10 years

### Writing Style
- Focus on systems-level architecture rather than implementation details
- Write for technical decision-makers, advanced students, and engineering leaders
- Maintain academic rigor while ensuring accessibility
- Include clear learning outcomes for each section

## Testing

### 1. Content Review
- Verify word count meets 3000-5000 requirement
- Confirm all 4 core system layers are covered
- Check that capstone project integrates concepts
- Validate academic citations and references

### 2. Technical Testing
- Test local development server functionality
- Verify navigation works correctly
- Check that all links are functional
- Ensure responsive design works on different devices

### 3. Academic Validation
- Confirm all sources are peer-reviewed
- Verify APA format compliance
- Check that all major claims have supporting evidence
- Ensure sources are from 2015-2025 timeframe

## Troubleshooting

### Common Issues
1. **Build errors**: Ensure all dependencies are installed with `npm install`
2. **Navigation issues**: Check sidebar configuration in `sidebars.js`
3. **Citation formatting**: Verify APA format consistency throughout
4. **Deployment failures**: Check GitHub Actions logs for errors

### Performance Tips
- Keep images optimized for web delivery
- Use Docusaurus's built-in features for content organization
- Regularly test on local server before deployment
- Maintain consistent formatting across all modules
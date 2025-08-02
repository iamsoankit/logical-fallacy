# Logical Fallacy Trainer - Quick Start Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Usage](#basic-usage)
3. [Developer Setup](#developer-setup)
4. [Common Tasks](#common-tasks)
5. [Customization](#customization)
6. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Text editor or IDE
- Local web server (optional but recommended)

### Installation

1. **Clone or download the project files:**
   ```bash
   git clone https://github.com/yourusername/logical-fallacy-trainer.git
   cd logical-fallacy-trainer
   ```

2. **Project structure:**
   ```
   logical-fallacy-trainer/
   ├── index.html          # Main HTML file
   ├── app.js             # JavaScript application logic
   ├── style.css          # CSS styles
   ├── script.py          # Python data structure (optional)
   └── README.md          # Project overview
   ```

3. **Open in browser:**
   - **Option 1:** Open `index.html` directly in your browser
   - **Option 2:** Use a local web server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx http-server
     
     # VS Code Live Server extension
     # Right-click index.html > "Open with Live Server"
     ```

## Basic Usage

### 1. Running the Application
```javascript
// The application initializes automatically when the page loads
// No manual initialization required
```

### 2. Accessing Different Sections
Navigate through the application using the navigation menu:
- **Home** - Overview and quick stats
- **Fallacy Spotter** - Analyze text for fallacies
- **Quiz Center** - Test your knowledge
- **Daily Challenge** - Complete daily tasks
- **Progress** - View achievements and stats
- **Learn** - Study fallacy reference

### 3. Using the Fallacy Spotter
```javascript
// Example text to analyze
const sampleText = "Either you're with us or against us. Everyone else agrees with this policy, so it must be right.";

// Paste into the text area and click "Analyze Text"
// The app will highlight potential fallacies (False Dilemma, Bandwagon)
```

### 4. Taking a Quiz
```javascript
// Start a quiz programmatically (for testing)
const trainer = new FallacyTrainer();
trainer.startQuiz();

// Or use the UI button "Start New Quiz"
```

## Developer Setup

### 1. Setting Up Development Environment

```bash
# Install development dependencies (optional)
npm init -y
npm install --save-dev live-server eslint prettier

# Create development scripts in package.json
{
  "scripts": {
    "start": "live-server",
    "lint": "eslint app.js",
    "format": "prettier --write *.{html,css,js}"
  }
}
```

### 2. Accessing the Application Instance

```javascript
// The FallacyTrainer instance is created on page load
// Access it through the browser console for debugging:

// Get the instance (you may need to modify app.js to expose it globally)
window.trainer = new FallacyTrainer();

// Now you can call methods directly:
trainer.showSection('quiz');
trainer.awardPoints(50, "Debug points");
trainer.analyzeFallacies("Test text");
```

### 3. Adding Custom Data

```javascript
// Add a new fallacy to the FALLACIES array in app.js
const NEW_FALLACY = {
    id: 8,
    name: "Appeal to Authority",
    definition: "Using an authority figure's opinion as evidence",
    description: "This fallacy occurs when someone argues that a claim is true simply because an authority figure believes it.",
    examples: [
        "This diet must work because a famous actor endorses it.",
        "The policy is good because the CEO supports it."
    ],
    keywords: ["authority", "expert", "famous", "endorses"],
    category: "informal"
};

// Add to FALLACIES array
FALLACIES.push(NEW_FALLACY);
```

## Common Tasks

### 1. Reset User Progress
```javascript
// Clear all user data
localStorage.removeItem('fallacyTrainerData');
location.reload();
```

### 2. Award Points Programmatically
```javascript
// Award custom points
trainer.awardPoints(100, "Custom achievement");
```

### 3. Complete Daily Challenge Automatically
```javascript
// Mark today's challenge as complete
trainer.completeChallenge();
```

### 4. Add Custom Quiz Questions
```javascript
// Add to QUIZ_QUESTIONS array in app.js
const newQuestion = {
    id: 6,
    question: "Your custom question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 2, // Index of correct answer (0-based)
    explanation: "Explanation of why Option C is correct."
};

QUIZ_QUESTIONS.push(newQuestion);
```

### 5. Modify Badge Requirements
```javascript
// In app.js, find the badge check logic and modify:
// Example: Change Quiz Master requirement from 10 to 5 quizzes
if (this.userData.quizzesCompleted >= 5 && // Changed from 10
    this.userData.quizAccuracy >= 80 && 
    !this.userData.earnedBadges.includes(3)) {
    this.awardBadge(3);
}
```

## Customization

### 1. Changing the Theme
```css
/* In style.css, modify CSS variables */
:root {
    --primary-color: #3b82f6;  /* Change primary color */
    --success-color: #10b981;  /* Change success color */
    --warning-color: #f59e0b;  /* Change warning color */
    --error-color: #ef4444;    /* Change error color */
    --text-color: #1f2937;     /* Change text color */
    --bg-color: #f9fafb;       /* Change background color */
}
```

### 2. Adding New Sections
```javascript
// 1. Add HTML section in index.html
<section id="custom" class="section">
    <h2>Custom Section</h2>
    <!-- Your content -->
</section>

// 2. Add navigation button
<button class="nav-btn" data-section="custom">Custom</button>

// 3. Handle in JavaScript (if needed)
if (sectionName === 'custom') {
    this.initializeCustomSection();
}
```

### 3. Modifying Gamification Points
```javascript
// In app.js, find point awards and modify values:
this.awardPoints(20, "Correct quiz answer"); // Changed from 10
this.awardPoints(10, "Used Fallacy Spotter"); // Changed from 5
this.awardPoints(25, "Completed daily challenge"); // Changed from 15
```

### 4. Custom Fallacy Detection Logic
```javascript
// Modify simulateFallacyDetection method for real detection
simulateFallacyDetection(text) {
    const detected = [];
    
    // Add real detection logic
    FALLACIES.forEach(fallacy => {
        fallacy.keywords.forEach(keyword => {
            if (text.toLowerCase().includes(keyword)) {
                detected.push(fallacy);
            }
        });
    });
    
    return detected;
}
```

## Troubleshooting

### Common Issues

1. **Application not loading:**
   - Check browser console for errors
   - Ensure all files are in the same directory
   - Verify file paths in HTML

2. **Data not persisting:**
   - Check if localStorage is enabled
   - Look for localStorage quota errors
   - Try different browser or incognito mode

3. **Styles not applying:**
   - Clear browser cache
   - Check CSS file path
   - Verify no CSS syntax errors

4. **JavaScript errors:**
   ```javascript
   // Enable debug mode by adding to app.js:
   const DEBUG = true;
   
   // Add logging throughout methods:
   if (DEBUG) console.log('Method called:', arguments);
   ```

### Debug Commands

```javascript
// Run these in browser console

// Check current user data
console.log(trainer.userData);

// Force save data
trainer.saveUserData();

// Check localStorage
console.log(localStorage.getItem('fallacyTrainerData'));

// List all fallacies
console.table(FALLACIES);

// Check current section
console.log(trainer.currentSection);

// Trigger achievement toast
trainer.showAchievementToast("Test", "Testing toast notification");
```

### Performance Optimization

1. **Minimize DOM operations:**
   ```javascript
   // Bad
   fallacies.forEach(f => {
       element.innerHTML += `<div>${f.name}</div>`;
   });
   
   // Good
   element.innerHTML = fallacies.map(f => 
       `<div>${f.name}</div>`
   ).join('');
   ```

2. **Debounce search input:**
   ```javascript
   let searchTimeout;
   searchInput.addEventListener('input', (e) => {
       clearTimeout(searchTimeout);
       searchTimeout = setTimeout(() => {
           this.filterFallacies(e.target.value);
       }, 300);
   });
   ```

3. **Lazy load sections:**
   ```javascript
   // Only initialize section when first accessed
   if (!this.sectionsInitialized[sectionName]) {
       this.initializeSection(sectionName);
       this.sectionsInitialized[sectionName] = true;
   }
   ```

## Next Steps

1. **Extend functionality:**
   - Add more fallacies
   - Create difficulty levels
   - Implement user accounts
   - Add social features

2. **Improve UI/UX:**
   - Add animations
   - Improve mobile experience
   - Add dark mode
   - Enhance accessibility

3. **Backend integration:**
   - Create REST API
   - Add database storage
   - Implement real-time features
   - Add analytics

4. **Testing:**
   - Add unit tests
   - Implement E2E testing
   - Performance testing
   - Cross-browser testing
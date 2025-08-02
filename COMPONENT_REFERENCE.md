# Component Reference Guide

## Table of Contents
1. [Overview](#overview)
2. [Layout Components](#layout-components)
3. [Interactive Components](#interactive-components)
4. [Display Components](#display-components)
5. [CSS Classes Reference](#css-classes-reference)
6. [Event Handling](#event-handling)

## Overview

This guide provides detailed documentation for all UI components in the Logical Fallacy Trainer application, including their structure, styling, and interactive behavior.

## Layout Components

### Header Component

**Location**: `<header class="app-header">`

**Purpose**: Main navigation and application branding

**Structure**:
```html
<header class="app-header">
    <div class="container">
        <div class="flex items-center justify-between">
            <div class="logo">
                <h1>🧠 Fallacy Trainer</h1>
            </div>
            <nav class="main-nav">
                <!-- Navigation buttons -->
            </nav>
            <div class="user-stats">
                <span class="points-display">🏆 <span id="total-points">0</span> pts</span>
            </div>
        </div>
    </div>
</header>
```

**Key Elements**:
- Logo with emoji and title
- Navigation menu with section buttons
- Real-time points display

**CSS Classes**:
- `.app-header`: Main header styling
- `.container`: Content wrapper with max-width
- `.flex`: Flexbox layout
- `.logo`: Branding area
- `.main-nav`: Navigation container
- `.user-stats`: Points display area

### Main Container

**Location**: `<main class="container">`

**Purpose**: Content wrapper for all application sections

**Features**:
- Responsive layout
- Section switching mechanism
- Consistent spacing and alignment

## Interactive Components

### Navigation Buttons

**Component**: Navigation Menu

**Location**: `.main-nav`

**Structure**:
```html
<nav class="main-nav">
    <button class="nav-btn active" data-section="home">Home</button>
    <button class="nav-btn" data-section="spotter">Fallacy Spotter</button>
    <button class="nav-btn" data-section="quiz">Quiz Center</button>
    <button class="nav-btn" data-section="challenge">Daily Challenge</button>
    <button class="nav-btn" data-section="progress">Progress</button>
    <button class="nav-btn" data-section="learn">Learn</button>
</nav>
```

**Behavior**:
- Click to navigate between sections
- Active state management
- Responsive design for mobile

**CSS Classes**:
- `.nav-btn`: Base button styling
- `.nav-btn.active`: Active state highlighting
- `data-section`: Section identifier attribute

### Fallacy Spotter Tool

**Component**: Text Analysis Interface

**Location**: `#spotter` section

**Structure**:
```html
<div class="spotter-tool">
    <div class="input-group">
        <textarea id="text-input" placeholder="Enter text to analyze..."></textarea>
        <button id="analyze-btn" class="btn btn-primary">
            🔍 Analyze Text
        </button>
    </div>
    <div id="analysis-results" class="analysis-panel hidden">
        <div class="analysis-header">
            <h3>Analysis Results</h3>
        </div>
        <div id="fallacy-highlights" class="highlighted-text"></div>
        <div id="detected-fallacies" class="fallacy-list"></div>
    </div>
</div>
```

**Functionality**:
- Real-time text input
- Analysis loading states
- Results highlighting
- Fallacy explanations

**Interactive Elements**:
- `#text-input`: Multi-line text input
- `#analyze-btn`: Trigger analysis button
- Highlighted text sections
- Expandable fallacy cards

### Quiz Interface

**Component**: Interactive Quiz System

**Location**: `#quiz` section

**Structure**:
```html
<div class="quiz-container">
    <div class="quiz-header">
        <div id="quiz-progress" class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <div class="question-counter">
            Question <span id="current-question">1</span> of <span id="total-questions">10</span>
        </div>
    </div>
    
    <div id="question-container" class="question-card">
        <div class="question-text"></div>
        <div class="options-container">
            <!-- Dynamic option buttons -->
        </div>
    </div>
    
    <div class="quiz-controls">
        <button id="start-quiz" class="btn btn-primary">Start Quiz</button>
        <button id="next-question" class="btn btn-secondary hidden">Next Question</button>
        <button id="restart-quiz" class="btn btn-outline hidden">Restart Quiz</button>
    </div>
    
    <div id="quiz-results" class="results-panel hidden">
        <!-- Results display -->
    </div>
</div>
```

**States**:
1. **Initial**: Start button visible
2. **Active**: Question display with options
3. **Completed**: Results and restart option

**Interactive Elements**:
- Multiple choice option buttons
- Progress tracking
- Timer functionality (optional)
- Immediate feedback on answers

### Daily Challenge Component

**Component**: Challenge Management Interface

**Location**: `#challenge` section

**Structure**:
```html
<div class="challenge-container">
    <div class="challenge-header">
        <h2>Daily Challenge</h2>
        <div class="streak-display">
            🔥 <span id="challenge-streak">0</span> day streak
        </div>
    </div>
    
    <div id="challenge-content" class="challenge-card">
        <div class="challenge-title"></div>
        <div class="challenge-description"></div>
        <div class="challenge-difficulty">
            <span class="difficulty-badge"></span>
        </div>
    </div>
    
    <div class="challenge-actions">
        <button id="complete-challenge" class="btn btn-success">
            ✅ Complete Challenge
        </button>
    </div>
    
    <div id="challenge-history" class="history-section">
        <!-- Previous challenges -->
    </div>
</div>
```

**Features**:
- Daily challenge rotation
- Streak tracking
- Difficulty indicators
- History view

## Display Components

### Statistics Cards

**Component**: Progress Metrics Display

**Usage**: Home section, Progress dashboard

**Structure**:
```html
<div class="stat-card">
    <div class="stat-number" id="stat-value">0</div>
    <div class="stat-label">Metric Name</div>
    <div class="stat-trend hidden">
        <span class="trend-icon">📈</span>
        <span class="trend-value">+5%</span>
    </div>
</div>
```

**Variants**:
- Points display
- Badge count
- Accuracy percentage
- Streak counter

**CSS Classes**:
- `.stat-card`: Container styling
- `.stat-number`: Large numeric display
- `.stat-label`: Descriptive text
- `.stat-trend`: Optional trend indicator

### Badge Display

**Component**: Achievement Showcase

**Location**: Progress section, Achievement toasts

**Structure**:
```html
<div class="badges-grid">
    <div class="badge-item earned" data-badge-id="1">
        <div class="badge-icon">🕵️</div>
        <div class="badge-name">Fallacy Detective</div>
        <div class="badge-description">Correctly identify your first logical fallacy</div>
        <div class="badge-points">+10 pts</div>
    </div>
    
    <div class="badge-item locked" data-badge-id="2">
        <div class="badge-icon">🎭</div>
        <div class="badge-name">Straw Man Spotter</div>
        <div class="badge-description">Correctly identify 5 straw man fallacies</div>
        <div class="badge-points">+25 pts</div>
        <div class="badge-progress">3/5 completed</div>
    </div>
</div>
```

**States**:
- `.earned`: Unlocked badge
- `.locked`: Not yet earned
- `.near-completion`: Close to earning

### Activity Feed

**Component**: Recent Actions Display

**Location**: Progress dashboard

**Structure**:
```html
<div class="activity-feed">
    <div class="activity-header">
        <h3>Recent Activity</h3>
    </div>
    <div class="activity-list">
        <div class="activity-item">
            <div class="activity-icon">🏆</div>
            <div class="activity-content">
                <div class="activity-text">+15 points: Completed quiz with 80% accuracy</div>
                <div class="activity-time">2:30 PM</div>
            </div>
        </div>
        <!-- More activity items -->
    </div>
</div>
```

**Features**:
- Chronological ordering
- Action categorization
- Time stamps
- Icon indicators

### Learning Reference

**Component**: Fallacy Information Cards

**Location**: Learn section

**Structure**:
```html
<div class="fallacy-library">
    <div class="search-bar">
        <input type="text" id="fallacy-search" placeholder="Search fallacies...">
    </div>
    
    <div class="fallacy-grid">
        <div class="fallacy-card" data-fallacy-id="1">
            <div class="fallacy-header">
                <h3 class="fallacy-name">Straw Man</h3>
                <div class="fallacy-category">Informal</div>
            </div>
            
            <div class="fallacy-content">
                <div class="fallacy-definition">
                    <!-- Definition text -->
                </div>
                
                <div class="fallacy-examples">
                    <h4>Examples:</h4>
                    <div class="example-list">
                        <!-- Example items -->
                    </div>
                </div>
                
                <div class="fallacy-keywords">
                    <h4>Key Indicators:</h4>
                    <div class="keyword-tags">
                        <!-- Keyword tags -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Interactions**:
- Expandable cards
- Search filtering
- Category organization

## CSS Classes Reference

### Layout Classes

| Class | Purpose | Properties |
|-------|---------|------------|
| `.container` | Content wrapper | max-width, margin auto, padding |
| `.flex` | Flexbox container | display: flex |
| `.grid` | CSS Grid container | display: grid |
| `.hidden` | Hide element | display: none |
| `.visible` | Show element | display: block/flex |

### Component Classes

| Class | Purpose | Usage |
|-------|---------|-------|
| `.btn` | Base button styling | All buttons |
| `.btn-primary` | Primary action button | Main actions |
| `.btn-secondary` | Secondary button | Alternative actions |
| `.btn-success` | Success state button | Positive actions |
| `.btn-outline` | Outlined button variant | Less prominent actions |
| `.card` | Container with border/shadow | Content grouping |
| `.badge` | Small status indicator | Labels, counts |

### State Classes

| Class | Purpose | Behavior |
|-------|---------|----------|
| `.active` | Active/selected state | Highlight current item |
| `.disabled` | Disabled interaction | Prevent user action |
| `.loading` | Loading state | Show spinner/animation |
| `.error` | Error state | Error styling |
| `.success` | Success state | Success feedback |

### Utility Classes

| Class | Purpose | Effect |
|-------|---------|--------|
| `.text-center` | Center text | text-align: center |
| `.text-right` | Right align text | text-align: right |
| `.mt-*` | Margin top | Various top margins |
| `.mb-*` | Margin bottom | Various bottom margins |
| `.p-*` | Padding | Various padding sizes |

## Event Handling

### Navigation Events

```javascript
// Section navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const section = e.target.dataset.section;
        app.showSection(section);
    });
});
```

### Form Interactions

```javascript
// Text analysis
document.getElementById('analyze-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    if (text.trim()) {
        app.analyzeFallacies(text);
    }
});

// Quiz interactions
document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        app.selectAnswer(e.target.dataset.option);
    });
});
```

### Dynamic Content Events

```javascript
// Badge click for details
document.addEventListener('click', (e) => {
    if (e.target.closest('.badge-item')) {
        const badgeId = e.target.closest('.badge-item').dataset.badgeId;
        app.showBadgeDetails(badgeId);
    }
});

// Fallacy card expansion
document.addEventListener('click', (e) => {
    if (e.target.closest('.fallacy-header')) {
        const card = e.target.closest('.fallacy-card');
        card.classList.toggle('expanded');
    }
});
```

### Achievement Notifications

```javascript
// Toast notifications for achievements
function showAchievementToast(title, description) {
    const toast = document.getElementById('achievement-toast');
    toast.querySelector('.toast-title').textContent = title;
    toast.querySelector('.toast-description').textContent = description;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
```

### Responsive Behavior

```javascript
// Mobile navigation toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn?.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-open');
});

// Resize handling
window.addEventListener('resize', () => {
    // Adjust layout for screen size changes
    app.handleResize();
});
```

---

This component reference provides comprehensive documentation for all UI elements, their styling, behavior, and integration patterns in the Logical Fallacy Trainer application.
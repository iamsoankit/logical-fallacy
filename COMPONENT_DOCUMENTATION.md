# Logical Fallacy Trainer - Component Documentation

## Table of Contents
1. [HTML Structure Overview](#html-structure-overview)
2. [Layout Components](#layout-components)
3. [Navigation Components](#navigation-components)
4. [Section Components](#section-components)
5. [Interactive Components](#interactive-components)
6. [CSS Classes](#css-classes)
7. [Component Integration](#component-integration)

## HTML Structure Overview

The application uses a single-page architecture with sections that are shown/hidden based on navigation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logical Fallacy Spotter & Trainer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="app-header">...</header>
    <main class="container">
        <section id="home" class="section active">...</section>
        <section id="spotter" class="section">...</section>
        <section id="quiz" class="section">...</section>
        <section id="challenge" class="section">...</section>
        <section id="progress" class="section">...</section>
        <section id="learn" class="section">...</section>
    </main>
    <script src="app.js"></script>
</body>
</html>
```

## Layout Components

### 1. App Header
**Location:** `<header class="app-header">`

**Structure:**
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

**CSS Classes:**
- `.app-header`: Main header styling
- `.logo`: Application branding
- `.main-nav`: Navigation container
- `.user-stats`: User statistics display
- `.points-display`: Points counter styling

### 2. Container
**Purpose:** Provides consistent max-width and padding for content

**Usage:**
```html
<div class="container">
    <!-- Content -->
</div>
```

## Navigation Components

### 1. Navigation Buttons
**Location:** Inside `.main-nav`

**Structure:**
```html
<button class="nav-btn active" data-section="home">Home</button>
<button class="nav-btn" data-section="spotter">Fallacy Spotter</button>
<button class="nav-btn" data-section="quiz">Quiz Center</button>
<button class="nav-btn" data-section="challenge">Daily Challenge</button>
<button class="nav-btn" data-section="progress">Progress</button>
<button class="nav-btn" data-section="learn">Learn</button>
```

**Attributes:**
- `data-section`: Target section ID for navigation
- `.active`: Current active section

## Section Components

### 1. Home Section
**ID:** `home`

**Key Components:**
```html
<section id="home" class="section active">
    <div class="welcome-banner">
        <h2>Welcome to Logical Fallacy Trainer!</h2>
        <p>Master the art of critical thinking...</p>
        <div class="quick-stats">
            <div class="stat-card">
                <div class="stat-number" id="home-total-points">0</div>
                <div class="stat-label">Total Points</div>
            </div>
            <!-- More stat cards -->
        </div>
    </div>
    <div class="features-grid">
        <div class="feature-card" data-section="spotter">
            <!-- Feature content -->
        </div>
        <!-- More feature cards -->
    </div>
</section>
```

**Sub-components:**
- `.welcome-banner`: Hero section with introduction
- `.quick-stats`: Statistics overview grid
- `.stat-card`: Individual statistic display
- `.features-grid`: Grid of feature cards
- `.feature-card`: Clickable feature navigation

### 2. Fallacy Spotter Section
**ID:** `spotter`

**Key Components:**
```html
<section id="spotter" class="section">
    <div class="section-header">
        <h2>🔍 Fallacy Spotter</h2>
        <p>Paste any text to analyze for logical fallacies</p>
    </div>
    <div class="spotter-container">
        <div class="input-panel">
            <textarea id="text-input" placeholder="Enter text..."></textarea>
            <button id="analyze-btn" class="btn btn-primary">
                🔍 Analyze Text
            </button>
        </div>
        <div id="analysis-results" class="results-panel hidden">
            <h3>Analysis Results</h3>
            <div id="fallacy-highlights" class="text-highlights"></div>
            <div id="detected-fallacies" class="fallacies-list"></div>
        </div>
    </div>
</section>
```

**Sub-components:**
- `.input-panel`: Text input area
- `.results-panel`: Analysis results display
- `.text-highlights`: Highlighted text with fallacies
- `.fallacies-list`: List of detected fallacies

### 3. Quiz Center Section
**ID:** `quiz`

**Key Components:**
```html
<section id="quiz" class="section">
    <div class="quiz-container">
        <button id="start-quiz" class="btn btn-primary">Start New Quiz</button>
        
        <div id="quiz-question" style="display: none;">
            <div class="quiz-header">
                <span id="question-counter">Question 1 of 5</span>
                <span id="current-score">0/5</span>
            </div>
            <div class="quiz-progress">
                <div id="progress-fill" class="progress-fill"></div>
            </div>
            <div class="question-content">
                <h3 id="question-text"></h3>
                <div id="answer-options" class="answer-options"></div>
            </div>
            <div id="question-feedback" class="feedback hidden"></div>
            <button id="next-question" class="btn btn-primary hidden">
                Next Question
            </button>
        </div>
        
        <div id="quiz-complete" style="display: none;">
            <h3>Quiz Complete!</h3>
            <div class="quiz-results">
                <div class="result-item">
                    Score: <span id="final-score">0</span>/5
                </div>
                <div class="result-item">
                    Accuracy: <span id="final-accuracy">0%</span>
                </div>
            </div>
            <button id="restart-quiz" class="btn btn-primary">
                Start New Quiz
            </button>
        </div>
    </div>
</section>
```

**Sub-components:**
- `.quiz-header`: Question counter and score
- `.quiz-progress`: Visual progress bar
- `.question-content`: Question and answer options
- `.answer-options`: Multiple choice options
- `.feedback`: Answer explanation
- `.quiz-results`: Final score display

### 4. Daily Challenge Section
**ID:** `challenge`

**Key Components:**
```html
<section id="challenge" class="section">
    <div class="challenge-card">
        <div class="challenge-header">
            <h3>Today's Challenge</h3>
            <span id="challenge-date" class="challenge-date"></span>
        </div>
        <div class="challenge-content">
            <h4 id="challenge-title"></h4>
            <p id="challenge-description"></p>
            <div class="challenge-meta">
                <span id="challenge-difficulty" class="status"></span>
                <span class="streak-display">
                    🔥 <span id="challenge-streak">0</span> day streak
                </span>
            </div>
        </div>
        <button id="complete-challenge" class="btn btn-primary">
            Mark as Complete
        </button>
    </div>
    <div class="challenge-history">
        <h3>Recent Challenges</h3>
        <div id="challenge-history-list"></div>
    </div>
</section>
```

**Sub-components:**
- `.challenge-card`: Main challenge display
- `.challenge-meta`: Difficulty and streak info
- `.challenge-history`: Past challenges list

### 5. Progress Section
**ID:** `progress`

**Key Components:**
```html
<section id="progress" class="section">
    <div class="progress-overview">
        <div class="stat-grid">
            <div class="stat-box">
                <div class="stat-value" id="progress-points">0</div>
                <div class="stat-label">Total Points</div>
            </div>
            <!-- More stat boxes -->
        </div>
    </div>
    <div class="badges-section">
        <h3>Achievements</h3>
        <div id="badges-grid" class="badges-grid"></div>
    </div>
    <div class="activity-section">
        <h3>Recent Activity</h3>
        <div id="activity-feed" class="activity-feed"></div>
    </div>
</section>
```

**Sub-components:**
- `.stat-grid`: Statistics grid layout
- `.stat-box`: Individual statistic box
- `.badges-grid`: Achievement badges display
- `.activity-feed`: Recent activity timeline

### 6. Learn Section
**ID:** `learn`

**Key Components:**
```html
<section id="learn" class="section">
    <div class="learn-header">
        <h2>📚 Logical Fallacies Reference</h2>
        <input type="text" id="fallacy-search" class="search-input" 
               placeholder="Search fallacies...">
    </div>
    <div id="fallacy-list" class="fallacy-list">
        <!-- Dynamically populated fallacy items -->
    </div>
</section>
```

**Sub-components:**
- `.search-input`: Fallacy search field
- `.fallacy-list`: Container for fallacy cards
- `.fallacy-item`: Individual fallacy card (expandable)

## Interactive Components

### 1. Buttons
**Base Classes:**
- `.btn`: Base button styling
- `.btn-primary`: Primary action button
- `.btn-secondary`: Secondary action button

**States:**
- `:hover`: Hover state styling
- `:disabled`: Disabled state
- `.loading`: Loading state with spinner

**Example:**
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-primary" disabled>Disabled Button</button>
<button class="btn btn-primary">
    <span class="loading"></span> Loading...
</button>
```

### 2. Cards
**Base Classes:**
- `.card`: Base card styling
- `.card-header`: Card header section
- `.card-content`: Card body content
- `.card-footer`: Card footer section

**Variants:**
- `.feature-card`: Feature navigation cards
- `.stat-card`: Statistics display cards
- `.badge-card`: Achievement badge cards
- `.challenge-card`: Challenge display card

### 3. Form Elements
**Text Input:**
```html
<input type="text" class="form-input" placeholder="Enter text...">
```

**Textarea:**
```html
<textarea class="form-textarea" placeholder="Enter longer text..."></textarea>
```

**Search Input:**
```html
<input type="text" class="search-input" placeholder="Search...">
```

### 4. Status Indicators
**Classes:**
- `.status`: Base status styling
- `.status--success`: Success/complete state (green)
- `.status--info`: Information state (blue)
- `.status--warning`: Warning state (yellow)
- `.status--error`: Error state (red)
- `.status--easy`: Easy difficulty (green)
- `.status--medium`: Medium difficulty (yellow)
- `.status--hard`: Hard difficulty (red)

**Example:**
```html
<span class="status status--success">✅ Complete</span>
<span class="status status--info">ℹ️ In Progress</span>
<span class="status status--easy">Easy</span>
```

### 5. Toast Notifications
**Structure:**
```html
<div id="achievement-toast" class="achievement-toast">
    <div class="toast-content">
        <div class="toast-title">Achievement Unlocked!</div>
        <div class="toast-description">Description here</div>
    </div>
</div>
```

**Classes:**
- `.achievement-toast`: Toast container
- `.show`: Display state
- `.toast-content`: Toast message container

## CSS Classes

### Layout Utilities
- `.flex`: Display flex
- `.items-center`: Align items center
- `.justify-between`: Justify content space-between
- `.grid`: Display grid
- `.hidden`: Display none
- `.active`: Active state

### Typography
- `.text-center`: Center text alignment
- `.text-large`: Larger text size
- `.text-small`: Smaller text size
- `.font-bold`: Bold font weight

### Spacing
- `.mt-1` to `.mt-5`: Margin top
- `.mb-1` to `.mb-5`: Margin bottom
- `.p-1` to `.p-5`: Padding
- `.gap-1` to `.gap-5`: Grid/flex gap

### Colors
- Primary: Blue theme
- Success: Green
- Warning: Yellow/Orange
- Error: Red
- Background: Light gray
- Text: Dark gray

## Component Integration

### 1. Dynamic Content Loading
Components are populated dynamically via JavaScript:

```javascript
// Example: Populating badge grid
const badgesGrid = document.getElementById('badges-grid');
badgesGrid.innerHTML = BADGES.map(badge => `
    <div class="badge-card ${earned ? 'earned' : ''}">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-name">${badge.name}</div>
    </div>
`).join('');
```

### 2. Event Handling
Components use data attributes for event handling:

```javascript
// Navigation handling
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        trainer.showSection(section);
    });
});
```

### 3. State Management
Component states are managed through CSS classes:

```javascript
// Show/hide sections
section.classList.toggle('active', section.id === sectionName);

// Answer selection
option.classList.add('correct');
option.classList.add('incorrect');
option.classList.add('selected');
```

### 4. Responsive Design
Components use responsive CSS:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactive elements

## Best Practices

1. **Semantic HTML**: Use appropriate HTML5 elements
2. **Accessibility**: Include ARIA labels and keyboard navigation
3. **BEM Naming**: Follow Block-Element-Modifier convention
4. **Component Isolation**: Keep components self-contained
5. **Progressive Enhancement**: Ensure functionality without JavaScript
6. **Performance**: Minimize reflows and repaints
7. **Cross-browser**: Test across different browsers
# Logical Fallacy Trainer - API Documentation

## Table of Contents
1. [Overview](#overview)
2. [FallacyTrainer Class](#fallacytrainer-class)
3. [Data Structures](#data-structures)
4. [HTML Components](#html-components)
5. [Usage Examples](#usage-examples)
6. [Installation & Setup](#installation--setup)

## Overview

The Logical Fallacy Trainer is a web-based educational application designed to help users learn and identify logical fallacies. The application features interactive text analysis, quizzes, daily challenges, and progress tracking with gamification elements.

### Core Features
- **Fallacy Spotter Tool**: Interactive text analyzer that detects logical fallacies
- **Quiz Center**: Multiple-choice quizzes with immediate feedback
- **Daily Challenges**: Engaging tasks to practice fallacy detection
- **Progress Dashboard**: Comprehensive tracking with points and badges
- **Learn Section**: Interactive reference guide for logical fallacies

## FallacyTrainer Class

The main application controller that manages all functionality and user interactions.

### Constructor

```javascript
new FallacyTrainer()
```

**Description**: Initializes the application with default state and sets up all components.

**Parameters**: None

**Returns**: FallacyTrainer instance

**Example**:
```javascript
// Application automatically initializes on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    new FallacyTrainer();
});
```

### Public Methods

#### init()

```javascript
init()
```

**Description**: Sets up all application components and displays the initial interface.

**Parameters**: None

**Returns**: void

**Usage**: Called automatically by constructor

#### loadUserData()

```javascript
loadUserData()
```

**Description**: Loads user progress data from localStorage or returns default values.

**Parameters**: None

**Returns**: Object containing user data structure

**Data Structure**:
```javascript
{
    totalPoints: 0,
    quizzesCompleted: 0,
    challengesCompleted: 0,
    challengeStreak: 0,
    lastChallengeDate: null,
    earnedBadges: [],
    recentActivity: [],
    fallaciesSpotted: 0,
    quizAccuracy: 0,
    totalQuizQuestions: 0,
    correctAnswers: 0
}
```

#### saveUserData()

```javascript
saveUserData()
```

**Description**: Persists current user data to localStorage.

**Parameters**: None

**Returns**: void

**Example**:
```javascript
// Automatically called after point awards, badge unlocks, etc.
this.awardPoints(10, "Completed quiz");
// saveUserData() is called internally
```

#### showSection(sectionName)

```javascript
showSection(sectionName)
```

**Description**: Navigates to a specific section of the application.

**Parameters**:
- `sectionName` (string): The section to display ('home', 'spotter', 'quiz', 'challenge', 'progress', 'learn')

**Returns**: void

**Example**:
```javascript
// Navigate to quiz section
app.showSection('quiz');

// Navigate to progress dashboard
app.showSection('progress');
```

#### analyzeFallacies(text)

```javascript
analyzeFallacies(text)
```

**Description**: Analyzes input text for logical fallacies and displays results.

**Parameters**:
- `text` (string): The text to analyze

**Returns**: void

**Example**:
```javascript
const text = "You can't trust his opinion because he's young.";
app.analyzeFallacies(text);
// Will detect Ad Hominem fallacy and display results
```

#### startQuiz()

```javascript
startQuiz()
```

**Description**: Initializes and starts a new quiz session.

**Parameters**: None

**Returns**: void

**Example**:
```javascript
app.startQuiz();
// Generates 10 random questions and displays the first one
```

#### nextQuestion()

```javascript
nextQuestion()
```

**Description**: Advances to the next question in the current quiz.

**Parameters**: None

**Returns**: void

**Usage**: Called when user clicks "Next Question" button

#### finishQuiz()

```javascript
finishQuiz()
```

**Description**: Completes the current quiz and displays final results.

**Parameters**: None

**Returns**: void

**Functionality**:
- Calculates final score
- Awards points based on performance
- Updates user statistics
- Checks for badge achievements

#### completeChallenge()

```javascript
completeChallenge()
```

**Description**: Marks the daily challenge as completed and awards points.

**Parameters**: None

**Returns**: void

**Awards**:
- 20 points for completion
- Maintains challenge streak
- Unlocks streak-based badges

#### awardPoints(points, reason)

```javascript
awardPoints(points, reason)
```

**Description**: Awards points to the user and logs the activity.

**Parameters**:
- `points` (number): Points to award
- `reason` (string): Reason for the point award

**Returns**: void

**Example**:
```javascript
app.awardPoints(15, "Completed quiz with 80% accuracy");
app.awardPoints(5, "Used Fallacy Spotter");
```

#### awardBadge(badgeId)

```javascript
awardBadge(badgeId)
```

**Description**: Awards a badge to the user if not already earned.

**Parameters**:
- `badgeId` (number): ID of the badge to award

**Returns**: void

**Example**:
```javascript
// Award "Fallacy Detective" badge
app.awardBadge(1);

// Award "Quiz Master" badge
app.awardBadge(3);
```

#### filterFallacies(searchTerm)

```javascript
filterFallacies(searchTerm)
```

**Description**: Filters the fallacy list based on search criteria.

**Parameters**:
- `searchTerm` (string): Search term to filter by

**Returns**: void

**Search Criteria**:
- Fallacy name
- Definition text
- Keywords

#### updateAllDisplays()

```javascript
updateAllDisplays()
```

**Description**: Updates all UI elements with current user data.

**Parameters**: None

**Returns**: void

**Updates**:
- Header point display
- Home section statistics
- Progress dashboard
- Badge displays

## Data Structures

### FALLACIES Array

```javascript
const FALLACIES = [
    {
        id: number,
        name: string,
        definition: string,
        description: string,
        examples: string[],
        keywords: string[],
        category: string
    }
]
```

**Available Fallacies**:
1. Straw Man
2. Ad Hominem
3. Slippery Slope
4. False Dilemma
5. Appeal to Authority
6. Bandwagon
7. Red Herring

**Example**:
```javascript
{
    id: 1,
    name: "Straw Man",
    definition: "Distorting or misrepresenting an opponent's argument to make it easier to attack",
    description: "The straw man fallacy occurs when someone rebuts an argument by misconstruing it...",
    examples: [
        "Person A: 'I think we should increase funding for education.' Person B: 'Why do you want to waste taxpayer money on useless programs?'"
    ],
    keywords: ["misrepresent", "distort", "exaggerate", "oversimplify", "caricature"],
    category: "informal"
}
```

### BADGES Array

```javascript
const BADGES = [
    {
        id: number,
        name: string,
        description: string,
        icon: string,
        points: number
    }
]
```

**Available Badges**:
- Fallacy Detective (🕵️) - 10 points
- Straw Man Spotter (🎭) - 25 points  
- Quiz Master (🎓) - 50 points
- Daily Challenger (⚡) - 30 points
- Logic Legend (👑) - 100 points

### Quiz Questions Structure

```javascript
{
    question: string,
    options: string[],
    correct: number,
    explanation: string,
    fallacyType: string
}
```

## HTML Components

### Navigation Structure

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

### Fallacy Spotter Component

```html
<div class="spotter-tool">
    <textarea id="text-input" placeholder="Enter text to analyze for logical fallacies..."></textarea>
    <button id="analyze-btn">🔍 Analyze Text</button>
    <div id="analysis-results" class="hidden">
        <div id="fallacy-highlights"></div>
        <div id="detected-fallacies"></div>
    </div>
</div>
```

### Quiz Component

```html
<div class="quiz-container">
    <div id="quiz-progress"></div>
    <div id="question-container"></div>
    <div class="quiz-controls">
        <button id="start-quiz">Start Quiz</button>
        <button id="next-question">Next Question</button>
        <button id="restart-quiz">Restart Quiz</button>
    </div>
    <div id="quiz-results"></div>
</div>
```

### Progress Dashboard

```html
<div class="progress-dashboard">
    <div class="stats-overview">
        <div class="stat-card">
            <div class="stat-number" id="home-total-points">0</div>
            <div class="stat-label">Total Points</div>
        </div>
        <div class="stat-card">
            <div class="stat-number" id="home-badges-earned">0</div>
            <div class="stat-label">Badges Earned</div>
        </div>
        <div class="stat-card">
            <div class="stat-number" id="home-quiz-accuracy">0%</div>
            <div class="stat-label">Quiz Accuracy</div>
        </div>
    </div>
    <div id="badges-display"></div>
    <div id="activity-feed"></div>
</div>
```

## Usage Examples

### Basic Application Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logical Fallacy Trainer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Application HTML structure -->
    <script src="app.js"></script>
</body>
</html>
```

### Programmatic Interaction

```javascript
// Wait for application to initialize
document.addEventListener('DOMContentLoaded', () => {
    const app = new FallacyTrainer();
    
    // Navigate to fallacy spotter
    app.showSection('spotter');
    
    // Analyze text programmatically
    app.analyzeFallacies("You can't trust politicians because they're all corrupt.");
    
    // Award custom points
    app.awardPoints(25, "Custom achievement");
    
    // Start a quiz session
    app.startQuiz();
});
```

### Custom Event Handling

```javascript
// Listen for quiz completion
document.addEventListener('quiz-completed', (event) => {
    console.log('Quiz completed with score:', event.detail.score);
});

// Listen for badge earned
document.addEventListener('badge-earned', (event) => {
    console.log('Badge earned:', event.detail.badge);
});
```

### Accessing User Data

```javascript
const app = new FallacyTrainer();

// Get current user statistics
const userData = app.userData;
console.log('Total Points:', userData.totalPoints);
console.log('Badges Earned:', userData.earnedBadges.length);
console.log('Quiz Accuracy:', userData.quizAccuracy);

// Check specific badge
const hasQuizMaster = userData.earnedBadges.includes(3);
console.log('Has Quiz Master badge:', hasQuizMaster);
```

### Extending Functionality

```javascript
// Add custom fallacy detection
FallacyTrainer.prototype.detectCustomFallacy = function(text, fallacyType) {
    // Custom detection logic
    const detected = this.simulateFallacyDetection(text);
    return detected.filter(f => f.name === fallacyType);
};

// Add custom scoring
FallacyTrainer.prototype.calculateCustomScore = function(correct, total) {
    const percentage = (correct / total) * 100;
    return Math.round(percentage);
};
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for file:// protocol limitations)

### Basic Setup

1. **Download Files**:
   ```bash
   # Clone or download the project files
   git clone <repository-url>
   cd logical-fallacy-trainer
   ```

2. **Serve Files**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open Application**:
   Navigate to `http://localhost:8000` in your browser

### Development Setup

```javascript
// Enable debug mode
window.DEBUG = true;

// Access application instance
const app = window.fallacyTrainer;

// Monitor user data changes
app.originalSaveUserData = app.saveUserData;
app.saveUserData = function() {
    console.log('Saving user data:', this.userData);
    this.originalSaveUserData();
};
```

### Integration with Other Systems

```javascript
// Export user progress
function exportUserProgress() {
    const app = window.fallacyTrainer;
    return JSON.stringify(app.userData, null, 2);
}

// Import user progress
function importUserProgress(jsonData) {
    const app = window.fallacyTrainer;
    app.userData = JSON.parse(jsonData);
    app.saveUserData();
    app.updateAllDisplays();
}

// Get learning analytics
function getAnalytics() {
    const app = window.fallacyTrainer;
    return {
        engagementLevel: app.userData.recentActivity.length,
        learningProgress: app.userData.earnedBadges.length / 5,
        accuracy: app.userData.quizAccuracy,
        consistency: app.userData.challengeStreak
    };
}
```

---

*This documentation covers all public APIs and components of the Logical Fallacy Trainer application. For additional support or feature requests, please refer to the project repository.*
# Logical Fallacy Trainer - API Documentation

## Table of Contents
1. [Overview](#overview)
2. [Core Data Structures](#core-data-structures)
3. [JavaScript Class: FallacyTrainer](#javascript-class-fallacytrainer)
4. [Public Methods](#public-methods)
5. [Event Handlers](#event-handlers)
6. [Data Management](#data-management)
7. [UI Components](#ui-components)
8. [Usage Examples](#usage-examples)

## Overview

The Logical Fallacy Trainer is an interactive web application designed to help users learn and identify logical fallacies through various educational tools including:
- Interactive Fallacy Spotter
- Quiz Center
- Daily Challenges
- Progress Tracking with Gamification
- Comprehensive Learning Resources

## Core Data Structures

### 1. FALLACIES Array
Contains comprehensive information about each logical fallacy.

```javascript
const FALLACIES = [
    {
        id: number,           // Unique identifier
        name: string,         // Fallacy name
        definition: string,   // Brief definition
        description: string,  // Detailed explanation
        examples: string[],   // Array of example scenarios
        keywords: string[],   // Keywords for detection
        category: string      // Category (e.g., "informal")
    }
];
```

**Available Fallacies:**
- Straw Man
- Ad Hominem
- Slippery Slope
- False Dilemma
- Hasty Generalization
- Red Herring
- Bandwagon

### 2. QUIZ_QUESTIONS Array
Quiz questions for testing fallacy knowledge.

```javascript
const QUIZ_QUESTIONS = [
    {
        id: number,           // Question ID
        question: string,     // Question text
        options: string[],    // Multiple choice options
        correct: number,      // Index of correct answer
        explanation: string   // Explanation of answer
    }
];
```

### 3. DAILY_CHALLENGES Array
Daily challenges for practical application.

```javascript
const DAILY_CHALLENGES = [
    {
        id: number,           // Challenge ID
        title: string,        // Challenge title
        description: string,  // Challenge instructions
        difficulty: string,   // "easy", "medium", or "hard"
        category: string      // Challenge type
    }
];
```

### 4. BADGES Array
Achievement badges for gamification.

```javascript
const BADGES = [
    {
        id: number,           // Badge ID
        name: string,         // Badge name
        description: string,  // Achievement criteria
        icon: string,         // Emoji icon
        points: number        // Points awarded
    }
];
```

## JavaScript Class: FallacyTrainer

### Constructor
```javascript
constructor()
```
Initializes the application with:
- Current section tracking
- Quiz state management
- User data loading from localStorage
- UI initialization

### Properties
```javascript
this.currentSection      // Active page section
this.currentQuiz         // Current quiz state object
this.userData            // User progress and statistics
```

## Public Methods

### 1. Navigation & Display

#### `showSection(sectionName)`
Navigates to a specific section of the application.

**Parameters:**
- `sectionName` (string): Section to display ("home", "spotter", "quiz", "challenge", "progress", "learn")

**Example:**
```javascript
trainer.showSection('quiz');
```

#### `updateAllDisplays()`
Updates all UI elements with current user data.

**Example:**
```javascript
trainer.updateAllDisplays();
```

### 2. Fallacy Spotter Methods

#### `analyzeFallacies(text)`
Analyzes input text for potential logical fallacies.

**Parameters:**
- `text` (string): Text to analyze

**Returns:**
- Displays detected fallacies with highlights and explanations

**Example:**
```javascript
trainer.analyzeFallacies("Either you're with us or against us!");
```

#### `simulateFallacyDetection(text)`
Simulates AI-based fallacy detection (demo version).

**Parameters:**
- `text` (string): Text to analyze

**Returns:**
- Array of detected fallacy objects with position data

#### `displayFallacyResults(text, fallacies)`
Renders fallacy detection results in the UI.

**Parameters:**
- `text` (string): Original text
- `fallacies` (array): Detected fallacy objects

### 3. Quiz Methods

#### `startQuiz()`
Initializes a new quiz session with 5 random questions.

**Example:**
```javascript
trainer.startQuiz();
```

#### `displayCurrentQuestion()`
Displays the current quiz question with options.

#### `selectAnswer(selectedIndex)`
Processes user's answer selection.

**Parameters:**
- `selectedIndex` (number): Index of selected option

#### `nextQuestion()`
Advances to the next quiz question.

#### `finishQuiz()`
Completes the quiz and displays results.

### 4. Daily Challenge Methods

#### `updateDailyChallenge()`
Updates the daily challenge display based on current date.

#### `completeChallenge()`
Marks the daily challenge as complete and updates streak.

**Example:**
```javascript
trainer.completeChallenge();
```

#### `updateChallengeHistory()`
Displays recent challenge completion history.

### 5. Learning Section Methods

#### `displayFallacies(fallacies)`
Renders fallacy cards in the learning section.

**Parameters:**
- `fallacies` (array): Array of fallacy objects to display

#### `filterFallacies(searchTerm)`
Filters displayed fallacies based on search input.

**Parameters:**
- `searchTerm` (string): Search query

**Example:**
```javascript
trainer.filterFallacies("straw man");
```

### 6. Progress & Gamification Methods

#### `awardPoints(points, reason)`
Awards points to the user.

**Parameters:**
- `points` (number): Points to award
- `reason` (string): Description of achievement

**Example:**
```javascript
trainer.awardPoints(10, "Correct quiz answer");
```

#### `awardBadge(badgeId)`
Awards a specific badge to the user.

**Parameters:**
- `badgeId` (number): ID of badge to award

#### `addRecentActivity(action)`
Adds an entry to the user's activity feed.

**Parameters:**
- `action` (string): Activity description

#### `showAchievementToast(title, description)`
Displays an achievement notification.

**Parameters:**
- `title` (string): Achievement title
- `description` (string): Achievement description

**Example:**
```javascript
trainer.showAchievementToast("Quiz Master", "Complete 10 quizzes with 80% accuracy");
```

### 7. Data Management Methods

#### `loadUserData()`
Loads user data from localStorage.

**Returns:**
- User data object with progress statistics

#### `saveUserData()`
Saves current user data to localStorage.

## Event Handlers

The application sets up various event handlers during initialization:

### Navigation Events
- Navigation button clicks
- Feature card clicks

### Fallacy Spotter Events
- Analyze button click
- Text input changes

### Quiz Events
- Start quiz button
- Answer option selection
- Next question button
- Restart quiz button

### Daily Challenge Events
- Complete challenge button

### Learning Section Events
- Search input changes
- Fallacy card expansion

## Data Management

### User Data Structure
```javascript
{
    totalPoints: number,
    quizzesCompleted: number,
    challengesCompleted: number,
    challengeStreak: number,
    lastChallengeDate: string,
    earnedBadges: number[],
    recentActivity: array,
    fallaciesSpotted: number,
    quizAccuracy: number,
    totalQuizQuestions: number,
    correctAnswers: number
}
```

### Local Storage
- Key: `fallacyTrainerData`
- Format: JSON stringified user data object

## UI Components

### 1. Header Component
- Logo and title
- Navigation menu
- Points display

### 2. Section Components
- **Home**: Welcome banner, quick stats, feature cards
- **Fallacy Spotter**: Text input, analyze button, results panel
- **Quiz Center**: Question display, options, progress bar, feedback
- **Daily Challenge**: Challenge card, completion button, history
- **Progress**: Stats dashboard, badges grid, activity feed
- **Learn**: Search bar, expandable fallacy cards

### 3. Toast Notifications
Achievement notifications with auto-dismiss

## Usage Examples

### Complete Application Flow
```javascript
// Initialize application
const trainer = new FallacyTrainer();

// Navigate to quiz section
trainer.showSection('quiz');

// Start a new quiz
trainer.startQuiz();

// Select an answer (index 1)
trainer.selectAnswer(1);

// Move to next question
trainer.nextQuestion();

// Complete the quiz
trainer.finishQuiz();

// Check progress
trainer.showSection('progress');
```

### Fallacy Analysis Example
```javascript
// Navigate to spotter
trainer.showSection('spotter');

// Analyze text for fallacies
const text = "Everyone is doing it, so it must be right!";
trainer.analyzeFallacies(text);

// Results will highlight potential bandwagon fallacy
```

### Badge Achievement Example
```javascript
// User completes action that earns badge
trainer.awardPoints(10, "First fallacy identified");

// System automatically checks for badge criteria
// If criteria met, badge is awarded with notification
```

### Daily Challenge Workflow
```javascript
// Navigate to daily challenge
trainer.showSection('challenge');

// View today's challenge
trainer.updateDailyChallenge();

// Complete the challenge
trainer.completeChallenge();

// Streak and points automatically updated
```

## Python Data Structure

The `script.py` file contains the complete data structure for the application:

```python
fallacies_data = {
    "logical_fallacies": [...],     # 7 fallacies
    "quiz_questions": [...],        # 5 questions
    "daily_challenges": [...],      # 3 challenges
    "badges": [...]                 # 5 badges
}
```

This structure can be used to:
- Generate static data for the application
- Create a backend API
- Export data to different formats

## Best Practices

1. **State Management**: All user progress is automatically saved to localStorage
2. **Error Handling**: Methods include validation for user inputs
3. **Responsive Design**: UI components adapt to different screen sizes
4. **Accessibility**: Semantic HTML and ARIA labels where appropriate
5. **Performance**: Efficient DOM manipulation and event delegation

## Future Extensions

Potential areas for extension:
1. Backend API integration for user accounts
2. Multiplayer quiz competitions
3. Custom fallacy submissions
4. Advanced AI-powered text analysis
5. Social sharing features
6. Additional fallacy categories
7. Mobile app version
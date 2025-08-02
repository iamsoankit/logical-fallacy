# Python Data Generation Documentation

## Table of Contents
1. [Overview](#overview)
2. [Data Structures](#data-structures)
3. [Content Categories](#content-categories)
4. [Data Usage](#data-usage)
5. [Extending the Dataset](#extending-the-dataset)

## Overview

The `script.py` file contains the comprehensive data structure used by the Logical Fallacy Trainer application. This Python script defines all the fallacies, quiz questions, daily challenges, and badge systems that power the educational experience.

### Purpose
- Define logical fallacy information and examples
- Generate quiz questions for different difficulty levels
- Create daily challenges for user engagement
- Establish the badge/achievement system

### File Structure
```python
fallacies_data = {
    "logical_fallacies": [...],     # Core fallacy definitions
    "quiz_questions": [...],        # Interactive quiz content
    "daily_challenges": [...],      # Daily engagement tasks
    "badges": [...]                 # Achievement system
}
```

## Data Structures

### Logical Fallacies

**Structure**: Array of fallacy objects

```python
{
    "id": int,                    # Unique identifier
    "name": str,                  # Fallacy name
    "definition": str,            # Brief definition
    "description": str,           # Detailed explanation
    "examples": [str],            # Real-world examples
    "keywords": [str],            # Detection keywords
    "category": str               # Classification type
}
```

**Available Fallacies**:

1. **Straw Man** (ID: 1)
   - **Definition**: Distorting or misrepresenting an opponent's argument to make it easier to attack
   - **Keywords**: misrepresent, distort, exaggerate, oversimplify, caricature
   - **Category**: informal

2. **Ad Hominem** (ID: 2)
   - **Definition**: Attacking the person making an argument rather than addressing the argument itself
   - **Keywords**: attack, personal, character, credibility, irrelevant
   - **Category**: informal

3. **Slippery Slope** (ID: 3)
   - **Definition**: Asserting that one event will lead to a chain of events resulting in an extreme outcome without evidence
   - **Keywords**: inevitable, chain reaction, extreme outcome, without evidence, cascade
   - **Category**: informal

4. **False Dilemma** (ID: 4)
   - **Definition**: Presenting only two options when more possibilities exist, or presenting them as mutually exclusive when they're not
   - **Keywords**: either/or, only two options, black and white, mutually exclusive
   - **Category**: informal

5. **Appeal to Authority** (ID: 5)
   - **Definition**: Using an authority figure's opinion as evidence in an argument when the authority is not an expert on the topic
   - **Keywords**: expert says, authority figure, because they said, credentials
   - **Category**: informal

6. **Bandwagon** (ID: 6)
   - **Definition**: Arguing that something is true or right because many people believe it or do it
   - **Keywords**: everyone does it, popular opinion, majority believes, follow the crowd
   - **Category**: informal

7. **Red Herring** (ID: 7)
   - **Definition**: Introducing irrelevant information to divert attention from the real issue
   - **Keywords**: change subject, irrelevant, divert attention, side issue
   - **Category**: informal

### Quiz Questions

**Structure**: Array of question objects

```python
{
    "id": int,                    # Unique identifier
    "question": str,              # Question text
    "options": [str],             # Multiple choice options (4 options)
    "correct": int,               # Index of correct answer (0-3)
    "explanation": str,           # Why the answer is correct
    "fallacyType": str,          # Related fallacy name
    "difficulty": str,           # easy, medium, hard
    "scenario": str              # Context or background
}
```

**Example Question**:
```python
{
    "id": 1,
    "question": "Which statement represents a straw man fallacy?",
    "options": [
        "Disagreeing with someone's opinion politely",
        "Exaggerating someone's position to make it easier to refute",
        "Asking for clarification on a complex argument",
        "Providing evidence against a claim"
    ],
    "correct": 1,
    "explanation": "A straw man fallacy involves misrepresenting or exaggerating someone's argument to make it easier to attack.",
    "fallacyType": "Straw Man",
    "difficulty": "easy",
    "scenario": "Understanding basic fallacy identification"
}
```

**Difficulty Levels**:
- **Easy**: Basic identification and definition questions
- **Medium**: Scenario-based questions requiring application
- **Hard**: Complex situations with multiple potential fallacies

### Daily Challenges

**Structure**: Array of challenge objects

```python
{
    "id": int,                    # Unique identifier
    "title": str,                 # Challenge name
    "description": str,           # Task description
    "difficulty": str,            # easy, medium, hard
    "category": str,              # Challenge type
    "points": int,                # Points awarded
    "estimatedTime": str          # Expected completion time
}
```

**Challenge Categories**:

1. **Analysis** - Text analysis and fallacy identification
2. **Creative** - Creating examples or rewriting arguments
3. **Application** - Real-world scenario practice

**Example Challenges**:

```python
# Easy Analysis Challenge
{
    "id": 1,
    "title": "Spot the Straw Man",
    "description": "Read this political debate excerpt and identify where one speaker misrepresents the other's position: [followed by text example]",
    "difficulty": "easy",
    "category": "analysis",
    "points": 15,
    "estimatedTime": "5 minutes"
}

# Medium Application Challenge  
{
    "id": 2,
    "title": "Social Media Detective",
    "description": "Browse through these social media comments and identify three different logical fallacies. Explain why each is a fallacy.",
    "difficulty": "medium", 
    "category": "application",
    "points": 25,
    "estimatedTime": "10 minutes"
}

# Hard Creative Challenge
{
    "id": 3,
    "title": "Fallacy Creation",
    "description": "Create your own example of a straw man argument and then rewrite it as a fair representation of the original position.",
    "difficulty": "hard",
    "category": "creative", 
    "points": 35,
    "estimatedTime": "15 minutes"
}
```

### Badge System

**Structure**: Array of badge objects

```python
{
    "id": int,                    # Unique identifier
    "name": str,                  # Badge name
    "description": str,           # Achievement description
    "icon": str,                  # Emoji icon
    "points": int,                # Bonus points awarded
    "criteria": str,              # Unlock requirements
    "category": str               # Badge type
}
```

**Available Badges**:

```python
[
    {
        "id": 1,
        "name": "Fallacy Detective",
        "description": "Correctly identify your first logical fallacy",
        "icon": "🕵️",
        "points": 10,
        "criteria": "First fallacy identification",
        "category": "milestone"
    },
    {
        "id": 2,
        "name": "Straw Man Spotter", 
        "description": "Correctly identify 5 straw man fallacies",
        "icon": "🎭",
        "points": 25,
        "criteria": "5 straw man identifications",
        "category": "expertise"
    },
    {
        "id": 3,
        "name": "Quiz Master",
        "description": "Complete 10 quizzes with 80% accuracy or higher",
        "icon": "🎓", 
        "points": 50,
        "criteria": "10 quizzes at 80%+ accuracy",
        "category": "achievement"
    },
    {
        "id": 4,
        "name": "Daily Challenger",
        "description": "Complete 7 daily challenges in a row",
        "icon": "⚡",
        "points": 30,
        "criteria": "7-day challenge streak",
        "category": "consistency"
    },
    {
        "id": 5,
        "name": "Logic Legend",
        "description": "Earn 500 total points",
        "icon": "👑",
        "points": 100,
        "criteria": "500 total points",
        "category": "mastery"
    }
]
```

## Content Categories

### Fallacy Categories

**Informal Fallacies**: All current fallacies fall under this category
- Focus on argument structure and reasoning errors
- Common in everyday discourse
- Easier to identify with practice

**Future Categories** (for expansion):
- **Formal Fallacies**: Logic structure errors
- **Cognitive Biases**: Psychological reasoning errors
- **Statistical Fallacies**: Data misinterpretation errors

### Challenge Difficulty Progression

**Easy Challenges** (5-10 minutes):
- Basic identification tasks
- Clear-cut examples
- Single fallacy focus
- 15-20 points

**Medium Challenges** (10-15 minutes):
- Multiple fallacy scenarios
- Real-world context application
- Comparative analysis
- 25-30 points

**Hard Challenges** (15-20 minutes):
- Creative writing tasks
- Complex scenario analysis
- Multiple correct approaches
- 35-40 points

## Data Usage

### In JavaScript Application

The Python data structure is mirrored in the JavaScript application:

```javascript
// Direct translation from Python to JavaScript
const FALLACIES = [
    {
        id: 1,
        name: "Straw Man",
        definition: "Distorting or misrepresenting...",
        // ... rest of properties
    }
];

const BADGES = [
    {
        id: 1,
        name: "Fallacy Detective", 
        description: "Correctly identify...",
        // ... rest of properties
    }
];
```

### Data Access Patterns

```javascript
// Finding fallacy by ID
const fallacy = FALLACIES.find(f => f.id === fallacyId);

// Filtering by category
const informalFallacies = FALLACIES.filter(f => f.category === 'informal');

// Searching by keywords
const searchResults = FALLACIES.filter(f => 
    f.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

// Badge eligibility checking
const availableBadges = BADGES.filter(badge => 
    !userData.earnedBadges.includes(badge.id)
);
```

### Dynamic Content Generation

```javascript
// Generate random quiz questions
function generateQuiz(difficulty = 'mixed', count = 10) {
    let questions = QUIZ_QUESTIONS;
    
    if (difficulty !== 'mixed') {
        questions = questions.filter(q => q.difficulty === difficulty);
    }
    
    return questions
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}

// Get daily challenge
function getDailyChallenge() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const challengeIndex = (dayOfYear - 1) % DAILY_CHALLENGES.length;
    
    return DAILY_CHALLENGES[challengeIndex];
}
```

## Extending the Dataset

### Adding New Fallacies

To add a new fallacy to the system:

```python
new_fallacy = {
    "id": 8,  # Next available ID
    "name": "Appeal to Emotion",
    "definition": "Using emotional manipulation instead of valid reasoning",
    "description": "This fallacy attempts to win an argument by manipulating emotions rather than presenting logical evidence or reasoning.",
    "examples": [
        "Think of the children! We must ban this immediately.",
        "If you don't support this policy, you hate America.",
        "This will destroy families and ruin lives forever."
    ],
    "keywords": ["emotional manipulation", "fear", "appeal to emotion", "guilt trip"],
    "category": "informal"
}

# Add to the fallacies array
fallacies_data["logical_fallacies"].append(new_fallacy)
```

### Creating Quiz Questions

Template for new quiz questions:

```python
new_question = {
    "id": next_id,
    "question": "Which of these demonstrates an appeal to emotion fallacy?",
    "options": [
        "Presenting statistical evidence",
        "Using fear to support an argument", 
        "Asking for expert opinions",
        "Requesting logical reasoning"
    ],
    "correct": 1,
    "explanation": "Using fear or other emotions to support an argument rather than logical reasoning is an appeal to emotion fallacy.",
    "fallacyType": "Appeal to Emotion",
    "difficulty": "easy",
    "scenario": "Identifying emotional manipulation in arguments"
}
```

### Badge Creation Guidelines

When creating new badges:

```python
new_badge = {
    "id": next_badge_id,
    "name": "Emotion Spotter",
    "description": "Identify 10 appeal to emotion fallacies",
    "icon": "💔",  # Choose relevant emoji
    "points": 25,  # Scale with difficulty
    "criteria": "10 appeal to emotion identifications",
    "category": "expertise"  # milestone, expertise, achievement, consistency, mastery
}
```

### Challenge Design Principles

1. **Progressive Difficulty**: Start simple, build complexity
2. **Real-world Relevance**: Use scenarios students encounter
3. **Clear Instructions**: Unambiguous task descriptions
4. **Appropriate Timing**: Match complexity to time estimates
5. **Educational Value**: Each challenge should teach something new

### Data Validation

When extending the dataset, ensure:

```python
# Validate fallacy structure
required_fallacy_fields = ['id', 'name', 'definition', 'description', 'examples', 'keywords', 'category']

# Validate quiz question structure  
required_question_fields = ['id', 'question', 'options', 'correct', 'explanation', 'fallacyType', 'difficulty']

# Validate badge structure
required_badge_fields = ['id', 'name', 'description', 'icon', 'points']

# Ensure unique IDs across all collections
all_ids = set()
for collection in [fallacies, questions, challenges, badges]:
    for item in collection:
        assert item['id'] not in all_ids, f"Duplicate ID: {item['id']}"
        all_ids.add(item['id'])
```

---

This documentation provides a complete reference for understanding and extending the Python data generation script that powers the Logical Fallacy Trainer application.
# Logical Fallacy Trainer – API & Component Documentation

## Overview
The Logical Fallacy Trainer is a self-contained, front-end JavaScript application that helps users **spot**, **learn**, and **practice** logical fallacies through:

* Real-time fallacy text analysis
* Interactive multiple-choice quizzes
* Daily challenges & badge-based gamification

All functionality is orchestrated by a single public class – `FallacyTrainer` – backed by several JSON-like data collections (`FALLACIES`, `QUIZ_QUESTIONS`, `DAILY_CHALLENGES`, `BADGES`).

This document provides a *developer-centric* reference for integrating, extending, or embedding the trainer in your own site or application.

---

## Quick-Start Example
```html
<!-- 1. Add the markup snippets from index.html to your page (navigation bar, sections, etc.) -->
<link rel="stylesheet" href="style.css" />
<script src="app.js" defer></script>

<script>
  // 2. OPTIONAL: hook into lifecycle events
  document.addEventListener('DOMContentLoaded', () => {
    const trainer = new FallacyTrainer();
    // subscribe to navigation changes
    trainer.showSection('learn');
  });
</script>
```
*The default `app.js` already bootstraps an instance on `DOMContentLoaded`; creating another instance is optional and must target a different DOM container if you do so.*

---

## Data Collections
| Constant | Purpose | Editable? |
|----------|---------|-----------|
| `FALLACIES` | Core knowledge base displayed in **Learn** section & used by the AI spotter. | Yes – append or modify objects to add more fallacies. |
| `QUIZ_QUESTIONS` | Pool of questions randomly sampled to build a 5-question quiz. | Yes |
| `DAILY_CHALLENGES` | Rotating list of activities shown in **Challenge** section. | Yes |
| `BADGES` | Achievements awarded for milestones (points, streaks, etc.). | Yes |

Each collection is a plain JavaScript array of objects defined at the top of `app.js`. No additional tooling is required – simply edit and reload.

---

## The `FallacyTrainer` Class
`app.js` exposes **one** public entry point:
```js
new FallacyTrainer();
```
The class maintains application state, binds UI event listeners, updates the DOM, and persists progress in `localStorage` (`key = 'fallacyTrainerData'`).

### Constructor
```js
new FallacyTrainer();
```
*Immediately* invokes:
1. `loadUserData()` ⇒ merges defaults with saved data
2. `init()` ⇒ wires up all sections & renders initial UI

### Persistent User Model
```ts
interface UserData {
  totalPoints: number;
  quizzesCompleted: number;
  challengesCompleted: number;
  challengeStreak: number;
  lastChallengeDate: string | null; // e.g. "Mon Jun 24 2025"
  earnedBadges: number[];            // badge ids
  recentActivity: Array<{ action: string; time: string; date: string }>;
  fallaciesSpotted: number;
  quizAccuracy: number;              // 0-100
  totalQuizQuestions: number;
  correctAnswers: number;
}
```

---

### Navigation & Sections
| Method | Signature | Description |
|--------|-----------|-------------|
| `setupNavigation()` | `void` | Attaches click listeners to all elements with `.nav-btn` and `.feature-card .btn`, routing to the proper section. |
| `showSection(sectionId)` | `void` | Shows the section (`<div class="section" id="…">`) matching `sectionId`. Also triggers lazy updates for Progress & Challenge sections. |

**Usage example**
```js
trainer.showSection('progress');
```

---

### Fallacy Spotter
| Method | Signature | Purpose |
|--------|-----------|---------|
| `setupFallacySpotter()` | `void` | Registers click handler on **Analyse Text** button. |
| `analyzeFallacies(text)` | `void` | Simulates an asynchronous AI call, randomly injecting 1-3 fallacies, awards points and updates UI. |
| `simulateFallacyDetection(text)` | `FallacyDetected[]` | Internal helper; returns mocked detection output. |
| `displayFallacyResults(text, fallacies)` | `void` | Renders highlighted text & explanation panel. |

```js
trainer.analyzeFallacies('Your argument is invalid because…');
```

---

### Quiz Center
| Public Method | Signature | Notes |
|---------------|-----------|-------|
| `startQuiz()` | `void` | Initializes a 5-question round drawn from `QUIZ_QUESTIONS`. |
| `selectAnswer(index)` | `void` | Call when a user clicks an answer option. |
| `nextQuestion()` | `void` | Moves to the next question or finishes the quiz. |
| `finishQuiz()` | `void` | Calculates accuracy, saves stats, awards badges, and shows results panel. |

**Programmatic launch**
```js
trainer.startQuiz();
```

---

### Daily Challenge
| Method | Purpose |
|--------|---------|
| `setupDailyChallenge()` – wires the *Mark as Complete* button |
| `updateDailyChallenge()` – populates today’s challenge & state |
| `completeChallenge()` – updates streak, points, badges |
| `updateChallengeHistory()` – renders past 5 days panel |

---

### Progress Dashboard & Badges
| Method | Role |
|--------|------|
| `updateProgressDashboard()` | Refreshes stats, badge grid, activity feed. |
| `updateBadgesDisplay()` | Renders visual badge cards. |
| `updateActivityFeed()` | Shows last ten activities. |

Badges are granted via `awardBadge(badgeId)` which in turn calls:
* `addRecentActivity(action)`
* `showAchievementToast(title, desc)` – displays toast notification.

---

### Learn Section (Glossary)
| Method | Purpose |
|--------|---------|
| `setupLearnSection()` | Registers search input filter & populates list. |
| `displayFallacies(arr)` | Renders cards for each fallacy. |
| `filterFallacies(term)` | Case-insensitive search over name, definition, keywords. |

---

### Utility & Helper Methods
| Method | Functionality |
|--------|--------------|
| `loadUserData()` / `saveUserData()` | Persist `UserData` model to `localStorage`. |
| `awardPoints(points, reason)` | Increment `totalPoints`, add to activity, check milestone badge. |
| `addRecentActivity(action)` | Pushes an entry to activity feed (kept ≤ 20). |
| `updateAllDisplays()` | Top-level UI refresher (header counts, home stats, save). |
| `showAchievementToast(title, desc)` | CSS animation toasts for badges / challenges. |

---

## Extending the Trainer
1. **Add new fallacy types** – append an object to `FALLACIES` and the search, spotter, quizzes will pick it up automatically.
2. **Custom quiz pools** – push additional objects into `QUIZ_QUESTIONS` or generate them dynamically before calling `startQuiz()`.
3. **Integrate a real NLP model** – replace `simulateFallacyDetection(text)` with an asynchronous fetch to your backend ML service that returns the same shape.
4. **Theming** – modify `style.css` (SCSS-like variables are grouped at top) or override classes via a separate stylesheet.

---

## Script Utilities (`script.py`)
`script.py` is a helper that prints summary counts for the same datasets in Python dictionary form. It has no runtime interaction with the web app but is useful for data preprocessing or migration scripts.

### Usage
```bash
python3 script.py
```
Expected output:
```
Logical Fallacy Application Data Structure Complete!
Total Fallacies: 7
Total Quiz Questions: 5
Total Daily Challenges: 3
Total Badges: 5
```

---

## FAQ
**Q. Where is user progress stored?** `localStorage` key `fallacyTrainerData`.

**Q. How do I reset progress?** Clear the key from DevTools *Application → Storage* or call:
```js
localStorage.removeItem('fallacyTrainerData');
location.reload();
```

**Q. Is the trainer mobile-friendly?** Yes – the CSS uses responsive flexbox grids.

---

## License
The sample application and this documentation are provided under the MIT License. Feel free to adapt, extend, and redistribute.
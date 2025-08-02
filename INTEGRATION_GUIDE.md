# Integration & Usage Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [Deployment Options](#deployment-options)
3. [Integration Examples](#integration-examples)
4. [Customization Guide](#customization-guide)
5. [Performance Optimization](#performance-optimization)
6. [Troubleshooting](#troubleshooting)

## Quick Start

### Minimal Setup

1. **Clone and serve the files**:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

2. **Open in browser**:
```
http://localhost:8000
```

3. **Basic usage**:
```javascript
// The application initializes automatically
// Access the instance globally (if needed for debugging)
const app = window.fallacyTrainer;
```

### Directory Structure
```
logical-fallacy-trainer/
├── index.html              # Main HTML file
├── app.js                  # Application logic
├── style.css               # Styling
├── script.py               # Data generation (Python)
├── README.md               # Project overview
├── API_DOCUMENTATION.md    # API reference
├── COMPONENT_REFERENCE.md  # UI components guide
├── PYTHON_DOCUMENTATION.md # Data structure docs
└── INTEGRATION_GUIDE.md    # This file
```

## Deployment Options

### Static Hosting

**GitHub Pages**:
```bash
# Enable GitHub Pages in repository settings
# Or use gh-pages branch
git checkout -b gh-pages
git push origin gh-pages
```

**Netlify**:
```bash
# Deploy via drag-and-drop or connect Git repository
# Build settings: none required (static files)
```

**Vercel**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set up custom domain (optional)
vercel --prod
```

### Local Development Server

**Live Reload Setup**:
```bash
# Using live-server
npm install -g live-server
live-server

# Using browser-sync
npm install -g browser-sync
browser-sync start --server --files "*.html, *.js, *.css"
```

### Production Considerations

**File Optimization**:
```bash
# Minify JavaScript (optional)
npx terser app.js -o app.min.js

# Optimize CSS (optional)
npx clean-css-cli style.css -o style.min.css

# Compress images if any are added
```

**CDN Configuration**:
```html
<!-- Example with CDN headers -->
<link rel="preload" href="app.js" as="script">
<link rel="preload" href="style.css" as="style">
```

## Integration Examples

### Embedding in Educational Platforms

#### LMS Integration (Moodle, Canvas, etc.)

```html
<!-- Embed as iframe -->
<iframe 
    src="https://your-domain.com/fallacy-trainer"
    width="100%" 
    height="800px"
    frameborder="0">
</iframe>

<!-- Or embed directly in course content -->
<div class="fallacy-trainer-embed">
    <!-- Include the HTML content directly -->
</div>
<script src="https://your-domain.com/app.js"></script>
<link rel="stylesheet" href="https://your-domain.com/style.css">
```

#### WordPress Integration

```php
// Add to functions.php
function enqueue_fallacy_trainer() {
    wp_enqueue_script('fallacy-trainer', '/path/to/app.js', [], '1.0', true);
    wp_enqueue_style('fallacy-trainer', '/path/to/style.css');
}
add_action('wp_enqueue_scripts', 'enqueue_fallacy_trainer');

// Shortcode for content
function fallacy_trainer_shortcode($atts) {
    $atts = shortcode_atts([
        'section' => 'home',
        'height' => '600px'
    ], $atts);
    
    return '<div class="fallacy-trainer-container" style="height: ' . $atts['height'] . '"></div>';
}
add_shortcode('fallacy_trainer', 'fallacy_trainer_shortcode');
```

### Custom Application Integration

#### React Integration

```jsx
import React, { useEffect, useRef } from 'react';

const FallacyTrainerComponent = ({ section = 'home' }) => {
    const containerRef = useRef(null);
    const trainerRef = useRef(null);

    useEffect(() => {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/fallacy-trainer/style.css';
        document.head.appendChild(link);

        // Load and initialize the trainer
        import('/fallacy-trainer/app.js').then(() => {
            if (containerRef.current && !trainerRef.current) {
                // Initialize the fallacy trainer
                trainerRef.current = new window.FallacyTrainer();
                if (section !== 'home') {
                    trainerRef.current.showSection(section);
                }
            }
        });

        return () => {
            // Cleanup if needed
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
        };
    }, [section]);

    return (
        <div 
            ref={containerRef}
            className="fallacy-trainer-react-wrapper"
            style={{ width: '100%', height: '600px' }}
        >
            {/* Fallacy trainer will be rendered here */}
        </div>
    );
};

export default FallacyTrainerComponent;
```

#### Vue.js Integration

```vue
<template>
    <div 
        ref="fallacyContainer" 
        class="fallacy-trainer-vue-wrapper"
        :style="{ height: height }"
    >
        <!-- Fallacy trainer content -->
    </div>
</template>

<script>
export default {
    name: 'FallacyTrainer',
    props: {
        initialSection: {
            type: String,
            default: 'home'
        },
        height: {
            type: String,
            default: '600px'
        }
    },
    mounted() {
        this.initializeFallacyTrainer();
    },
    methods: {
        async initializeFallacyTrainer() {
            // Load CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/fallacy-trainer/style.css';
            document.head.appendChild(link);

            // Load JS and initialize
            await import('/fallacy-trainer/app.js');
            this.trainer = new window.FallacyTrainer();
            
            if (this.initialSection !== 'home') {
                this.trainer.showSection(this.initialSection);
            }
        },
        
        // Expose methods for parent component interaction
        navigateToSection(section) {
            if (this.trainer) {
                this.trainer.showSection(section);
            }
        },
        
        getUserProgress() {
            return this.trainer ? this.trainer.userData : null;
        }
    }
};
</script>
```

### API Integration

#### Progress Tracking

```javascript
// Custom progress tracking integration
class ProgressTracker {
    constructor(apiEndpoint, userId) {
        this.apiEndpoint = apiEndpoint;
        this.userId = userId;
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Listen for quiz completions
        document.addEventListener('quiz-completed', (event) => {
            this.trackQuizCompletion(event.detail);
        });

        // Listen for badge unlocks
        document.addEventListener('badge-earned', (event) => {
            this.trackBadgeEarned(event.detail);
        });

        // Listen for challenge completions
        document.addEventListener('challenge-completed', (event) => {
            this.trackChallengeCompletion(event.detail);
        });
    }

    async trackQuizCompletion(quizData) {
        try {
            await fetch(`${this.apiEndpoint}/progress/quiz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                body: JSON.stringify({
                    userId: this.userId,
                    score: quizData.score,
                    totalQuestions: quizData.totalQuestions,
                    timeSpent: quizData.timeSpent,
                    completedAt: new Date().toISOString()
                })
            });
        } catch (error) {
            console.error('Failed to track quiz completion:', error);
        }
    }

    async trackBadgeEarned(badgeData) {
        try {
            await fetch(`${this.apiEndpoint}/progress/badge`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                body: JSON.stringify({
                    userId: this.userId,
                    badgeId: badgeData.id,
                    badgeName: badgeData.name,
                    earnedAt: new Date().toISOString()
                })
            });
        } catch (error) {
            console.error('Failed to track badge earned:', error);
        }
    }

    getAuthToken() {
        // Return authentication token
        return localStorage.getItem('authToken');
    }
}

// Initialize progress tracking
const progressTracker = new ProgressTracker('https://api.example.com', 'user123');
```

#### Custom Analytics

```javascript
// Google Analytics integration
class FallacyTrainerAnalytics {
    constructor(gaTrackingId) {
        this.gaTrackingId = gaTrackingId;
        this.initializeGA();
        this.setupTracking();
    }

    initializeGA() {
        // Initialize Google Analytics
        gtag('config', this.gaTrackingId);
    }

    setupTracking() {
        // Track section navigation
        const originalShowSection = FallacyTrainer.prototype.showSection;
        FallacyTrainer.prototype.showSection = function(section) {
            gtag('event', 'section_view', {
                'custom_parameter': section,
                'engagement_time_msec': 100
            });
            return originalShowSection.call(this, section);
        };

        // Track quiz completions
        const originalFinishQuiz = FallacyTrainer.prototype.finishQuiz;
        FallacyTrainer.prototype.finishQuiz = function() {
            const score = this.currentQuiz.score;
            const total = this.currentQuiz.questions.length;
            
            gtag('event', 'quiz_completed', {
                'custom_parameter': `${score}/${total}`,
                'engagement_time_msec': 100
            });
            
            return originalFinishQuiz.call(this);
        };

        // Track fallacy analysis usage
        const originalAnalyzeFallacies = FallacyTrainer.prototype.analyzeFallacies;
        FallacyTrainer.prototype.analyzeFallacies = function(text) {
            gtag('event', 'fallacy_analysis', {
                'custom_parameter': text.length,
                'engagement_time_msec': 100
            });
            
            return originalAnalyzeFallacies.call(this, text);
        };
    }
}

// Initialize analytics
const analytics = new FallacyTrainerAnalytics('GA_TRACKING_ID');
```

## Customization Guide

### Theming and Styling

#### Custom Color Scheme

```css
/* Override CSS variables for custom theming */
:root {
    --primary-color: #your-primary-color;
    --secondary-color: #your-secondary-color;
    --background-color: #your-background;
    --text-color: #your-text-color;
    --accent-color: #your-accent;
}

/* Custom component styling */
.app-header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
}
```

#### Dark Mode Implementation

```css
/* Dark mode styles */
[data-theme="dark"] {
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --primary-color: #4a9eff;
    --secondary-color: #2d5aa0;
    --accent-color: #66b3ff;
}

/* Dark mode toggle */
.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}
```

```javascript
// Dark mode toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle btn btn-outline';
    themeToggle.innerHTML = '🌙';
    themeToggle.title = 'Toggle dark mode';
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    
    document.body.appendChild(themeToggle);
}

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeThemeToggle);
```

### Adding Custom Content

#### Custom Fallacies

```javascript
// Extend the fallacies array with custom content
const CUSTOM_FALLACIES = [
    {
        id: 8,
        name: "Appeal to Emotion",
        definition: "Using emotional manipulation instead of logical reasoning",
        description: "This fallacy attempts to win an argument by manipulating emotions rather than presenting evidence.",
        examples: [
            "Think of the children! We must ban this immediately.",
            "If you don't support this, you hate our country."
        ],
        keywords: ["emotional manipulation", "fear", "guilt", "anger"],
        category: "informal"
    }
];

// Merge with existing fallacies
const EXTENDED_FALLACIES = [...FALLACIES, ...CUSTOM_FALLACIES];

// Update the application to use extended fallacies
FallacyTrainer.prototype.getExtendedFallacies = function() {
    return EXTENDED_FALLACIES;
};
```

#### Custom Badges

```javascript
// Add custom achievement badges
const CUSTOM_BADGES = [
    {
        id: 6,
        name: "Speed Reader",
        description: "Complete a quiz in under 2 minutes",
        icon: "⚡",
        points: 15
    },
    {
        id: 7,
        name: "Perfect Score",
        description: "Get 100% on any quiz",
        icon: "🎯",
        points: 25
    }
];

// Custom badge checking logic
FallacyTrainer.prototype.checkCustomBadges = function(quizData) {
    // Speed Reader badge
    if (quizData.timeSpent < 120000 && !this.userData.earnedBadges.includes(6)) {
        this.awardBadge(6);
    }
    
    // Perfect Score badge
    if (quizData.score === quizData.totalQuestions && !this.userData.earnedBadges.includes(7)) {
        this.awardBadge(7);
    }
};
```

### Localization

#### Multi-language Support

```javascript
// Language configuration
const TRANSLATIONS = {
    en: {
        title: "Logical Fallacy Trainer",
        buttons: {
            analyze: "Analyze Text",
            startQuiz: "Start Quiz",
            nextQuestion: "Next Question"
        },
        fallacies: {
            strawMan: "Straw Man",
            adHominem: "Ad Hominem"
        }
    },
    es: {
        title: "Entrenador de Falacias Lógicas",
        buttons: {
            analyze: "Analizar Texto",
            startQuiz: "Comenzar Quiz",
            nextQuestion: "Siguiente Pregunta"
        },
        fallacies: {
            strawMan: "Hombre de Paja",
            adHominem: "Ad Hominem"
        }
    }
};

// Localization utility
class Localizer {
    constructor(defaultLanguage = 'en') {
        this.currentLanguage = defaultLanguage;
        this.translations = TRANSLATIONS;
    }

    setLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            this.updateUI();
        }
    }

    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    }

    updateUI() {
        // Update text content throughout the application
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });
    }
}

// Initialize localization
const localizer = new Localizer();
```

## Performance Optimization

### Lazy Loading

```javascript
// Lazy load sections to improve initial load time
class LazyLoader {
    constructor() {
        this.loadedSections = new Set(['home']);
        this.setupLazyLoading();
    }

    setupLazyLoading() {
        const originalShowSection = FallacyTrainer.prototype.showSection;
        FallacyTrainer.prototype.showSection = function(sectionName) {
            if (!this.lazyLoader.loadedSections.has(sectionName)) {
                this.lazyLoader.loadSection(sectionName);
            }
            return originalShowSection.call(this, sectionName);
        };
    }

    async loadSection(sectionName) {
        try {
            switch (sectionName) {
                case 'quiz':
                    await this.loadQuizResources();
                    break;
                case 'learn':
                    await this.loadLearnResources();
                    break;
                case 'progress':
                    await this.loadProgressResources();
                    break;
            }
            this.loadedSections.add(sectionName);
        } catch (error) {
            console.error(`Failed to load section ${sectionName}:`, error);
        }
    }

    async loadQuizResources() {
        // Load quiz-specific data
        const quizData = await fetch('/data/quiz-questions.json');
        // Initialize quiz-specific functionality
    }

    async loadLearnResources() {
        // Load learning materials
        const learnData = await fetch('/data/learning-content.json');
        // Initialize learning-specific functionality  
    }

    async loadProgressResources() {
        // Load progress tracking
        const progressData = await fetch('/data/user-progress.json');
        // Initialize progress-specific functionality
    }
}

// Initialize lazy loader
const lazyLoader = new LazyLoader();
```

### Caching Strategy

```javascript
// Service Worker for caching
const CACHE_NAME = 'fallacy-trainer-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/style.css',
    '/data/fallacies.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});
```

### Data Optimization

```javascript
// Optimize data loading with compression
class DataOptimizer {
    constructor() {
        this.compressedData = null;
        this.initializeCompression();
    }

    async initializeCompression() {
        // Use compression for large datasets
        if ('CompressionStream' in window) {
            this.compressedData = await this.compressData(FALLACIES);
        }
    }

    async compressData(data) {
        const jsonString = JSON.stringify(data);
        const stream = new CompressionStream('gzip');
        const writer = stream.writable.getWriter();
        const reader = stream.readable.getReader();

        writer.write(new TextEncoder().encode(jsonString));
        writer.close();

        const chunks = [];
        let done = false;

        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) chunks.push(value);
        }

        return new Uint8Array(chunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    }

    // Debounced search for better performance
    debounceSearch(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
}
```

## Troubleshooting

### Common Issues

#### CORS Errors
```javascript
// Solution: Use proper server configuration
// For development, use live-server or similar
// For production, ensure proper CORS headers

// If using Express.js backend:
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
```

#### Local Storage Issues
```javascript
// Robust localStorage handling
class SafeStorage {
    static setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.warn('localStorage not available:', error);
            return false;
        }
    }

    static getItem(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn('Failed to parse localStorage item:', error);
            return defaultValue;
        }
    }

    static removeItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn('Failed to remove localStorage item:', error);
            return false;
        }
    }
}

// Use SafeStorage instead of direct localStorage access
const userData = SafeStorage.getItem('fallacyTrainerData', defaultUserData);
```

#### Mobile Responsiveness
```css
/* Ensure mobile compatibility */
@media (max-width: 768px) {
    .main-nav {
        flex-direction: column;
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100vh;
        transition: left 0.3s ease;
    }

    .main-nav.mobile-open {
        left: 0;
    }

    .quiz-container {
        padding: 10px;
    }

    .fallacy-spotter textarea {
        min-height: 120px;
    }
}
```

#### Performance on Older Devices
```javascript
// Feature detection and graceful degradation
class FeatureDetection {
    static hasLocalStorage() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (error) {
            return false;
        }
    }

    static hasServiceWorker() {
        return 'serviceWorker' in navigator;
    }

    static hasWebGL() {
        try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        } catch (error) {
            return false;
        }
    }

    static optimizeForDevice() {
        // Reduce animations on older devices
        if (navigator.hardwareConcurrency < 4) {
            document.body.classList.add('reduced-motion');
        }

        // Simplify UI for smaller screens
        if (screen.width < 768) {
            document.body.classList.add('mobile-optimized');
        }
    }
}

// Initialize optimizations
FeatureDetection.optimizeForDevice();
```

### Debug Mode

```javascript
// Enable debug mode for development
const DEBUG_MODE = localStorage.getItem('fallacy-trainer-debug') === 'true';

if (DEBUG_MODE) {
    // Add debug panel
    const debugPanel = document.createElement('div');
    debugPanel.id = 'debug-panel';
    debugPanel.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
        z-index: 9999;
    `;
    
    // Update debug info
    setInterval(() => {
        if (window.fallacyTrainer) {
            debugPanel.innerHTML = `
                <strong>Debug Info:</strong><br>
                Section: ${window.fallacyTrainer.currentSection}<br>
                Points: ${window.fallacyTrainer.userData.totalPoints}<br>
                Badges: ${window.fallacyTrainer.userData.earnedBadges.length}/5<br>
                Quiz Active: ${window.fallacyTrainer.currentQuiz.isActive}
            `;
        }
    }, 1000);
    
    document.body.appendChild(debugPanel);
}

// Enable debug mode
// localStorage.setItem('fallacy-trainer-debug', 'true');
```

---

This integration guide provides comprehensive instructions for deploying, customizing, and extending the Logical Fallacy Trainer application for various use cases and environments.
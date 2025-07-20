// Application Data
const FALLACIES = [
    {
        id: 1,
        name: "Straw Man",
        definition: "Distorting or misrepresenting an opponent's argument to make it easier to attack",
        description: "The straw man fallacy occurs when someone rebuts an argument by misconstruing it, creating a fake representation that's easier to knock down.",
        examples: [
            "Person A: 'I think we should increase funding for education.' Person B: 'Why do you want to waste taxpayer money on useless programs?'",
            "Teenager: 'I want to go to the party tonight.' Parent: 'So you want to be irresponsible and get into trouble?'",
            "Person A: 'I prefer dogs over cats.' Person B: 'Why do you hate cats so much?'"
        ],
        keywords: ["misrepresent", "distort", "exaggerate", "oversimplify", "caricature"],
        category: "informal"
    },
    {
        id: 2,
        name: "Ad Hominem",
        definition: "Attacking the person making an argument rather than addressing the argument itself",
        description: "Ad hominem attacks focus on personal characteristics, background, or credibility rather than the merits of the argument being presented.",
        examples: [
            "You can't trust his opinion on economics because he's just a college dropout.",
            "She's too young to understand these complex political issues.",
            "His argument about climate change is invalid because he drives a gas-guzzling car."
        ],
        keywords: ["attack", "personal", "character", "credibility", "irrelevant"],
        category: "informal"
    },
    {
        id: 3,
        name: "Slippery Slope",
        definition: "Asserting that one event will lead to a chain of events resulting in an extreme outcome without evidence",
        description: "The slippery slope fallacy claims that if we allow A to happen, then B, C, D, and eventually E will inevitably occur, without providing evidence for this chain reaction.",
        examples: [
            "If we legalize marijuana, next we'll legalize all drugs and society will collapse.",
            "If we allow students to retake tests, soon they'll expect to retake everything and academic standards will disappear.",
            "If we raise taxes by 1%, soon we'll be a communist state."
        ],
        keywords: ["inevitable", "chain reaction", "extreme outcome", "without evidence", "cascade"],
        category: "informal"
    },
    {
        id: 4,
        name: "False Dilemma",
        definition: "Presenting only two options when more possibilities exist, or presenting them as mutually exclusive when they're not",
        description: "Also known as the either/or fallacy, this presents a limited number of options as if they were the only ones available.",
        examples: [
            "You're either with us or against us.",
            "We can either cut education funding or raise taxes dramatically.",
            "Either you support the war or you don't support our troops."
        ],
        keywords: ["either or", "only two options", "limited choices", "binary", "mutually exclusive"],
        category: "informal"
    },
    {
        id: 5,
        name: "Hasty Generalization",
        definition: "Drawing a broad conclusion from a small, unrepresentative sample",
        description: "This fallacy involves jumping to conclusions without sufficient evidence, often based on limited examples or experiences.",
        examples: [
            "I met two rude people from that city, so everyone from there must be rude.",
            "My grandfather smoked his whole life and lived to 90, so smoking can't be that bad.",
            "That restaurant gave me food poisoning once, so all restaurants are unsafe."
        ],
        keywords: ["small sample", "insufficient evidence", "generalize", "limited examples", "jumping to conclusions"],
        category: "informal"
    },
    {
        id: 6,
        name: "Red Herring",
        definition: "Introducing irrelevant information to distract from the main argument",
        description: "A red herring diverts attention from the original issue by bringing up something unrelated but emotionally compelling.",
        examples: [
            "We shouldn't worry about the city's budget deficit when there are so many homeless people on the streets.",
            "Why focus on my grades when there are children starving in Africa?",
            "You say I'm spending too much money, but what about all the joy I bring to this family?"
        ],
        keywords: ["distraction", "irrelevant", "divert attention", "unrelated", "change subject"],
        category: "informal"
    },
    {
        id: 7,
        name: "Bandwagon",
        definition: "Arguing that something is true or good because many people believe or do it",
        description: "Also known as appeal to popularity, this fallacy assumes that because something is popular, it must be correct or good.",
        examples: [
            "Everyone is buying this stock, so it must be a good investment.",
            "Most people believe this, so it must be true.",
            "All the popular kids are wearing this brand, so you should too."
        ],
        keywords: ["popular", "everyone", "majority", "widespread", "common belief"],
        category: "informal"
    }
];

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "Which fallacy is being used? 'We shouldn't listen to Senator Smith's proposal for healthcare reform because he was caught cheating on his taxes.'",
        options: ["Straw Man", "Ad Hominem", "Red Herring", "False Dilemma"],
        correct: 1,
        explanation: "This is an ad hominem attack because it attacks the person (Senator Smith's character) rather than addressing the merits of his healthcare proposal."
    },
    {
        id: 2,
        question: "Identify the fallacy: 'If we allow students to use calculators on this test, pretty soon they won't be able to do any math in their heads, and then they'll become completely dependent on technology for everything.'",
        options: ["Hasty Generalization", "Slippery Slope", "Bandwagon", "False Dilemma"],
        correct: 1,
        explanation: "This is a slippery slope fallacy because it assumes that allowing calculators will inevitably lead to complete dependency on technology without providing evidence for this chain of events."
    },
    {
        id: 3,
        question: "What fallacy is demonstrated here? 'Person A: We should increase funding for public parks. Person B: So you want to waste taxpayer money on unnecessary luxuries while people are struggling to pay their bills?'",
        options: ["Straw Man", "Red Herring", "Ad Hominem", "Bandwagon"],
        correct: 0,
        explanation: "This is a straw man fallacy because Person B misrepresents Person A's argument about park funding as 'wasting money on luxuries,' which makes it easier to attack."
    },
    {
        id: 4,
        question: "Which fallacy is this? 'Either we ban all cars from the city center, or we'll never solve our pollution problem.'",
        options: ["False Dilemma", "Hasty Generalization", "Slippery Slope", "Red Herring"],
        correct: 0,
        explanation: "This is a false dilemma because it presents only two extreme options (ban all cars vs. never solve pollution) when there are many other possible solutions to address pollution."
    },
    {
        id: 5,
        question: "Identify the fallacy: 'I've tried three different restaurants in this neighborhood and they were all terrible. This whole area has horrible food.'",
        options: ["Bandwagon", "Hasty Generalization", "Ad Hominem", "False Dilemma"],
        correct: 1,
        explanation: "This is a hasty generalization because it draws a broad conclusion about all restaurants in the neighborhood based on only three examples."
    }
];

const DAILY_CHALLENGES = [
    {
        id: 1,
        title: "Social Media Fallacy Hunt",
        description: "Find three examples of logical fallacies in social media posts or comments today. Screenshot them (if public) and identify which fallacies they represent.",
        difficulty: "easy",
        category: "real-world"
    },
    {
        id: 2,
        title: "Debate Analysis",
        description: "Watch a 10-minute political debate clip and identify at least two different types of fallacies used by the participants.",
        difficulty: "medium",
        category: "analysis"
    },
    {
        id: 3,
        title: "Fallacy Creation",
        description: "Create your own example of a straw man argument and then rewrite it as a fair representation of the original position.",
        difficulty: "hard",
        category: "creative"
    }
];

const BADGES = [
    {
        id: 1,
        name: "Fallacy Detective",
        description: "Correctly identify your first logical fallacy",
        icon: "🕵️",
        points: 10
    },
    {
        id: 2,
        name: "Straw Man Spotter",
        description: "Correctly identify 5 straw man fallacies",
        icon: "🎭",
        points: 25
    },
    {
        id: 3,
        name: "Quiz Master",
        description: "Complete 10 quizzes with 80% accuracy or higher",
        icon: "🎓",
        points: 50
    },
    {
        id: 4,
        name: "Daily Challenger",
        description: "Complete 7 daily challenges in a row",
        icon: "⚡",
        points: 30
    },
    {
        id: 5,
        name: "Logic Legend",
        description: "Earn 500 total points",
        icon: "👑",
        points: 100
    }
];

// Application State
class FallacyTrainer {
    constructor() {
        this.currentSection = 'home';
        this.currentQuiz = {
            questions: [],
            currentQuestion: 0,
            score: 0,
            isActive: false
        };
        this.userData = this.loadUserData();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupFallacySpotter();
        this.setupQuizCenter();
        this.setupDailyChallenge();
        this.setupLearnSection();
        this.updateAllDisplays();
        this.showSection('home');
    }

    loadUserData() {
        const defaultData = {
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
        };
        
        const saved = localStorage.getItem('fallacyTrainerData');
        return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    }

    saveUserData() {
        localStorage.setItem('fallacyTrainerData', JSON.stringify(this.userData));
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        const featureCards = document.querySelectorAll('.feature-card');
        
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.showSection(section);
            });
        });

        featureCards.forEach(card => {
            const btn = card.querySelector('.btn');
            if (btn) {
                btn.addEventListener('click', () => {
                    const section = card.dataset.section;
                    this.showSection(section);
                });
            }
        });
    }

    showSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === sectionName);
        });

        // Update sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.toggle('active', section.id === sectionName);
        });

        this.currentSection = sectionName;

        // Initialize section-specific content
        if (sectionName === 'progress') {
            this.updateProgressDashboard();
        } else if (sectionName === 'challenge') {
            this.updateDailyChallenge();
        }
    }

    setupFallacySpotter() {
        const analyzeBtn = document.getElementById('analyze-btn');
        const textInput = document.getElementById('text-input');
        
        analyzeBtn.addEventListener('click', () => {
            const text = textInput.value.trim();
            if (text) {
                this.analyzeFallacies(text);
            }
        });
    }

    analyzeFallacies(text) {
        const analyzeBtn = document.getElementById('analyze-btn');
        const resultsPanel = document.getElementById('analysis-results');
        
        // Show loading state
        analyzeBtn.innerHTML = '<span class="loading"></span> Analyzing...';
        analyzeBtn.disabled = true;
        
        // Simulate AI analysis delay
        setTimeout(() => {
            const detectedFallacies = this.simulateFallacyDetection(text);
            this.displayFallacyResults(text, detectedFallacies);
            
            // Award points for using spotter
            this.awardPoints(5, "Used Fallacy Spotter");
            this.userData.fallaciesSpotted += detectedFallacies.length;
            this.saveUserData();
            this.updateAllDisplays();
            
            // Reset button
            analyzeBtn.innerHTML = '🔍 Analyze Text';
            analyzeBtn.disabled = false;
            
            // Check for first analysis badge
            if (this.userData.fallaciesSpotted === detectedFallacies.length && !this.userData.earnedBadges.includes(1)) {
                this.awardBadge(1);
            }
            
        }, 1500);
    }

    simulateFallacyDetection(text) {
        const detected = [];
        const numFallacies = Math.floor(Math.random() * 3) + 1; // 1-3 fallacies
        const availableFallacies = [...FALLACIES];
        
        for (let i = 0; i < numFallacies && availableFallacies.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableFallacies.length);
            const fallacy = availableFallacies.splice(randomIndex, 1)[0];
            
            // Find a random position in text for highlighting
            const words = text.split(' ');
            const startIndex = Math.floor(Math.random() * Math.max(1, words.length - 3));
            const endIndex = Math.min(startIndex + Math.floor(Math.random() * 5) + 3, words.length);
            
            detected.push({
                ...fallacy,
                position: { start: startIndex, end: endIndex },
                highlightText: words.slice(startIndex, endIndex).join(' ')
            });
        }
        
        return detected;
    }

    displayFallacyResults(text, fallacies) {
        const resultsPanel = document.getElementById('analysis-results');
        const highlightsDiv = document.getElementById('fallacy-highlights');
        const fallaciesDiv = document.getElementById('detected-fallacies');
        
        // Create highlighted text
        const words = text.split(' ');
        let highlightedText = '';
        let currentIndex = 0;
        
        fallacies.forEach((fallacy, index) => {
            const className = fallacy.name.toLowerCase().replace(/\s+/g, '-');
            
            // Add words before highlight
            highlightedText += words.slice(currentIndex, fallacy.position.start).join(' ') + ' ';
            
            // Add highlighted section
            highlightedText += `<span class="fallacy-highlight ${className}" data-fallacy="${index}">${fallacy.highlightText}</span> `;
            
            currentIndex = fallacy.position.end;
        });
        
        // Add remaining text
        highlightedText += words.slice(currentIndex).join(' ');
        
        highlightsDiv.innerHTML = highlightedText;
        
        // Create fallacy explanations
        fallaciesDiv.innerHTML = fallacies.map(fallacy => `
            <div class="detected-fallacy">
                <div class="fallacy-name">${fallacy.name}</div>
                <div class="fallacy-explanation">${fallacy.definition}</div>
                <div class="fallacy-suggestion">
                    💡 Suggestion: Try rephrasing to address the actual argument rather than using this approach.
                </div>
            </div>
        `).join('');
        
        resultsPanel.classList.remove('hidden');
        resultsPanel.scrollIntoView({ behavior: 'smooth' });
    }

    setupQuizCenter() {
        const startQuizBtn = document.getElementById('start-quiz');
        const nextQuestionBtn = document.getElementById('next-question');
        const restartQuizBtn = document.getElementById('restart-quiz');
        
        startQuizBtn.addEventListener('click', () => this.startQuiz());
        nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        restartQuizBtn.addEventListener('click', () => this.startQuiz());
    }

    startQuiz() {
        this.currentQuiz = {
            questions: [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5),
            currentQuestion: 0,
            score: 0,
            isActive: true
        };
        
        document.getElementById('quiz-question').style.display = 'block';
        document.getElementById('quiz-complete').style.display = 'none';
        document.getElementById('start-quiz').style.display = 'none';
        
        this.displayCurrentQuestion();
    }

    displayCurrentQuestion() {
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const questionCounter = document.getElementById('question-counter');
        const progressFill = document.getElementById('progress-fill');
        const currentScore = document.getElementById('current-score');
        const feedback = document.getElementById('question-feedback');
        const nextBtn = document.getElementById('next-question');
        
        questionText.textContent = question.question;
        questionCounter.textContent = `Question ${this.currentQuiz.currentQuestion + 1} of ${this.currentQuiz.questions.length}`;
        progressFill.style.width = `${((this.currentQuiz.currentQuestion) / this.currentQuiz.questions.length) * 100}%`;
        currentScore.textContent = `${this.currentQuiz.score}/${this.currentQuiz.questions.length}`;
        
        answerOptions.innerHTML = question.options.map((option, index) => `
            <div class="answer-option" data-index="${index}">
                ${option}
            </div>
        `).join('');
        
        // Add click handlers to options
        answerOptions.querySelectorAll('.answer-option').forEach(option => {
            option.addEventListener('click', () => this.selectAnswer(parseInt(option.dataset.index)));
        });
        
        feedback.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }

    selectAnswer(selectedIndex) {
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        const options = document.querySelectorAll('.answer-option');
        const feedback = document.getElementById('question-feedback');
        const nextBtn = document.getElementById('next-question');
        
        // Disable all options
        options.forEach(option => option.style.pointerEvents = 'none');
        
        // Show correct/incorrect
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
            if (index === selectedIndex) {
                option.classList.add('selected');
            }
        });
        
        // Update score
        if (selectedIndex === question.correct) {
            this.currentQuiz.score++;
            this.awardPoints(10, "Correct quiz answer");
        }
        
        // Show feedback
        feedback.innerHTML = `
            <strong>${selectedIndex === question.correct ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
            ${question.explanation}
        `;
        feedback.classList.remove('hidden');
        
        // Update display
        document.getElementById('current-score').textContent = `${this.currentQuiz.score}/${this.currentQuiz.questions.length}`;
        
        // Show next button or finish quiz
        if (this.currentQuiz.currentQuestion < this.currentQuiz.questions.length - 1) {
            nextBtn.textContent = 'Next Question';
            nextBtn.classList.remove('hidden');
        } else {
            nextBtn.textContent = 'Finish Quiz';
            nextBtn.classList.remove('hidden');
        }
    }

    nextQuestion() {
        this.currentQuiz.currentQuestion++;
        
        if (this.currentQuiz.currentQuestion < this.currentQuiz.questions.length) {
            this.displayCurrentQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        const accuracy = Math.round((this.currentQuiz.score / this.currentQuiz.questions.length) * 100);
        
        // Update user data
        this.userData.quizzesCompleted++;
        this.userData.totalQuizQuestions += this.currentQuiz.questions.length;
        this.userData.correctAnswers += this.currentQuiz.score;
        this.userData.quizAccuracy = Math.round((this.userData.correctAnswers / this.userData.totalQuizQuestions) * 100);
        
        this.addRecentActivity(`Completed quiz with ${accuracy}% accuracy`);
        this.saveUserData();
        this.updateAllDisplays();
        
        // Check for badges
        if (this.userData.quizzesCompleted >= 10 && this.userData.quizAccuracy >= 80 && !this.userData.earnedBadges.includes(3)) {
            this.awardBadge(3);
        }
        
        // Show results
        document.getElementById('final-score').textContent = `${this.currentQuiz.score}`;
        document.getElementById('final-accuracy').textContent = `${accuracy}%`;
        document.getElementById('quiz-question').style.display = 'none';
        document.getElementById('quiz-complete').style.display = 'block';
        
        // Update progress bar to 100%
        document.getElementById('progress-fill').style.width = '100%';
    }

    setupDailyChallenge() {
        const completeBtn = document.getElementById('complete-challenge');
        completeBtn.addEventListener('click', () => this.completeChallenge());
    }

    updateDailyChallenge() {
        const today = new Date().toDateString();
        const challengeDate = document.getElementById('challenge-date');
        const challengeTitle = document.getElementById('challenge-title');
        const challengeDescription = document.getElementById('challenge-description');
        const challengeDifficulty = document.getElementById('challenge-difficulty');
        const challengeStreak = document.getElementById('challenge-streak');
        const completeBtn = document.getElementById('complete-challenge');
        
        challengeDate.textContent = today;
        challengeStreak.textContent = this.userData.challengeStreak;
        
        // Get today's challenge (rotate based on date)
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const todayChallenge = DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length];
        
        challengeTitle.textContent = todayChallenge.title;
        challengeDescription.textContent = todayChallenge.description;
        challengeDifficulty.textContent = todayChallenge.difficulty;
        challengeDifficulty.className = `status status--${todayChallenge.difficulty}`;
        
        // Check if already completed today
        const lastCompleted = this.userData.lastChallengeDate;
        const alreadyCompleted = lastCompleted === today;
        
        completeBtn.textContent = alreadyCompleted ? '✅ Completed Today' : 'Mark as Complete';
        completeBtn.disabled = alreadyCompleted;
        
        this.updateChallengeHistory();
    }

    completeChallenge() {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        // Update streak
        if (this.userData.lastChallengeDate === yesterday) {
            this.userData.challengeStreak++;
        } else if (this.userData.lastChallengeDate !== today) {
            this.userData.challengeStreak = 1;
        }
        
        this.userData.lastChallengeDate = today;
        this.userData.challengesCompleted++;
        
        this.awardPoints(15, "Completed daily challenge");
        this.addRecentActivity("Completed daily challenge");
        this.saveUserData();
        this.updateAllDisplays();
        
        // Check for streak badge
        if (this.userData.challengeStreak >= 7 && !this.userData.earnedBadges.includes(4)) {
            this.awardBadge(4);
        }
        
        this.updateDailyChallenge();
        this.showAchievementToast("Challenge Complete!", "Keep up the great work!");
    }

    updateChallengeHistory() {
        const historyList = document.getElementById('challenge-history-list');
        const recentChallenges = [];
        
        // Generate some recent challenges
        for (let i = 1; i <= 5; i++) {
            const date = new Date(Date.now() - i * 86400000);
            const challenge = DAILY_CHALLENGES[(Math.floor((Date.now() - new Date(date.getFullYear(), 0, 0)) / 86400000) - i) % DAILY_CHALLENGES.length];
            const completed = this.userData.lastChallengeDate >= date.toDateString() || Math.random() > 0.3;
            
            recentChallenges.push({
                date: date.toLocaleDateString(),
                title: challenge.title,
                completed
            });
        }
        
        historyList.innerHTML = recentChallenges.map(item => `
            <div class="challenge-history-item">
                <div class="activity-text">
                    <strong>${item.title}</strong><br>
                    <small>${item.date}</small>
                </div>
                <div class="${item.completed ? 'status status--success' : 'status status--info'}">
                    ${item.completed ? '✅ Complete' : '⏳ Pending'}
                </div>
            </div>
        `).join('');
    }

    updateProgressDashboard() {
        // Update main stats
        document.getElementById('progress-points').textContent = this.userData.totalPoints;
        document.getElementById('progress-quizzes').textContent = this.userData.quizzesCompleted;
        document.getElementById('progress-challenges').textContent = this.userData.challengesCompleted;
        document.getElementById('progress-badges').textContent = `${this.userData.earnedBadges.length}/5`;
        
        // Update badges
        this.updateBadgesDisplay();
        
        // Update activity feed
        this.updateActivityFeed();
    }

    updateBadgesDisplay() {
        const badgesGrid = document.getElementById('badges-grid');
        
        badgesGrid.innerHTML = BADGES.map(badge => {
            const earned = this.userData.earnedBadges.includes(badge.id);
            return `
                <div class="badge-card ${earned ? 'earned' : ''}">
                    <div class="badge-icon">${badge.icon}</div>
                    <div class="badge-name">${badge.name}</div>
                    <div class="badge-description">${badge.description}</div>
                    <div class="badge-points">+${badge.points} points</div>
                </div>
            `;
        }).join('');
    }

    updateActivityFeed() {
        const activityFeed = document.getElementById('activity-feed');
        const activities = this.userData.recentActivity.slice(0, 10);
        
        if (activities.length === 0) {
            activityFeed.innerHTML = '<div class="activity-item">No recent activity. Start learning to see your progress here!</div>';
            return;
        }
        
        activityFeed.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-text">${activity.action}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `).join('');
    }

    setupLearnSection() {
        const searchInput = document.getElementById('fallacy-search');
        const fallacyList = document.getElementById('fallacy-list');
        
        searchInput.addEventListener('input', (e) => {
            this.filterFallacies(e.target.value);
        });
        
        this.displayFallacies(FALLACIES);
    }

    displayFallacies(fallacies) {
        const fallacyList = document.getElementById('fallacy-list');
        
        fallacyList.innerHTML = fallacies.map(fallacy => `
            <div class="fallacy-item" data-id="${fallacy.id}">
                <div class="fallacy-header">
                    <div class="fallacy-title">${fallacy.name}</div>
                    <div class="fallacy-toggle">▼</div>
                </div>
                <div class="fallacy-content">
                    <div class="fallacy-definition">${fallacy.definition}</div>
                    <div class="fallacy-examples">
                        <h4>Examples:</h4>
                        ${fallacy.examples.map(example => `
                            <div class="example-item">"${example}"</div>
                        `).join('')}
                    </div>
                    <div class="fallacy-keywords">
                        <strong>Key indicators:</strong>
                        ${fallacy.keywords.map(keyword => `
                            <span class="keyword-tag">${keyword}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        fallacyList.querySelectorAll('.fallacy-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('expanded');
            });
        });
    }

    filterFallacies(searchTerm) {
        const filtered = FALLACIES.filter(fallacy => 
            fallacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fallacy.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fallacy.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        
        this.displayFallacies(filtered);
    }

    awardPoints(points, reason) {
        this.userData.totalPoints += points;
        this.addRecentActivity(`+${points} points: ${reason}`);
        
        // Check for point milestone badge
        if (this.userData.totalPoints >= 500 && !this.userData.earnedBadges.includes(5)) {
            this.awardBadge(5);
        }
    }

    awardBadge(badgeId) {
        if (this.userData.earnedBadges.includes(badgeId)) return;
        
        this.userData.earnedBadges.push(badgeId);
        const badge = BADGES.find(b => b.id === badgeId);
        this.userData.totalPoints += badge.points;
        
        this.addRecentActivity(`🏅 Earned badge: ${badge.name}`);
        this.saveUserData();
        this.updateAllDisplays();
        
        this.showAchievementToast(`${badge.icon} ${badge.name}`, badge.description);
    }

    addRecentActivity(action) {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        this.userData.recentActivity.unshift({
            action,
            time: timeString,
            date: now.toDateString()
        });
        
        // Keep only last 20 activities
        this.userData.recentActivity = this.userData.recentActivity.slice(0, 20);
    }

    showAchievementToast(title, description) {
        const toast = document.getElementById('achievement-toast');
        const titleElement = toast.querySelector('.toast-title');
        const descElement = toast.querySelector('.toast-description');
        
        titleElement.textContent = title;
        descElement.textContent = description;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    updateAllDisplays() {
        // Update points in header
        document.getElementById('total-points').textContent = this.userData.totalPoints;
        
        // Update home stats
        document.getElementById('home-total-points').textContent = this.userData.totalPoints;
        document.getElementById('home-badges-earned').textContent = this.userData.earnedBadges.length;
        document.getElementById('home-quiz-accuracy').textContent = `${this.userData.quizAccuracy}%`;
        
        this.saveUserData();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new FallacyTrainer();
});
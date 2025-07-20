# Let me compile comprehensive data about logical fallacies for the application

fallacies_data = {
    "logical_fallacies": [
        {
            "id": 1,
            "name": "Straw Man",
            "definition": "Distorting or misrepresenting an opponent's argument to make it easier to attack",
            "description": "The straw man fallacy occurs when someone rebuts an argument by misconstruing it, creating a fake representation that's easier to knock down.",
            "examples": [
                "Person A: 'I think we should increase funding for education.' Person B: 'Why do you want to waste taxpayer money on useless programs?'",
                "Teenager: 'I want to go to the party tonight.' Parent: 'So you want to be irresponsible and get into trouble?'",
                "Person A: 'I prefer dogs over cats.' Person B: 'Why do you hate cats so much?'"
            ],
            "keywords": ["misrepresent", "distort", "exaggerate", "oversimplify", "caricature"],
            "category": "informal"
        },
        {
            "id": 2,
            "name": "Ad Hominem",
            "definition": "Attacking the person making an argument rather than addressing the argument itself",
            "description": "Ad hominem attacks focus on personal characteristics, background, or credibility rather than the merits of the argument being presented.",
            "examples": [
                "You can't trust his opinion on economics because he's just a college dropout.",
                "She's too young to understand these complex political issues.",
                "His argument about climate change is invalid because he drives a gas-guzzling car."
            ],
            "keywords": ["attack", "personal", "character", "credibility", "irrelevant"],
            "category": "informal"
        },
        {
            "id": 3,
            "name": "Slippery Slope",
            "definition": "Asserting that one event will lead to a chain of events resulting in an extreme outcome without evidence",
            "description": "The slippery slope fallacy claims that if we allow A to happen, then B, C, D, and eventually E will inevitably occur, without providing evidence for this chain reaction.",
            "examples": [
                "If we legalize marijuana, next we'll legalize all drugs and society will collapse.",
                "If we allow students to retake tests, soon they'll expect to retake everything and academic standards will disappear.",
                "If we raise taxes by 1%, soon we'll be a communist state."
            ],
            "keywords": ["inevitable", "chain reaction", "extreme outcome", "without evidence", "cascade"],
            "category": "informal"
        },
        {
            "id": 4,
            "name": "False Dilemma",
            "definition": "Presenting only two options when more possibilities exist, or presenting them as mutually exclusive when they're not",
            "description": "Also known as the either/or fallacy, this presents a limited number of options as if they were the only ones available.",
            "examples": [
                "You're either with us or against us.",
                "We can either cut education funding or raise taxes dramatically.",
                "Either you support the war or you don't support our troops."
            ],
            "keywords": ["either or", "only two options", "limited choices", "binary", "mutually exclusive"],
            "category": "informal"
        },
        {
            "id": 5,
            "name": "Hasty Generalization",
            "definition": "Drawing a broad conclusion from a small, unrepresentative sample",
            "description": "This fallacy involves jumping to conclusions without sufficient evidence, often based on limited examples or experiences.",
            "examples": [
                "I met two rude people from that city, so everyone from there must be rude.",
                "My grandfather smoked his whole life and lived to 90, so smoking can't be that bad.",
                "That restaurant gave me food poisoning once, so all restaurants are unsafe."
            ],
            "keywords": ["small sample", "insufficient evidence", "generalize", "limited examples", "jumping to conclusions"],
            "category": "informal"
        },
        {
            "id": 6,
            "name": "Red Herring",
            "definition": "Introducing irrelevant information to distract from the main argument",
            "description": "A red herring diverts attention from the original issue by bringing up something unrelated but emotionally compelling.",
            "examples": [
                "We shouldn't worry about the city's budget deficit when there are so many homeless people on the streets.",
                "Why focus on my grades when there are children starving in Africa?",
                "You say I'm spending too much money, but what about all the joy I bring to this family?"
            ],
            "keywords": ["distraction", "irrelevant", "divert attention", "unrelated", "change subject"],
            "category": "informal"
        },
        {
            "id": 7,
            "name": "Bandwagon",
            "definition": "Arguing that something is true or good because many people believe or do it",
            "description": "Also known as appeal to popularity, this fallacy assumes that because something is popular, it must be correct or good.",
            "examples": [
                "Everyone is buying this stock, so it must be a good investment.",
                "Most people believe this, so it must be true.",
                "All the popular kids are wearing this brand, so you should too."
            ],
            "keywords": ["popular", "everyone", "majority", "widespread", "common belief"],
            "category": "informal"
        }
    ],
    "quiz_questions": [
        {
            "id": 1,
            "question": "Which fallacy is being used? 'We shouldn't listen to Senator Smith's proposal for healthcare reform because he was caught cheating on his taxes.'",
            "options": ["Straw Man", "Ad Hominem", "Red Herring", "False Dilemma"],
            "correct": 1,
            "explanation": "This is an ad hominem attack because it attacks the person (Senator Smith's character) rather than addressing the merits of his healthcare proposal."
        },
        {
            "id": 2,
            "question": "Identify the fallacy: 'If we allow students to use calculators on this test, pretty soon they won't be able to do any math in their heads, and then they'll become completely dependent on technology for everything.'",
            "options": ["Hasty Generalization", "Slippery Slope", "Bandwagon", "False Dilemma"],
            "correct": 1,
            "explanation": "This is a slippery slope fallacy because it assumes that allowing calculators will inevitably lead to complete dependency on technology without providing evidence for this chain of events."
        },
        {
            "id": 3,
            "question": "What fallacy is demonstrated here? 'Person A: We should increase funding for public parks. Person B: So you want to waste taxpayer money on unnecessary luxuries while people are struggling to pay their bills?'",
            "options": ["Straw Man", "Red Herring", "Ad Hominem", "Bandwagon"],
            "correct": 0,
            "explanation": "This is a straw man fallacy because Person B misrepresents Person A's argument about park funding as 'wasting money on luxuries,' which makes it easier to attack."
        },
        {
            "id": 4,
            "question": "Which fallacy is this? 'Either we ban all cars from the city center, or we'll never solve our pollution problem.'",
            "options": ["False Dilemma", "Hasty Generalization", "Slippery Slope", "Red Herring"],
            "correct": 0,
            "explanation": "This is a false dilemma because it presents only two extreme options (ban all cars vs. never solve pollution) when there are many other possible solutions to address pollution."
        },
        {
            "id": 5,
            "question": "Identify the fallacy: 'I've tried three different restaurants in this neighborhood and they were all terrible. This whole area has horrible food.'",
            "options": ["Bandwagon", "Hasty Generalization", "Ad Hominem", "False Dilemma"],
            "correct": 1,
            "explanation": "This is a hasty generalization because it draws a broad conclusion about all restaurants in the neighborhood based on only three examples."
        }
    ],
    "daily_challenges": [
        {
            "id": 1,
            "title": "Social Media Fallacy Hunt",
            "description": "Find three examples of logical fallacies in social media posts or comments today. Screenshot them (if public) and identify which fallacies they represent.",
            "difficulty": "easy",
            "category": "real-world"
        },
        {
            "id": 2,
            "title": "Debate Analysis",
            "description": "Watch a 10-minute political debate clip and identify at least two different types of fallacies used by the participants.",
            "difficulty": "medium",
            "category": "analysis"
        },
        {
            "id": 3,
            "title": "Fallacy Creation",
            "description": "Create your own example of a straw man argument and then rewrite it as a fair representation of the original position.",
            "difficulty": "hard",
            "category": "creative"
        }
    ],
    "badges": [
        {
            "id": 1,
            "name": "Fallacy Detective",
            "description": "Correctly identify your first logical fallacy",
            "icon": "🕵️",
            "points": 10
        },
        {
            "id": 2,
            "name": "Straw Man Spotter",
            "description": "Correctly identify 5 straw man fallacies",
            "icon": "🎭",
            "points": 25
        },
        {
            "id": 3,
            "name": "Quiz Master",
            "description": "Complete 10 quizzes with 80% accuracy or higher",
            "icon": "🎓",
            "points": 50
        },
        {
            "id": 4,
            "name": "Daily Challenger",
            "description": "Complete 7 daily challenges in a row",
            "icon": "⚡",
            "points": 30
        },
        {
            "id": 5,
            "name": "Logic Legend",
            "description": "Earn 500 total points",
            "icon": "👑",
            "points": 100
        }
    ]
}

print("Logical Fallacy Application Data Structure Complete!")
print(f"Total Fallacies: {len(fallacies_data['logical_fallacies'])}")
print(f"Total Quiz Questions: {len(fallacies_data['quiz_questions'])}")
print(f"Total Daily Challenges: {len(fallacies_data['daily_challenges'])}")
print(f"Total Badges: {len(fallacies_data['badges'])}")
export interface ServiceDetail {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    whatItDoes: string[];
    builtFor: {
        title: string;
        items: string[];
        footer?: string;
    };
    flow: {
        title: string;
        steps: string[];
        footer?: string;
    };
    keyFeatures: string[];
    whyUseIt: string[];
    bestFor: string[];
    comparison: {
        manual: {
            label: string;
            title: string[];
            desc: string;
            items: string[];
        };
        ai: {
            label: string;
            title: string[];
            desc: string;
            items: string[];
        };
    };
    faq: {
        q: string;
        a: string;
    }[];
    animationComponent: string;
    ctaText: string;
}

export const servicesData: Record<string, ServiceDetail> = {
    'call-agent': {
        slug: 'call-agent',
        title: 'AI Call Agent',
        tagline: 'Expert Office Help That Answers Every Single Call',
        description: "JOBBEI’s AI Call Agent is like having a professional receptionist who never sleeps. It answers your phone instantly, talks naturally with your customers, takes down all the job details, and puts the work directly into Jobber for you—so you can stay focused on the job site without missing a single lead.",
        whatItDoes: [
            'Answers your phone instantly, 24/7',
            'Sounds professional and helpful—just like real office staff',
            'Asks customers exactly what they need (repairs, quotes, etc.)',
            'Gathers names, addresses, and service details for you',
            'Figures out which jobs are emergencies and which can wait',
            'Sends every new lead directly into your Jobber account',
        ],
        builtFor: {
            title: 'Made for Home Service Pros Who are Too Busy to Answer',
            items: [
                'New customers asking for quotes or pricing',
                'Emergency calls when you’re already on a job',
                'Scheduling requests while you’re driving or working',
                'After-hours calls that usually go to voicemail',
                'General questions about your service area',
            ],
            footer: 'Your customers will feel like they’re talking to a top-tier office assistant.',
        },
        flow: {
            title: 'How it Works',
            steps: [
                'A customer calls your business number',
                'JOBBEI picks up the phone instantly',
                'JOBBEI gathers the job and property details',
                'The whole conversation is saved for you',
                'A new job or request is created in Jobber',
                'Your customer gets a confirmation text',
            ],
            footer: 'All of this happens without you touching your phone.',
        },
        keyFeatures: [
            '⚡ Instant Answering: No rings, no voicemail, no lost leads',
            '🕒 24/7/365 Coverage: Your office is always open',
            '🎙️ Natural Voice: Sounds like a professional person',
            '🧠 Smart Questions: Knows exactly what to ask for every job',
            '🗂️ Auto Logging: Every detail saved automatically',
            '🔗 Jobber Ready: Pushes jobs straight to your schedule',
        ],
        whyUseIt: [
            'Stop losing jobs to voicemail',
            'No more writing down notes on scraps of paper',
            'Save thousands on office staff and receptionists',
            'Look like a bigger, more professional company',
            'Win more work by replying faster than the competition',
        ],
        bestFor: [
            'Cleaning & Exterior Cleaning companies',
            'Landscaping & Lawn Care pros',
            'HVAC, Plumbers, and Roofing teams',
            'Any pro who is tired of missing calls while working',
        ],
        comparison: {
            manual: {
                label: 'THE OLD MESS',
                title: ['Phones Ringing.', 'No Answers.'],
                desc: "When the phone rings and you're busy, you lose the job. Customers don't leave messages—they call the next guy.",
                items: ['Customers call the next guy', 'Voicemails never get checked', 'You look small and messy']
            },
            ai: {
                label: 'THE JOBBEI WAY',
                title: ['Always Ready.', 'Jobs Booked.'],
                desc: 'JOBBEI answers every call instantly. It talks to your customers and gets all the info so you can win the work.',
                items: ['Every single call answered', 'Job info sent to you instantly', 'Zero cost for extra help']
            }
        },
        faq: [
            { q: "Does the AI Call Agent answer every call?", a: "Yes. The AI Call Agent answers every incoming call instantly, including after-hours and missed calls." },
            { q: "Does the AI sound like a real person?", a: "Yes. The AI uses a natural, human-like voice and speaks professionally, just like a trained office assistant." },
            { q: "What information does the AI collect on calls?", a: "It collects customer name, phone number, service requested, address, urgency, and any additional notes needed for the job." },
            { q: "Can the AI handle estimates and scheduling requests?", a: "Yes. The AI can gather estimate details, schedule callbacks, and flag urgent or high-priority jobs." },
            { q: "What happens after the call ends?", a: "Call details are saved into your CRM, a summary is created, and qualified leads are automatically sent into Jobber." }
        ],
        animationComponent: 'CallAgentIPhone',
        ctaText: 'Get Started Now',
    },
    'chat-agent': {
        slug: 'chat-agent',
        title: 'Website Chat Agent',
        tagline: 'Turn Website Lookers Into Booked Jobs on Autopilot',
        description: "JOBBEI’s Website Chat Agent acts as your online front-desk. It talks to visitors instantly, answers their pricing questions, and collects all their job details—then puts them straight into Jobber so you have a new quote ready to go when you finish your current job.",
        whatItDoes: [
            'Replies to website visitors the second they land',
            'Talks like a helpful pro, not a generic computer bot',
            'Asks all the right questions to qualify the job',
            'Collects phone numbers, addresses, and service needs',
            'Answers pricing and area questions instantly',
            'Pushes ready-to-quote leads directly into Jobber',
        ],
        builtFor: {
            title: 'Built for Serious Home Service Websites',
            items: [
                '“How much for a house wash?”',
                '“Can you come out this Tuesday?”',
                '“Do you do lawn aeration in my area?”',
                '“I need a quote for a new roof”',
                '“I have a plumbing emergency”',
            ],
            footer: 'It gathers exactly the info you need to give a quote without the back-and-forth.',
        },
        flow: {
            title: 'How it Works',
            steps: [
                'A visitor clicks your website chat',
                'JOBBEI greets them and asks how to help',
                'JOBBEI walks them through service questions',
                'Names and addresses are captured safely',
                'All data is saved instantly to your office records',
                'A qualified new lead appears in your Jobber account',
            ],
            footer: 'You just show up and win the job.',
        },
        keyFeatures: [
            '💬 Instant Replies: No more waiting for emails',
            '🧠 Smart Conversations: Guides customers to the finish line',
            '📋 Detailed Intake: Gets all the property info for you',
            '⏱️ Real-Time Wins: Books the job before they leave your site',
            '🗂️ Clean Records: Everything logged and organized',
            '🔗 Jobber Sync: Your schedule stays full automatically',
        ],
        whyUseIt: [
            'Stop losing website visitors who "don\'t want to call"',
            'Beat your competitors by replying in 2 seconds',
            'Get all the property details without calling them back',
            'Save hours of time on the phone every single week',
            'Convert more website traffic into real, paying jobs',
        ],
        bestFor: [
            'Exterior Cleaners & Maintenance pros',
            'Landscapers & Lawn Care businesses',
            'HVAC, Plumbers, and Electricians',
            'Any pro who spends money to get people to their website',
        ],
        comparison: {
            manual: {
                label: 'GHOST TOWN',
                title: ['Lookers.', 'No Bookers.'],
                desc: "People landing on your site just leave if they can't talk to someone. You're wasting your website.",
                items: ['People leave without asking', 'Contact forms stay empty', 'You miss out on quick sales']
            },
            ai: {
                label: 'SALES MACHINE',
                title: ['Instant Help.', 'Easy Quotes.'],
                desc: "JOBBEI catches every visitor and gets their job details while they're still interested.",
                items: ['Replies in 2 seconds', 'Quotes collected while you work', 'Jobs go straight to Jobber']
            }
        },
        faq: [
            { q: "Does the Website Chat Agent respond instantly?", a: "Yes. The chat agent replies instantly to website visitors, even when your team is offline." },
            { q: "Can it handle pricing and service questions?", a: "Yes. It answers common pricing, service, and availability questions and guides visitors toward booking or follow-up." },
            { q: "What information does the chat agent collect?", a: "It captures contact details, service type, property information, and urgency before saving the lead." },
            { q: "What happens if a visitor leaves mid-chat?", a: "Partial conversations are saved, so you still capture the lead information that was provided." },
            { q: "Are chat leads sent to Jobber?", a: "Yes. Qualified chat leads are saved to your CRM and automatically synced into Jobber." }
        ],
        animationComponent: 'ChatAgentAnimation',
        ctaText: 'Get Started Now',
    },
    'sms-faq': {
        slug: 'sms-faq',
        title: 'SMS FAQ Agent',
        tagline: 'Expert Help That Texts Your Customers Back Instantly',
        description: "JOBBEI’s SMS Agent handles the constant pinging of your business phone. It answers common questions about your pricing, services, and availability via text—capturing job details and putting them straight into Jobber so you can finish your work in peace.",
        whatItDoes: [
            'Texts your customers back in seconds',
            'Answers pricing, service, and area questions',
            'Feels like a real person—no robotic "Press 1" menus',
            'Keeps the conversation going until the job is ready to book',
            'Gathers names, photos, and job details automatically',
            'Sends every text lead directly into your Jobber account',
        ],
        builtFor: {
            title: 'Built for Busy Pros Who Get Blasted with Texts',
            items: [
                '“How much for a gutter cleaning?”',
                '“Are you available tomorrow?”',
                '“Do you guys do pressure washing?”',
                '“I have a question about my quote”',
                '“I need to book a follow-up”',
            ],
            footer: 'It keeps your customers happy while you stay on the ladder.',
        },
        flow: {
            title: 'How it Works',
            steps: [
                'A customer texts your business line',
                'JOBBEI replies instantly with expert help',
                'JOBBEI answers their questions and qualifies the job',
                'All details are safely saved to your records',
                'The new lead is pushed straight to Jobber',
                'You get a notification that the work is ready',
            ],
            footer: 'You simply finish your job and check your schedule.',
        },
        keyFeatures: [
            '📲 Instant Texting: Never leave a client on "read"',
            '🤝 Friendly Tone: Feels like a real office assistant',
            '🧾 Pricing Expert: Handles all your basic rate questions',
            '🔁 Infinite Patience: Manages multiple texts at once',
            '🗂️ Auto Records: No more lost text threads',
            '🔗 Jobber Connected: Moves leads to your CRM and Jobber',
        ],
        whyUseIt: [
            'Stop texting while you\'re trying to work',
            'Give customers info instantly, even when you\'re busy',
            'Filter out the "tire kickers" automatically',
            'Keep your business and personal texts separate',
            'Win the job by being the fastest to reply via SMS',
        ],
        bestFor: [
            'Home Service pros who get constant texts',
            'Cleaning & Landscape companies with quote requests',
            'Service teams who work in noisy environments (mowers, vacuums)',
            'Any business that wants to offer 24/7 text support',
        ],
        comparison: {
            manual: {
                label: 'TEXT CHAOS',
                title: ['Left on Read.', 'Busy Hands.'],
                desc: "Trying to text back while you're dirty and working is impossible. You forget, and they move on.",
                items: ['Forgetting to text back', 'Typing while you\'re busy', 'Customers feel ignored']
            },
            ai: {
                label: 'TEXT MAGIC',
                title: ['No Waiting.', 'Booked Tight.'],
                desc: "JOBBEI texts them back instantly while you're on a ladder. No more \"left on read\" or lost jobs.",
                items: ['0-second reply time', 'Professional text help', '100% happy customers']
            }
        },
        faq: [
            { q: "Does the SMS agent reply instantly to customer texts?", a: "Yes. The SMS agent responds in seconds, just like a real office assistant." },
            { q: "Can it answer pricing and service questions?", a: "Yes. It handles common questions about services, pricing ranges, service areas, and availability." },
            { q: "Does it feel like a real human texting?", a: "Yes. Messages are written in a natural, conversational tone, not robotic replies." },
            { q: "What happens if a customer asks something complex?", a: "The AI gathers details and either continues the conversation or flags the lead for follow-up." },
            { q: "Are text conversations logged?", a: "Yes. All SMS conversations are saved into your CRM and synced into Jobber when qualified." }
        ],
        animationComponent: 'SMSAgentAnimation',
        ctaText: 'Get Started Now',
    },
    'email-marketing': {
        slug: 'email-marketing',
        title: 'Email Marketing Help',
        tagline: 'Get More Repeat Work From Your Past Clients on Autopilot',
        description: "JOBBEI’s Email Help uses your existing customer list from Jobber to bring you more work. It automatically sends professional, personalized emails to follow up on quotes and remind past clients to book you again for the next season.",
        whatItDoes: [
            'Sends follow-up emails to win more quotes',
            'Reminds past clients to book you for seasonal work',
            'Writes professional emails that actually get read',
            'Uses your actual job history to stay relevant',
            'Re-engages old customers who haven\'t called in a while',
            'Brings you more jobs without you sending a single email',
        ],
        builtFor: {
            title: 'Built to Fill Your Schedule with Repeat Jobs',
            items: [
                'Following up on estimates that haven\'t been booked',
                'Reminding folks to book gutter cleaning in the Fall',
                'Offering seasonal deals for pressure washing or lawns',
                'Maintenance reminders for HVAC and plumbing',
                'Bringing back "ghosted" customers automatically',
            ],
            footer: 'Your emails will look professional and help you win more repeat work.',
        },
        flow: {
            title: 'How it Works',
            steps: [
                'JOBBEI looks at your Jobber/CRM list',
                'JOBBEI writes a personal email for each client',
                'Emails are sent out based on the right season',
                'Customers reply or book directly from the email',
                'You get new bookings on your schedule',
                'JOBBEI tracks how much money each campaign makes',
                'Zero writing. Zero clicking. Zero list management.',
            ],
            footer: 'Zero writing. Zero clicking. Zero list management.',
        },
        keyFeatures: [
            '📧 Automatic Writing: No more "writer\'s block"',
            '🎯 Seasonal Timing: Send the right offer at the right time',
            '🧠 Smart Data Use: Knows what they booked last time',
            '📆 Hands-Free Schedule: Runs while you work',
            '📱 Mobile Friendly: Looks great on every phone',
            '📈 Profit Tracking: See exactly how many jobs were won',
        ],
        whyUseIt: [
            'Bring back customers you haven\'t seen in a year',
            'Win more jobs by following up on old estimates',
            'Keep your crews busy during the slow season',
            'Spend zero time on marketing while growing your sales',
            'Make more money from the customers you already have',
        ],
        bestFor: [
            'Cleaning & Exterior service companies',
            'Landscaping & Lawn Care businesses',
            'HVAC, Plumbers, and Roofing teams',
            'Any pro who wants more repeat business from past clients',
        ],
        comparison: {
            manual: {
                label: 'DORMANT LIST',
                title: ['Past Clients.', 'Forgotten Work.'],
                desc: "Your old customer list is a goldmine, but you're too busy to message them one by one.",
                items: ['Client list just sits there', 'Writing emails takes too long', 'You miss that seasonal work']
            },
            ai: {
                label: 'REVENUE PRO',
                title: ['Repeat Work.', 'Steady Paydays.'],
                desc: 'JOBBEI sends the right message at the right time to bring back your old customers for more work.',
                items: ['Automated seasonal reminders', 'Expert emails sent for you', 'Steady stream of new jobs']
            }
        },
        faq: [
            { q: "Does JOBBEI write the emails automatically?", a: "Yes. JOBBEI uses AI to write professional, personalized emails automatically." },
            { q: "What types of emails does JOBBEI send?", a: "Estimate follow-ups, seasonal service promotions, repeat service reminders, and customer reactivation emails." },
            { q: "Can emails be personalized?", a: "Yes. Emails are personalized using customer name, location, service history, and season." },
            { q: "How often are emails sent?", a: "Email timing and frequency are configurable, so customers are not spammed." },
            { q: "Does this help bring back old customers?", a: "Yes. Email automation is designed specifically to drive repeat bookings from past customers." }
        ],
        animationComponent: 'EmailAgentAnimation',
        ctaText: 'Get Started Now',
    },
    'sms-marketing': {
        slug: 'sms-marketing',
        title: 'SMS Marketing Help',
        tagline: 'Fill Your Schedule Fast With Automated Text Promotions',
        description: "JOBBEI’s SMS Help turns your past customer list into a booking engine. It sends timely, personalized texts to past clients to remind them of seasonal services and follow up on old jobs—bringing you more bookings in minutes, not days.",
        whatItDoes: [
            'Sends automated, professional text offers to past clients',
            'Promotes seasonal services like gutter or window cleaning',
            'Personalizes every text with the customer\'s name and history',
            'Brings back old customers who haven\'t booked lately',
            'Drives instant replies and bookings with direct messaging',
            'Makes your marketing effortless and highly effective',
        ],
        builtFor: {
            title: 'Built to Fill Your Calendar in Seconds',
            items: [
                'Sending "Spring Cleaning" deals to your whole list',
                'Re-booking last year\'s lawn or roof clients',
                'Offering "Flash Deals" to fill gaps in your schedule',
                'Maintenance and yearly service text reminders',
                'Quickly reactivating your database during slow months',
            ],
            footer: 'Texts are short, helpful, and effective—never spammy.',
        },
        flow: {
            title: 'How it Works',
            steps: [
                'JOBBEI looks at your Jobber/CRM customer data',
                'JOBBEI picks the best message for each customer',
                'Text offers are sent automatically at the right time',
                'Customers reply or book a job instantly',
                'New work is pinned to your Jobber account',
                'You get more jobs with zero outbound effort',
                'No lists. No typing. No manual follow-ups.',
            ],
            footer: 'No lists. No typing. No manual follow-ups.',
        },
        keyFeatures: [
            '📢 Automated Texting: Reach everyone in minutes',
            '🎯 Targeted Offers: Only send to the right people',
            '🧠 History Aware: Remembers what they booked before',
            '⏱️ Instant Results: Texts get read 5x faster than emails',
            '🚫 Built-in Safety: Automatically manages "Stop" requests',
            '📈 ROI Growth: See the real money coming in',
        ],
        whyUseIt: [
            'Get jobs faster than any other marketing method',
            'Keep your schedule full all year round',
            'Reach customers where they actually look—their phone',
            'Save hours of manual follow-ups and calls',
            'Convert old clients into high-value repeat work',
        ],
        bestFor: [
            'Cleaning & Exterior service companies',
            'Landscaping & Lawn Care businesses',
            'HVAC, Plumbers, and Roofing teams',
            'Any pro with a list of past clients they want to re-book',
        ],
        comparison: {
            manual: {
                label: 'SPAMMY MESS',
                title: ['Blocked.', 'No Replies.'],
                desc: "Blasting generic texts from your phone gets you blocked and looks like a scam. It just doesn't work.",
                items: ['Mass texts look like spam', 'You get blocked and banned', 'Waste of time and effort']
            },
            ai: {
                label: 'PRECISION WINS',
                title: ['Trusted.', 'Ready to Work.'],
                desc: 'JOBBEI sends helpful, 1-to-1 texts that customers actually want to read and reply to.',
                items: ['100% safe and trusted', 'Messages they want to read', 'Instant bookings in minutes']
            }
        },
        faq: [
            { q: "Does JOBBEI send automated promotional texts?", a: "Yes. JOBBEI sends personalized promotional and reminder SMS messages automatically." },
            { q: "Are SMS messages compliant?", a: "Yes. All messages include opt-out options and follow SMS compliance rules." },
            { q: "What types of SMS campaigns can be sent?", a: "Seasonal offers, service reminders, slow-season promotions, and rebooking campaigns." },
            { q: "Can SMS campaigns be scheduled?", a: "Yes. Campaigns can be scheduled or triggered automatically based on customer data." },
            { q: "Does SMS marketing increase bookings?", a: "Yes. SMS has very high open rates and helps bring customers back faster than email." }
        ],
        animationComponent: 'SMSMarketingAnimation',
        ctaText: 'Get Started Now',
    },
};

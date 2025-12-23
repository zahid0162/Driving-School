
import { Question, TrafficSign, Step } from './types';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Absher Account & Appointment",
    description: "The first step is to have a valid Absher account and book an appointment for the driving school.",
    requirements: [
      "Valid Iqama or National ID",
      "Active Absher account",
      "Select your preferred Driving School location"
    ],
    actionLink: "https://www.absher.sa/",
    icon: "🔑"
  },
  {
    id: 2,
    title: "Medical Checkup",
    description: "Visit an approved hospital or clinic for the eye and blood test.",
    requirements: [
      "Blood Group Test",
      "Eye Examination",
      "Health status must be 'Fit' in the Efada system"
    ],
    icon: "🏥"
  },
  {
    id: 3,
    title: "School Registration",
    description: "Head to the driving school on your appointment date to complete the registration.",
    requirements: [
      "Copy of Iqama/ID",
      "Medical report (linked to Efada)",
      "Payment of school fees"
    ],
    icon: "📝"
  },
  {
    id: 4,
    title: "Theoretical Training & Computer Test",
    description: "Attend classroom sessions focusing on traffic laws and signs, followed by a computer-based exam.",
    requirements: [
      "Attendance of all theory classes",
      "Passing the Computer Test (minimum score varies)"
    ],
    icon: "💻"
  },
  {
    id: 5,
    title: "Practical Training (Yard & Road)",
    description: "Get behind the wheel with an instructor to learn basic maneuvers and road safety.",
    requirements: [
      "Parking (Reverse, Parallel)",
      "Slope Control",
      "General Road Driving"
    ],
    icon: "🚗"
  },
  {
    id: 6,
    title: "Final Road Test",
    description: "The ultimate evaluation by a traffic officer to determine your driving capability.",
    requirements: [
      "Demonstrate confidence",
      "Perfect compliance with traffic signs",
      "Smooth control of the vehicle"
    ],
    icon: "🏁"
  }
];

export const TRAFFIC_SIGNS: TrafficSign[] = [
  {
    id: 1,
    name: "Stop",
    category: "Regulatory",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Saudi_Arabia_road_sign_Stop.svg/1024px-Saudi_Arabia_road_sign_Stop.svg.png",
    meaning: "Complete halt before the line. Give priority to main road traffic."
  },
  {
    id: 2,
    name: "Yield / Give Way",
    category: "Regulatory",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Saudi_Arabia_road_sign_Give_Way.svg/1024px-Saudi_Arabia_road_sign_Give_Way.svg.png",
    meaning: "Slow down and prepare to stop if necessary to give way to cross-traffic."
  },
  {
    id: 3,
    name: "No Entry",
    category: "Prohibitory",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Saudi_Arabia_road_sign_No_Entry.svg/1024px-Saudi_Arabia_road_sign_No_Entry.svg.png",
    meaning: "Prohibits all vehicles from entering the road from this direction."
  },
  {
    id: 4,
    name: "Maximum Speed 80",
    category: "Prohibitory",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Saudi_Arabia_road_sign_80_km_h_limit.svg/1024px-Saudi_Arabia_road_sign_80_km_h_limit.svg.png",
    meaning: "The maximum speed allowed is 80 km/h."
  },
  {
    id: 5,
    name: "Roundabout",
    category: "Warning",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Saudi_Arabia_road_sign_Roundabout.svg/1024px-Saudi_Arabia_road_sign_Roundabout.svg.png",
    meaning: "Approaching a circular intersection. Priority to those inside the circle."
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "When approaching a roundabout, who has the priority?",
    options: ["Vehicles entering the roundabout", "Vehicles already inside the roundabout", "The fastest vehicle", "Vehicles on the right"],
    correctAnswer: 1,
    explanation: "According to Saudi Traffic Law, vehicles already circulating inside the roundabout have the right of way.",
    category: "Laws"
  },
  {
    id: 2,
    question: "What should you do when you see a flashing yellow light at an intersection?",
    options: ["Stop and wait for it to turn green", "Speed up to cross quickly", "Slow down and proceed with caution", "Treat it as a stop sign"],
    correctAnswer: 2,
    explanation: "A flashing yellow light warns drivers to proceed with caution and be prepared to yield.",
    category: "Safety"
  },
  {
    id: 3,
    question: "If your vehicle breaks down on a highway, what is the safest first action?",
    options: ["Leave the car in the middle lane", "Stay inside without lights", "Move to the shoulder and turn on hazard lights", "Try to fix it while in traffic"],
    correctAnswer: 2,
    explanation: "Moving to the hard shoulder and turning on hazard lights ensures visibility and safety for you and other drivers.",
    category: "Safety"
  },
  {
    id: 4,
    question: "What does a solid white line between lanes indicate?",
    options: ["You can change lanes freely", "Lane changing is prohibited", "Parking is allowed here", "Speed limit area"],
    correctAnswer: 1,
    explanation: "A solid white line indicates that lane changing is dangerous or prohibited in that specific section of the road.",
    category: "Laws"
  },
  {
    id: 5,
    question: "At what distance should you follow the vehicle in front (Safe Distance)?",
    options: ["5 meters", "2 seconds rule", "10 meters", "When you can see their bumper"],
    correctAnswer: 1,
    explanation: "The '2-second rule' is the standard recommended following distance to allow enough time to react in case of sudden braking.",
    category: "Safety"
  },
  {
    id: 6,
    question: "Using a mobile phone while driving is...",
    options: ["Allowed if using headphones", "Allowed at red lights", "A serious traffic violation", "Only allowed for navigation"],
    correctAnswer: 2,
    explanation: "Using a handheld mobile phone while driving is a major traffic violation in Saudi Arabia due to high risk of distraction.",
    category: "Laws"
  }
];

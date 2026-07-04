export const projects = [
  {
    name: 'NutriSci',
    tagline: 'SwEATch to better',
    type: 'Team Project',
    description:
      'A desktop app built with Java Swing and MySQL to help users track meals, view nutritional breakdowns, set goals, suggest food swaps, and visualize intake against Canada\'s Food Guide and recommended dietary intake.',
    team: ['Veerman Kalra', 'Sachin Kumar', 'Divyansh Babbar', 'Yogesh Sharma'],
    features: [
      'User profile creation, login, and dashboard flow',
      'Meal logging with dynamic CNF database lookups',
      'Nutrition goals with ingredient swap suggestions',
      'Side-by-side swap comparison and batch swap application',
      'Daily nutrient charts and CFG-based meal analysis with JFreeChart',
    ],
    tags: ['Java Swing', 'MySQL', 'JFreeChart', 'CNF Database'],
    github: 'https://github.com/SachinKumar-York/YANKEES-EECS-3311',
  },
  {
    name: 'Happy Hour in My City',
    type: 'Internship',
    description:
      'Internship project where I implemented authentication using Supabase and contributed to additional product features across the application.',
    tags: ['Supabase', 'Authentication', 'Web Development'],
    github: '',
    url: 'https://www.happyhourinmycity.com',
    image: '/happy-hour.png',
  },
  {
    name: 'Souvenote',
    type: 'Internship',
    description:
      'Internship project focused on an AI-powered greeting card experience, helping users generate personalized messages and designs for custom cards.',
    tags: ['AI Integration', 'Web App', 'Generative AI'],
    github: '',
  },
  {
    name: 'Connect2Talent Network',
    type: 'Internship',
    description:
      'Internship website project connecting talent with opportunities, where I worked on front-end and product features as part of the development team.',
    tags: ['Web Development', 'Team Collaboration', 'Product Features'],
    github: '',
    image: '/connect2talent.png',
  },
  {
    name: 'Lung Cancer Detection',
    type: 'Group Project',
    description:
      'School group machine learning project using a clinical dataset to compare classification models and evaluate which approach performed best. Our team built Colab notebooks with logistic regression, random forest, and XGBoost, following full ML workflow from preprocessing to reporting.',
    highlights: [
      'Compared multiple models on the same dataset',
      'Applied preprocessing, training, and evaluation in Google Colab',
      'Documented findings in a group report on model efficiency',
    ],
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Google Colab', 'Logistic Regression', 'Random Forest', 'XGBoost'],
    github: '',
    showcase: 'Academic notebook project',
  },
];

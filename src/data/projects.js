// src/data/projects.js

export const projectData = [
  {
    id: "pelindo-ship-analytics",
    title: "Ship Visit Analytics Dashboard",
    role: "Data Analyst Intern",
    period: "Jan 2025 - Jun 2025",
    source: "PT Pelabuhan Indonesia III Sub Regional Jawa",
    description: "Built Lensa Lintas Laut, a Streamlit app for analyzing ship visit data around East Java ports. The app supports Excel/CSV uploads, terminal filters, monthly and yearly trend views, month-to-month comparison, forecasting, and export tools for easier reporting.",
    techStack: ["Python", "Streamlit", "Pandas", "Statsmodels", "Data Visualization"]
  },
  {
    id: "replon-melon-dashboard",
    title: "Republik Melon Smart Farming Dashboard",
    role: "UI Designer & Front-End Developer",
    period: "Jan 2024 - Dec 2024",
    source: "Lecturer research collaboration in Wates, Blitar",
    description: "Designed and developed a web dashboard for greenhouse monitoring. The system connects a Next.js frontend with a Flask API and Supabase data, showing sensor data, production records, outlier checks, and short-term predictions for temperature, humidity, lumen, and soil moisture.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Flask", "Supabase", "ApexCharts"]
  },
  {
    id: "career-path-recommender",
    title: "Career Path Recommender for Data Professionals",
    role: "Data Scientist & Developer",
    period: "2026",
    source: "Semester 7 recommendation system project",
    description: "Created a Streamlit recommender that uses Kaggle Survey data from 25,000+ data professionals to suggest personalized learning paths. It combines content-based filtering, collaborative filtering, contextual pre-filtering, and a cold-start starter pack for new users.",
    techStack: ["Python", "Streamlit", "Scikit-learn", "Recommendation System", "Kaggle Survey"]
  },
  {
    id: "jakarta-air-quality-recommender",
    title: "Jakarta Air Quality Hybrid Recommender",
    role: "Machine Learning Developer",
    period: "2026",
    source: "Cloud computing project",
    description: "Built a proactive air-quality recommendation app for Jakarta. The project combines content-based filtering, collaborative filtering, and rule-based fusion to predict unhealthy air conditions, highlight PM2.5 risks, and generate action cards for public and policy responses.",
    techStack: ["Python", "Streamlit", "Scikit-learn", "Hybrid Recommender", "Air Quality Data"]
  },
  {
    id: "gencvats",
    title: "GenCVATS Pro",
    role: "Full-Stack Developer",
    period: "2026",
    source: "Final project",
    description: "Built an ATS-friendly CV builder with manual input, certificate and diploma OCR, AI-powered CV polishing, DOCX generation, and PDF preview/export. The backend uses FastAPI while the app logic also includes a Streamlit prototype.",
    techStack: ["FastAPI", "Streamlit", "Python", "OCR", "LLM", "DOCX"]
  },
  {
    id: "advanced-stock-dashboard",
    title: "Advanced Stock Market Dashboard",
    role: "Data App Developer",
    period: "2026",
    source: "Dashboard analytics coursework",
    description: "Developed a Streamlit dashboard for stock, ETF, index, and crypto analysis. It pulls market data with yfinance, supports watchlists, candlestick charts, moving averages, RSI, MACD, Bollinger Bands, comparison views, and CSV export.",
    techStack: ["Python", "Streamlit", "Plotly", "yfinance", "Pandas"]
  },
  {
    id: "context-recognition-search",
    title: "News Search with Context Recognition",
    role: "Machine Learning Developer",
    period: "2026",
    source: "Model learning project",
    description: "Built a small information retrieval app that classifies a search query into a news context first, then searches only inside the relevant subspace. It uses TF-IDF, LinearSVC, cosine similarity, and a Streamlit interface for the top article results.",
    techStack: ["Python", "Streamlit", "TF-IDF", "LinearSVC", "Cosine Similarity"]
  },
  {
    id: "vehicle-emission-classification",
    title: "Vehicle Emission Classification",
    role: "Data Scientist",
    period: "Jan 2024 - Jun 2024",
    source: "CV project entry",
    description: "Explored vehicle data and built a machine learning model to classify emissions by car type. The project focused on spotting emission patterns across different vehicles and turning them into a practical classification workflow.",
    techStack: ["Python", "Machine Learning", "Data Mining", "Classification"]
  },
  {
    id: "happiness-classification",
    title: "Happiness Level Classification App",
    role: "Data Scientist",
    period: "Apr 2024 - May 2024",
    source: "CV project entry",
    description: "Created a Streamlit app for analyzing and classifying happiness levels. The model workflow used PyCaret to speed up model comparison and turn the prediction process into a simple dashboard experience.",
    techStack: ["Python", "Streamlit", "PyCaret", "Classification"]
  },
  {
    id: "east-java-hdi-tableau",
    title: "East Java Human Development Index Dashboard",
    role: "Data Visualization Designer",
    period: "Nov 2023",
    source: "CV project entry",
    description: "Designed a Tableau report that explains health, education, and economic progress across East Java. The goal was to turn government statistics into a clearer visual story for quick comparison between regions.",
    techStack: ["Tableau", "Data Visualization", "Public Statistics", "Dashboard Design"]
  },
  {
    id: "california-waste-analysis",
    title: "California Waste Production Analysis",
    role: "Data Scientist",
    period: "Mar 2023 - May 2023",
    source: "CV project entry",
    description: "Analyzed how population may influence waste production in California using discriminant analysis. The same portfolio entry also included an Indonesia poverty dashboard built in Tableau.",
    techStack: ["R", "Tableau", "Statistical Analysis", "Discriminant Analysis"]
  }
];

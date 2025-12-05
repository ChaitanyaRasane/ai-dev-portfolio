export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-conversational-ai-with-rasa",
    title: "Building Conversational AI with RASA: A Complete Guide",
    excerpt: "Learn how to build intelligent chatbots using RASA framework, from NLU training to deployment strategies.",
    content: `
# Building Conversational AI with RASA

Conversational AI has revolutionized how businesses interact with customers. In this comprehensive guide, I'll walk you through building a production-ready chatbot using RASA.

## Why RASA?

RASA is an open-source machine learning framework for building contextual AI assistants. Unlike cloud-based solutions, RASA gives you:

- **Full control** over your data and models
- **Customization** at every level
- **On-premise deployment** options

## Getting Started

First, install RASA:

\`\`\`bash
pip install rasa
rasa init
\`\`\`

## Training Your NLU Model

The NLU (Natural Language Understanding) component is the brain of your chatbot. Here's a sample training data:

\`\`\`yaml
nlu:
- intent: greet
  examples: |
    - hey
    - hello
    - hi there
    - good morning
\`\`\`

## Building Stories

Stories define conversation flows:

\`\`\`yaml
stories:
- story: happy path
  steps:
  - intent: greet
  - action: utter_greet
\`\`\`

## Conclusion

RASA provides a powerful foundation for building conversational AI. With proper training data and thoughtful design, you can create assistants that truly understand user intent.
    `,
    date: "2024-11-15",
    readTime: "8 min read",
    tags: ["AI", "NLP", "RASA", "Python"]
  },
  {
    id: "python-ml-pipelines-best-practices",
    title: "Python ML Pipelines: Best Practices for Production",
    excerpt: "Discover how to build robust, scalable machine learning pipelines in Python that are ready for production.",
    content: `
# Python ML Pipelines: Best Practices

Building ML models is one thing; deploying them reliably is another. Here's how to create production-ready pipelines.

## The Pipeline Architecture

A good ML pipeline consists of:

1. **Data Ingestion** - Collecting and validating input data
2. **Preprocessing** - Cleaning and transforming features
3. **Model Training** - Training and validation
4. **Evaluation** - Metrics and monitoring
5. **Deployment** - Serving predictions

## Using Scikit-learn Pipelines

\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier())
])
\`\`\`

## Error Handling

Always implement robust error handling:

\`\`\`python
try:
    predictions = model.predict(data)
except Exception as e:
    logger.error(f"Prediction failed: {e}")
    raise PredictionError(str(e))
\`\`\`

## Monitoring

Track model performance with metrics:
- Prediction latency
- Model drift
- Feature distribution changes

## Conclusion

A well-designed pipeline ensures your models perform reliably in production.
    `,
    date: "2024-10-28",
    readTime: "6 min read",
    tags: ["Python", "Machine Learning", "DevOps"]
  },
  {
    id: "face-recognition-deep-learning",
    title: "Building a Face Recognition System with Deep Learning",
    excerpt: "A step-by-step tutorial on creating an accurate face recognition system using Python and deep learning.",
    content: `
# Face Recognition with Deep Learning

Face recognition technology has become increasingly accurate thanks to deep learning. Let's build one from scratch.

## Understanding Face Recognition

Face recognition involves two main steps:
1. **Face Detection** - Finding faces in an image
2. **Face Encoding** - Converting faces to numerical representations

## Setting Up

\`\`\`python
import face_recognition
import cv2
import numpy as np
\`\`\`

## Encoding Known Faces

\`\`\`python
known_image = face_recognition.load_image_file("person.jpg")
known_encoding = face_recognition.face_encodings(known_image)[0]
\`\`\`

## Real-time Recognition

\`\`\`python
video_capture = cv2.VideoCapture(0)

while True:
    ret, frame = video_capture.read()
    face_locations = face_recognition.face_locations(frame)
    face_encodings = face_recognition.face_encodings(frame, face_locations)
    
    for encoding in face_encodings:
        matches = face_recognition.compare_faces([known_encoding], encoding)
        if True in matches:
            print("Match found!")
\`\`\`

## Accuracy Improvements

- Use multiple images per person
- Implement proper lighting normalization
- Add liveness detection to prevent spoofing

## Conclusion

Face recognition with deep learning is powerful and accessible with modern libraries.
    `,
    date: "2024-09-12",
    readTime: "7 min read",
    tags: ["Deep Learning", "Computer Vision", "Python"]
  },
  {
    id: "flask-api-design-patterns",
    title: "Flask API Design Patterns for Scalable Applications",
    excerpt: "Learn essential Flask patterns for building maintainable and scalable REST APIs.",
    content: `
# Flask API Design Patterns

Flask's flexibility is both a blessing and a curse. Here are patterns I've found essential for scalable APIs.

## Application Factory Pattern

\`\`\`python
def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    from .api import api_bp
    app.register_blueprint(api_bp, url_prefix='/api/v1')
    
    return app
\`\`\`

## Blueprint Organization

Organize your API by resource:

\`\`\`
api/
├── __init__.py
├── users/
│   ├── routes.py
│   └── schemas.py
└── products/
    ├── routes.py
    └── schemas.py
\`\`\`

## Request Validation

Use Marshmallow for validation:

\`\`\`python
class UserSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True, load_only=True)
\`\`\`

## Error Handling

Centralized error handling:

\`\`\`python
@app.errorhandler(ValidationError)
def handle_validation_error(e):
    return jsonify({"errors": e.messages}), 400
\`\`\`

## Conclusion

These patterns will help you build Flask APIs that scale with your needs.
    `,
    date: "2024-08-20",
    readTime: "5 min read",
    tags: ["Flask", "Python", "API", "Backend"]
  }
];

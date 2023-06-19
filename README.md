# ImpressionAI

ImpressionAI is a full-stack text-to-image generative AI application that allows users to generate custom impressionist paintings in seconds. This project is my submission to the AI Genesis Hackathon under the _Visual Art Using Generative AI_ category. The goal of this project is to develop an AI algorithm that accurately interprets and translate human instructions into complex impressionist visual art.

## Features

- Generate custom impressionist paintings based on user-provided text instructions.
- Randomly select a famous impressionist artist whose
- Render the generated painting result and provide sharing options.

## Repository Structure

This repository consists of two main directories:

1. `frontend`: Contains the React/TypeScript code for the frontend user interface.
2. `backend`: Contains the Python Flask REST API code using the Huggingface Stable Diffusion model.

The project structure is organized as follows:

```
ImpressionAI/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── ...
│   ├── package.json
│   ├── ...
│   └── README.md
├── backend/
│   ├── app.py
│   ├── ...
│   ├── requirements.txt
│   └── README.md
├── README.md
└── ...
```

## Installation and Setup

To set up the ImpressionAI application, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/ImpressionAI.git`.
2. Navigate to the `frontend` directory: `cd ImpressionAI/frontend`.
3. Install the frontend dependencies: `npm install`.
4. Start the frontend development server: `npm start`.
5. Open a new terminal and navigate to the `backend` directory: `cd ../backend`.
6. Create a virtual environment (optional but recommended): `python3 -m venv venv`.
7. Activate the virtual environment: `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows PowerShell).
8. Install the backend dependencies: `pip install -r requirements.txt`.
9. Start the backend server: `python app.py`.
10. Open your web browser and visit `http://localhost:3000` to access the ImpressionAI user interface.

Note: Make sure you have Python, Node.js, and npm installed on your system.

## Hackathon Submission

ImpressionAI is my submission to the AI Genesis Hackathon under the Visual art using generative AI category. It addresses the problem statement by developing AI algorithms that accurately interpret and translate human instructions into complex visual art. The application allows users to generate custom impressionist paintings based on their text instructions and provides a user-friendly interface to interact with the AI system.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The AI Genesis Hackathon organizers for providing the platform to showcase and explore the potential of

 AI in the field of visual art.
- The Huggingface team for their Stable Diffusion model and open-source contributions.
- The React and Flask communities for their excellent libraries and resources.

## Contact

For any inquiries or feedback regarding ImpressionAI, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).
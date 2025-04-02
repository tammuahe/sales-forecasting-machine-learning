# Use an official Python runtime
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy the backend code
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose the backend API port (adjust if using a different framework)
EXPOSE 8000

# Run the backend server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

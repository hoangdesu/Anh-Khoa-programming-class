import google.generativeai as genai
import PIL.Image

genai.configure(api_key="AIzaSyAKl6HV8W78e7qFlne1bMqMa6C4K05teeE")
model = genai.GenerativeModel("gemini-1.5-flash")

print('uploading document to gemini...')
# my_file = genai.upload_file("HoangNguyen_Resume_Oct2022.pdf")
my_file = genai.upload_file('podcast.mp3')

print('document uploaded. Generating content...')

# '"Give me a summary of this pdf file."'

question = input('What is your question about this document: ')
response = model.generate_content([question, my_file])
print(response.text)

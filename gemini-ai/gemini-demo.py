import google.generativeai as genai
import PIL.Image

genai.configure(api_key="AIzaSyAKl6HV8W78e7qFlne1bMqMa6C4K05teeE")
model = genai.GenerativeModel("gemini-1.5-flash")


# question = input('Enter question: ')
# response = model.generate_content(question)
# print(response.text)


# Chatbot


# chat_session = model.start_chat()



# while True:
#     print('\n')
#     print('-' * 20, end="")
#     question = input('\nEnter question: ')
#     response = chat_session.send_message(question, stream=True)
    
#     print('> 🤖: ', end="")
#     for chunk in response:
#         print(chunk.text, end="")


# while True:


image = PIL.Image.open('1.jpg')

response = model.generate_content(['Estimate the price of this car in Vietnam in 2024', image], stream=True)

# print(response.text)

for chunk in response:
    print(chunk.text, end="")
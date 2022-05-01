import os
import time

from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

from webdriver_manager.chrome import ChromeDriverManager

import requests

import sys

options = Options()
# options.add_argument("--headless")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)



if not os.path.exists('imgs'):
    os.makedirs('imgs')

sleep_time = 0.5

time.sleep(2)

url = sys.argv[1]
name = sys.argv[2:]

driver.get(url)
time.sleep(5)


first_url = driver.current_url
current_url = ''
img_id = 0

print("Starting scrapping...")
img_elements = driver.find_elements(by=By.TAG_NAME, value="img")

img_dict = {}
for element in img_elements:
  size = element.size['height'] * element.size['width']
  if size > 10000:
    img_dict[element.get_attribute("src")] = size

print({
  'name': ' '.join(name),
  'url': url,
  'imgs': list(img_dict.keys())
})

# # Save images
# img_id = 0
# for img_src in img_dict:
#   with open(f'imgs/{img_id}.png', 'wb') as img_file:
#     img_file.write(requests.get(img_src).content)
#   img_id += 1

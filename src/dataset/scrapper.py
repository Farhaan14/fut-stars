from bs4 import BeautifulSoup
import requests
import csv

with open('data.csv', 'r') as infile:
  reader = csv.DictReader(infile)
  data = {}
  for row in reader:
    for header, value in row.items():
      try:
        data[header].append(value)
      except KeyError:
        data[header] = [value]

url = data['url']


with open('url_check.csv', mode='w', encoding="utf-8", newline='') as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    csv_writer.writerow(['Image', 'Club_Flag', 'Country_Flag'])

    images = []
    club_flags = []
    country_flags = []

    for x in url:
        r = requests.get(x)
        htmlContent = r.content
        soup = BeautifulSoup(htmlContent, 'html.parser')

        div = soup.find('div', class_='card-20-face-inner')

        if div is None:
            images.append(div)
        else:
            img = div.find('img').get('src')
            img = "https://www.futwiz.com" + img
            images.append(img)

        div = soup.find('div', class_='card-20-badge')

        if div is None:
            images.append(div)
        else:
            img = div.find('img').get('src')
            img = "https://www.futwiz.com" + img
            club_flags.append(img)

        div = soup.find('div', class_='card-20-flag')

        if div is None:
            images.append(div)
        else:
            img = div.find('img').get('src')
            img = "https://www.futwiz.com" + img
            country_flags.append(img)


    for i in range(len(url)):
        csv_writer.writerow([images[i], club_flags[i], country_flags[i]])

csv_file.close()
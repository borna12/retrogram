from bs4 import BeautifulSoup
import xlsxwriter
import os, glob
adresa="/".join(os.getcwd().split(os.sep))


i=2

naslov_hr=""
naslov_eng=""
autor=""

with open("retrogram-kasic-v13.xml", 'r', encoding='utf8') as f:
    file = f.read()
        # 'xml' is the parser used. For html files, which BeautifulSoup is typically used for, it would be 'html.parser'.
soup = BeautifulSoup(file, 'xml')
forms = soup.findAll("fileDesc")
for form in forms:
    orth=form.find('titleStmt')
    try:
        hr=form.find("title", {"xml:lang" : "hr"}) #pos['corresp']
        naslov_hr=hr.text.strip()
    except:
        naslov_hr=""
    try:
        eng=form.find("title", {"xml:lang" : "en"}) #pos['corresp']
        naslov_eng=eng.text.strip()
    except:
        naslov_eng=""
    try:
        ime=form.find("author").find("forename") #pos['corresp']
        prezime=form.find("author").find("surname")
        autor=ime.text.strip()+" "+ prezime.text.strip()
    except:
        autor=""
    try:
        ime=form.find("author").find("forename") #pos['corresp']
        prezime=form.find("author").find("surname")
        autor=ime.text.strip()+" "+ prezime.text.strip()
    except:
        autor=""
from bs4 import BeautifulSoup
import xlsxwriter

workbook = xlsxwriter.Workbook('retrogram.xlsx')
worksheet = workbook.add_worksheet()
worksheet.write('A1', 'Orth')
worksheet.write('B1', 'Pos')
worksheet.write('C1', 'VerbType')
worksheet.write('D1', 'Participle')
worksheet.write('E1', 'Gender')
worksheet.write('F1', 'PronounType')
worksheet.write('G1', 'Number')
worksheet.write('H1', 'Case')
worksheet.write('I1', 'inflectionType')
worksheet.write('J1', 'animacy')
worksheet.write('K1', 'person')
worksheet.write('L1', 'adjectiveType')
worksheet.write('M1', 'numeralType')
worksheet.write('N1', 'tense')
worksheet.write('O1', 'tenseType')
worksheet.write('P1', 'voice')
worksheet.write('Q1', 'nounType')
worksheet.write('R1', 'Fajl')

fajlovi=['retrogram-appendini-v11-final29.9.2022.xml', 'retrogram-della_bella-v12 final 27.9.2022.xml', 'retrogram-kasic-v11-final 22.9.2022.xml', 'retrogram-lanosovic-v11 final 22.9.2022.xml','retrogram-mikalja-v18-final 22.9.2022.xml','retrogram-szentmartony-v11-final 22.9. 2022(2).xml','retrogram-tadijanovic-v11-final 22.9.2022.xml','retrogram-voltic-v12-final 22.9.2022(6).xml']
i=2
for fajl in fajlovi:
    with open(fajl, 'r', encoding='utf8') as f:
        file = f.read()
    # 'xml' is the parser used. For html files, which BeautifulSoup is typically used for, it would be 'html.parser'.
    soup = BeautifulSoup(file, 'xml')

    forms = soup.findAll("form", {"type" : "inflectedForm"})
    for form in forms:
        orth=form.find('orth')
        try:
            pos=form.find("gram", {"type" : "pos"}) #pos['corresp']
            pos=pos['corresp']
        except:
            pos=""
        try:
            verbType=form.find("gram", {"type" : "verbType"}) #pos['corresp']
            verbType=verbType['corresp']
        except:
            verbType=""
        try:
            participle=form.find("gram", {"type" : "participle"}) #pos['corresp']
            participle=participle['corresp']
        except:
            participle=""
        try:
            gender=form.find("gram", {"type" : "gender"}) #pos['corresp']
            gender=gender['corresp']
        except:
            gender=""
        try:
            pronounType=form.find("gram", {"type" : "pronounType"}) #pos['corresp']
            pronounType=pronounType['corresp']
        except:
            pronounType=""
        try:
            number=form.find("gram", {"type" : "number"}) #pos['corresp']
            number=number['corresp']
        except:
            number=""
        try:
            case=form.find("gram", {"type" : "case"}) #pos['corresp']
            case=case['corresp']
        except:
            case=""
        try:
            inflectionType=form.find("gram", {"type" : "inflectionType"}) #pos['corresp']
            inflectionType=inflectionType['corresp']
        except:
            inflectionType=""
        try:
            animacy=form.find("gram", {"type" : "animacy"}) #pos['corresp']
            animacy=animacy['corresp']
        except:
            animacy=""
        try:
            person=form.find("gram", {"type" : "person"}) #pos['corresp']
            person=person['corresp']
        except:
            person=""
        try:
            adjectiveType=form.find("gram", {"type" : "adjectiveType"}) #pos['corresp']
            adjectiveType=adjectiveType['corresp']
        except:
            adjectiveType=""
        try:
            numeralType=form.find("gram", {"type" : "numeralType"}) #pos['corresp']
            numeralType=numeralType['corresp']
        except:
            numeralType=""
        try:
            tense=form.find("gram", {"type" : "tense"}) #pos['corresp']
            tense=tense['corresp']
        except:
            tense=""
        try:
            tenseType=form.find("gram", {"type" : "tenseType"}) #pos['corresp']
            tenseType=tenseType['corresp']
        except:
            tenseType=""
        try:
            voice=form.find("gram", {"type" : "voice"}) #pos['corresp']
            voice=voice['corresp']
        except:
            voice=""
        try:
            nounType=form.find("gram", {"type" : "nounType"}) #pos['corresp']
            nounType=nounType['corresp']
        except:
            nounType=""
        worksheet.write('A'+str(i),orth.text.strip())
        worksheet.write('B'+str(i),pos)
        worksheet.write('C'+str(i),verbType)
        worksheet.write('D'+str(i),participle)
        worksheet.write('E'+str(i),gender)
        worksheet.write('F'+str(i),pronounType)
        worksheet.write('G'+str(i),number)
        worksheet.write('H'+str(i),case)
        worksheet.write('I'+str(i),inflectionType)
        worksheet.write('J'+str(i),animacy)
        worksheet.write('K'+str(i),person)
        worksheet.write('L'+str(i),adjectiveType)
        worksheet.write('M'+str(i),numeralType)
        worksheet.write('N'+str(i),tense)
        worksheet.write('O'+str(i),tenseType)
        worksheet.write('P'+str(i),voice)
        worksheet.write('Q'+str(i),nounType)
        worksheet.write('R'+str(i),fajl)
        i+=1
workbook.close()

from bs4 import BeautifulSoup

html = '''
<p>No, mi ovdje, bez uvrede, ne priznajemo više od šest padeža u jednini, to jest: nominativ, genitiv, dativ, akuzativ, vokativ i ablativ, te sedam u množini: nominativ, genitiv, dativ, akuzativ,</p>
<pb n="17"/>
<p>vokativ, ablativ i još jedan padež koji ćemo nazvati ablativ drugi u množini. Slijedi objašnjenje.</p>
<p>Kao prvo, ilirskomu se dijalektu pripisuje jedan ablativ koji u jednini i u množini svih imenica ima isti genitivni nastavak. To znači da se kaže ribara 'ribarevo', od ribara, ribaraa (G mn.), od ribaraa, vojvode ('vojvodino'), od vojvode 'od vojvode', vojvodaa (G mn.), od vojvodaa, milosti (G jd.), od millosti (G jd.), milostii (G mn.), od milostii (G mn.), a tako je i s ostalim imenicama. Pa čemu bespotrebno umnožavati jedinice kad sam genitiv može preuzeti ulogu toga ablativa, s obzirom na to da već postoji pravi ablativ, tj. padež koji se bez opravdana razloga naziva sedmim? Zaista, ovaj padež ima drukčiji dočetak od ostalih, vlastiti završetak koji odgovara onomu što ga Poljaci nazivaju upravo ablativom, a ne, kao Iliri, sedmim ili zadnjim padežom.</p>
<p>I neka se ne govori kako su ti ablativi, premda imaju genitivni dočetak, jako prepoznatljivi jer, za razliku od genitiva, uvijek uza se imaju prijedlog od koji odgovara talijanskomu a ili latinskomu ab, te talijanskomu dal u ablativnome značenju. Stoga nas pisci  pisci – koji čine pisani jezik –  i uporaba – koja  u jeziku općenito presuđuje – uče da od također traži genitiv uz imenice, a da se i uz neke glagole rabi u genitivnome značenju. I zaista, ne kaže li se vrata od kuće, od grada, od crkve 'kućna vrata, gradska vrata, crkvena vrata', oko od mosta 'luk od mosta', obruč od bačve, 'obruč bačve' itd. Nadalje, ne kaže li se s glagolima, na primjer: biti od kojegod misli 'biti kojega mišljenja', platiti tkoga ili štogodi od moga, od tvoga 'platiti koga' ili 'nešto moje, tvoje'. U tim se slučajevima od ne može ispustiti, a nema veze ni s ablativnim značenjem, štogod o tome mislio Đurini, Ljubuški i drugi Dubrovčani.</p>
<pb n="18"/>
<p>Ukloni li se i iz jednine i iz množine taj neopravdani ablativ, Iliri će po tome sličiti Grcima koji su, nemajući ablativ, genitiv oblikovali s pomoći prijedloga koji odgovaraju ilirskome od. Tako će, s pomoću naziva ablativ drugi množine, nestati nazivi sedmi padež jednine te sedmi i osmi množine koji su ionako vrlo čudni za gramatičko nazivlje. Ne bismo si bili dopustili tu vrstu promjene da je to kojim slučajem moglo ugroziti ili učiniti besmislenim načela drugih ilirskih gramatika i rječnika.</p>
<p>O članu, odnosno zamjenici</p>
<p>Član, koji u grčkome i u modernim jezicima prethodi imenici ukazujući na njezin rod, broj i padež, u ilirskome jeziku ne postoji. Kao što se u latinskome jeziku gramatičari koriste zamjenicom hic, hæc, hoc u ulozi člana, i tako razlikuju rod, broj i padež imenica, tako ćemo i mi, u istu svrhu, rabiti ilirsku zamjenicu ovi, ova, ovo, čija dobro usvojena sklonidba može poslužiti i početnicima kao pravilo primjenjivo na druge imenice i pridjeve s obzirom na to da one, zavisno od roda kojemu pripadaju, imaju istu sklonidbu kao i taj član, ili zamjenica.</p>
<p>Jednina</p>
<p>Muški rod</p>
<p>Ženski rod</p>
<p>Srednji rod</p>

<p>Nominativ</p>
<p><form type="inflectedForm" xml:lang="hr">
    <orth>ovi</orth>
    <gramGrp>
        <gram type="pos" corresp="#zamjenica"/>
        <gram type="pronounType" corresp="#Z_pokazna"/>
        <gram type="gender" corresp="#muski"/>
        <gram type="number" corresp="#jednina"/>
        <gram type="case" corresp="#nominativ"/>
    </gramGrp>
</form></p>
'''

soup = BeautifulSoup(html, 'html.parser')

# Initialize a variable to store the last seen <pb> n attribute
last_pb_n = None

# Iterate over all tags
for tag in soup.find_all(True):
    if tag.name == 'pb':
        # Update last_pb_n when <pb> tag is encountered
        last_pb_n = tag.get('n')
    elif tag.name == 'orth' and last_pb_n is not None:
        # Append the last seen <pb> n attribute value to the <orth> tag text
        tag.string = f"{tag.text} {last_pb_n}"
        print(f"{tag.text} {last_pb_n}")

# Print the modified HTML


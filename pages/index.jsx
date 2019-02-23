import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import Section from '../components/section/Section';
import ActionBlock from '../components/actionBlock/ActionBlock';
import Label from '../components/label/Label';
import Divider from '../components/divider/Divider';
import SectionImage from '../components/sectionImage/SectionImage';
import CornerImage from '../components/cornerImage/CornerImage';
import CountedBlock from '../components/countedBlock/CountedDlock';
import ExpandBlock from '../components/expandBlock/ExpandBlock';
import BottomSectionBlock from '../components/bottomSectionBlock/BottomSectionBlock';
import Footer from '../components/footer/Footer';

import './index.scss';


const Home = () => (
  <div className='container'>
    <Head title="MIACAR – Dein rollender Supermarkt" />
    <header>
			<Nav />
		</header>
		<Section classes='main-section'
			block = {<CornerImage classes='main-section__corner-image'><img src="/static/images/stich_berries@2x.png" alt="Berries images should be here"/></CornerImage>}
		>
						<div className='main-section__description'>
							<ActionBlock>
								<h1>Dein rollender Supermarkt</h1>
								<p className='main-section__text'>MIACAR liefert Dir günstige Lebensmittel gratis und pünktlich mit dem Elektromobil nach Hause.</p>
							</ActionBlock>
						</div>
					<div className='main-section__photo-section'>
						<img className='main-section__photo-section__square' src="/static/images/square-green-204x300.png" alt="Square green"/>
						<img className='main-section__photo-section__phone' src="/static/images/phone_top@2x.png" alt="Product image"/>
					</div>
					<Label title='Gratis Lieferung' content=''/>
		</Section>
		{/* --------------------Second------------------ */}
		<Section id='howItsWorks' classes='section-secondary'>
			<div className='row row_align-center'> 
				<div className='col-6 col-md-12'>
					<h2>Alte Vision auf <br/>neuen Rädern</h2>
					<Divider color='dark'/>
					<p className='text-bold'>MIACAR bringt den rollenden Supermarkt wieder zu Dir ins Quartier, so wie einst die legendären Verkaufswagen von Gottlieb Duttweiler. So wird Einkaufen wieder persönlich und stressfrei.</p>
					<div className='row'>
						<p className='col-6 col-sm-12'>Wozu zum Supermarkt gehen, wenn der Supermarkt auch zu Dir kommen kann? Bereits ab einem Bestellwert von CHF 25 bringen wir Dir Deine Lebensmittel mit unseren elektrobetriebenen Fahrzeugen kostenlos nach Hause.</p>
						<p className='col-6 col-sm-12'>Stelle auf der MIACAR App Deine Einkaufsliste aus den beliebtesten Artikeln zu günstigen Preisen zusammen. Reserviere eine für Dich passende Lieferzeit, und wir bringen die von uns persönlich ausgewählten Produkte frisch und pünktlich an Deine Haustür.</p>
					</div>
				</div>
				<div className='col-6 col-md-12'>
					<ActionBlock classes='action-block'>
						<SectionImage>
							<img src="/static/images/Car@2x-1024x584.png" alt="Car image"/>
						</SectionImage>
					</ActionBlock>
				</div>
			</div>
		</Section>
		{/* ---------------------Third--------------------- */}
		<Section id='productRange'>
			<div className='row row_align-center'>
				<div className='col-6 col-md-12'>
					<ActionBlock>
						<h2>Alles auf einen Blick</h2>
						<Divider color='dark'/>
						<p>Mit der MIACAR App hast Du regionale und frische Lebensmittel immer griffbereit. Gute Qualität zu günstigen Preisen ist das Credo unseres Sortiments, wofür wir uns stets an den Wünschen unserer Kunden in der Region orientieren.</p>
					</ActionBlock>
				</div>
				<div className='col-6 col-md-12'>
					<SectionImage>
						<img src="/static/images/cluster_ganz.png" alt="Car image"/>
					</SectionImage>
				</div>
			</div>
		</Section>
		{/* -------------------Forth------------------------ */}
		<Section id='ourApp' classes='section-forth padding-bottom-none'>
			<CornerImage classes='section-forth__corner-image'>
				<img src="/static/images/stich_apples@2x.png" alt="apple tree"/>
			</CornerImage>
			<div className='section-forth__content row row_align-end '>
				<div className='col-4 col-md-5 col-sm-12 offset-sm-0 padding-bottom-none'>
					<SectionImage>
						<img src="/static/images/phone_half@2x-1024x948.png" alt="Phone image"/>
					</SectionImage>
				</div>
				<div className='col-8 col-md-7 col-sm-12'>
					<h2 className='section-forth__heading'>In 4 Schritten zu deinem rollenden Supermarkt</h2>
					<Divider color='light'/>
					<div className='row'>
						<CountedBlock 
							classes='col-5 col-sm-12'
							number='1'
							title='App herunterladen'
							>Lade unsere App kostenlos über den App Store herunter und melde Dich an.
						</CountedBlock>
						<CountedBlock 
							classes='col-6 offset-1 col-sm-12 offset-sm-0'
							number='2'
							title='Einkauf zusammenstellen'
							>Stelle die Einkaufsliste mit Deinen Lieblingsprodukten zusammen.
						</CountedBlock>
					</div>
					<div className='row'>
						<CountedBlock 
							classes='col-5 col-sm-12 offset-1 offset-sm-0'
							number='3'
							title='Lieferung empfangen'
							>Plane die Lieferung und erhalte Deine Bestellung auf 20 Minuten genau.
						</CountedBlock>
						<CountedBlock 
							classes='col-5 col-sm-12 offset-1 offset-sm-0'
							number='4'
							title='Ohne Aufwand einkaufen'
							>Bestelle Deine Favoriten erneut mit nur wenigen Klicks.
						</CountedBlock>
					</div>
				</div>
			</div>
		</Section>
		{/* --------------------Fifth---------------------------- */}
		<Section classes='section-fifth'>
			<div className='row col-12 row_align-stretch'>
				<div className='col-8 offset-2 offset-sm-1'>
					<h2 className='section-fifth__text'>Frisch und<br/>preiswert</h2>
				</div>
			</div>
			<Label 
				classes='section-fifth__label'
				title='Miacar' 
				content='Bringt den rollenden Supermarkt zurück ins Quartier'/>
		</Section>
		{/* ---------------------Sixth---------------------------- */}
		<Section id='faq' classes='section-sixth'>
			<div className='section-sixth__heading'>
				<h2>Häufig gestellte Fragen</h2>
				<Divider color='green'/>
			</div>
			<div className='row text-left'>
				<div className='col-6 col-sm-12'>
					<ExpandBlock
						title='Muss ich den ganzen Tag zu Hause warten, bis ihr mir meine Lebensmittel bringt?'
					>
						<p>Natürlich nicht! Bevor Du Deine Bestellung abschliesst, wählst Du ein 1-Stunden-Zeitfenster für Deinen Liefertag aus. Sobald unser Fahrer losfährt, sagen wir Dir fast minutengenau, wann wir vor Deiner Tür stehen.</p>
					</ExpandBlock>
					<ExpandBlock
						title='Kann ich meine Bestellung noch ändern, wenn ich etwas vergessen habe?'
					>
						<p>Das Problem kennen wir. Du schreibst Deinen Einkaufszettel und am Abend fällt Dir noch ein, dass Du Milch brauchst. Mit MIACAR kein Problem: Du kannst bis 22.00 Uhr vor dem Liefertag Deine Bestellung noch beliebig ändern.</p>
					</ExpandBlock>
					<ExpandBlock
						title='Gibt es einen Mindestbestellwert?'
					>
						<p>Ja, allerdings nur CHF 25 pro Bestellung, denn wir möchten, dass Du MIACAR auch für kleine Einkäufe nutzen kannst.</p>
					</ExpandBlock>
				</div>
				<div className='col-6 col-sm-12'>
					<ExpandBlock
						title='Bekomme ich alle meine Lieblingsprodukte?'
					>
						<p> Wir bieten Dir eine breite Auswahl der beliebtesten Artikel in Deiner Region an. Sollte noch etwas fehlen, so lass es uns bitte wissen, damit wir es ergänzen können.</p>
					</ExpandBlock>
					<ExpandBlock
						title='Ich habe mich auf der Warteliste eingetragen. Wie lange dauert es bis ich MIACAR nutzen kann?'
					>
						<p>Je nachdem in welchem Gebiet Du wohnst, kann das eine Weile dauern. Beim Start in einem Gebiet wollen wir sicherstellen, dass wir Deine Erwartungen in jedem Fall erfüllen können.</p>
					</ExpandBlock>
				</div>
			</div>
		</Section>
		{/* ---------------------Seventh---------------------------- */}
		<Section classes='section-seventh'>
			<div className='row row-sm_column row_align-center row-sm_align-center'>
				<div className='col-5 col-sm-12'>
					<SectionImage>
						<img src="/static/images/phone_bottom@2x-1-867x1024.png" alt="Phone image"/>
					</SectionImage>
				</div>
				<div className='col-7 col-sm-12'>
				<ActionBlock>
						<h4>Bestellungen speichern</h4>
						<p>Deine Einkäufe sind gespeichert und können mit nur wenigen Klicks wieder bestellt werden.</p>
						<Divider color='dark'/>
						<h3>Trage dich ein <br /> und sei bald dabei</h3>
						<p>Erhalte die neuesten Updates und sei dabei, wenn MIACAR in Deiner Region startet.</p>
					</ActionBlock>
				</div>
			</div>
		</Section>
		{/* ---------------------Bottom---------------------------- */}
		<Section classes='section_bottom'>
			<BottomSectionBlock
				image={<img src="/static/images/ic_order_2x.png" alt="order"/>}
				h4Top='Umweltfreundliche '
				h4Bottom='Lieferung'
			>
				<p>Mit nachhaltiger Energie direkt vor die Haustür</p>
			</BottomSectionBlock>
			<BottomSectionBlock
				image={<img src="/static/images/ic_produts_2x.png" alt="order"/>}
				h4Top='Vielfältiges'
				h4Bottom='Sortiment'
			>
				<p>Alle Lieblingslebensmittel auf einen Blick</p>
			</BottomSectionBlock>
			<BottomSectionBlock
				image={<img src="/static/images/ic_lock_close_2x.png" alt="order"/>}
				h4Top='Keine nervigen'
				h4Bottom='Wartezeiten'
			>
				<p>20 Minuten genaue Lieferung</p>
			</BottomSectionBlock>
		</Section>
		<Footer/>
  </div>
)

export default Home;

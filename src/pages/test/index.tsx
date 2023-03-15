// @ts-nocheck
import Head from "next/head";
import _ from "lodash";
import Header from "@/components/ui/header";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const test = {
	results: [
		{
			id: 0,
			name: "Moda",
		},
		{
			id: 1,
			name: "Turismo",
		},
		{
			id: 2,
			name: "Agroalimentare",
		},
		{
			id: 3,
			name: "Mobilità sostenibile (logistica)",
		},
		{
			id: 4,
			name: "Efficienza energetica",
		},
		{
			id: 5,
			name: "Design e arredo",
		},
		{
			id: 6,
			name: "Meccanica, meccatronica, informatica industriale",
		},
		{
			id: 7,
			name: "Servizi alle imprese",
		},
		{
			id: 8,
			name: "Information Technologies",
		},
	],
	questions: [
		{
			question: "Qual è la tua materia preferita tra queste?",
			answers: [
				{ text: "Arte e Disegno", type: [0, 5] },
				{ text: "Geografia e Storia", type: [1] },
				{ text: "Scienze", type: [2, 3, 4] },
				{
					text: "Matematica e Fisica",
					type: [4, 6, 8],
				},
			],
		},
		{
			question: "Com'è il tuo rapporto con la tecnologia?",
			answers: [
				{ text: "Mi appassiona", type: [4, 6, 8] },
				{
					text: "Non ho una particolare attitudine per la tecnologia",
					type: [0, 1, 2, 3, 5, 7],
				},
			],
		},
		{
			question: "In quale di queste situazioni ti senti più a tuo agio?",
			answers: [
				{ text: "In un ambiente creativo", type: [0, 5] },
				{
					text: "A contatto con persone diverse e in continuo movimento",
					type: [1],
				},
				{ text: "In un ambiente di lavoro all'aperto", type: [2] },
				{
					text: "In un ambiente lavorativo strutturato",
					type: [7],
				},
			],
		},
		{
			question: "Ti piace risolvere problemi?",
			answers: [
				{ text: "Sì, mi piace risolvere problemi creativi", type: [0] },
				{
					text: "Sì, mi piace trovare soluzioni ai problemi delle persone",
					type: [7],
				},
				{
					text: "Sì, mi piace risolvere problemi tecnici",
					type: [4, 6, 8],
				},
				{ text: "No, preferisco evitare i problemi", type: [1] },
			],
		},
		{
			question: "Quali di queste materie preferisci?",
			answers: [
				{ text: "Disegno e arte", type: [0, 5] },
				{ text: "Storia e geografia", type: [1] },
				{
					text: "Fisica ed elettronica",
					type: [6],
				},
				{ text: "Lingue straniere", type: [1] },
			],
		},
		{
			question: "Qual è il tuo grado di attenzione per l'ambiente?",
			answers: [
				{
					text: "Mi preoccupo molto per l'ambiente",
					type: [2, 3, 4],
				},
				{
					text: "Non ho una particolare attenzione per l'ambiente",
					type: [],
				},
			],
		},
		{
			question: "Quale tra queste qualità possiedi maggiormente?",
			answers: [
				{
					text: "Sono una persona creativa",
					type: [0, 5],
				},
				{
					text: "Sono una persona organizzata",
					type: [7],
				},
				{
					text: "Sono una persona curiosa",
					type: [1, 2, 3, 4, 6, 8],
				},
				{
					text: "Sono una persona capace di problem solving",
					type: [4, 6, 8],
				},
			],
		},
		{
			question: "Quando affronti un problema, cosa fai di solito?",
			answers: [
				{
					text: "Cerco di individuare la causa principale e sviluppo una soluzione creativa",
					type: [0, 5],
				},
				{
					text: "Analizzo i dati e le informazioni disponibili per trovare la soluzione migliore",
					type: [4, 6, 8],
				},
				{
					text: "Cerco di risolvere il problema il più velocemente possibile, anche se la soluzione non è perfetta",
					type: [7],
				},
				{
					text: "Cerco di evitare il problema",
					type: [1],
				},
			],
		},
		{
			question: "Preferisci lavorare in team o in modo indipendente?",
			answers: [
				{
					text: "Preferisco lavorare in team",
					type: [0, 2, 3, 4, 5, 6, 7, 8],
				},
				{
					text: "Preferisco lavorare in modo indipendente",
					type: [0, 1, 8],
				},
			],
		},
		{
			question:
				"Quali sono le tue prospettive di carriera a lungo termine? Hai bisogno di un lavoro che ti offra possibilità di crescita e di sviluppo professionale a lungo termine?",
			answers: [
				{
					text: "Sì, sono interessato/a a una carriera a lungo termine con ampie possibilità di sviluppo",
					type: [6, 8],
				},
				{
					text: "No, mi interessa solo trovare un lavoro immediatamente",
					type: [1, 7],
				},
			],
		},
		{
			question: "Preferisci lavorare all'aperto o in un ufficio?",
			answers: [
				{
					text: "Preferisco lavorare all'aperto",
					type: [1, 2, 3],
				},
				{
					text: "Preferisco lavorare in un ufficio",
					type: [4, 5, 7, 8],
				},
			],
		},
	],
};

export default function Test() {
	const [isStarted, setIsStarted] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);
	const [isLoadingResult, setIsLoadingResult] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [results, setResults] = useState(
		_(test.results)
			.map((r: any, i: any) => ({ id: i, points: 0 }))
			.keyBy((r: any) => r.id)
			.mapValues((r: any) => r.points)
			.value()
	);

	const getCurrentQuestion = () => {
		return test?.questions[currentQuestion];
	};

	const getResult = () => {
		const max = _.max(_.values(results));
		const resultKey = _.findKey(results, (r: any) => r === max);
		const result = test.results[resultKey];

		return result;
	};

	const getTop3ResultsIndexes = () => {
		return _(
			_.map(results, (r: number, i: number) => ({
				id: i,
				points: r,
			}))
		)
			.sortBy(["points"])
			.reverse()
			.take(3)
			.value();
	};

	const onAnswer = (answer: any) => {
		setResults((v: any) => {
			v = _.cloneDeep(v);

			answer.type.forEach((t: any) => {
				v[t] = v[t] + 1;
			});

			return v;
		});

		if (currentQuestion < test.questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setIsLoadingResult(true);

			setTimeout(() => {
				setIsCompleted(true);
				getResult();
				setIsLoadingResult(false);
			}, 2000);
		}
	};

	return (
		<>
			<Head>
				<title>Test</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${inter.className}`}
			>
				<Header />

				<main className="flex-1 py-8 overflow-y-scroll w-full sm:max-w-2xl flex-grow mx-auto text-center">
					{!isStarted && (
						<>
							<p className="mt-4">
								Benvenuto/a al test di orientamento professionale per la
								specializzazione tecnica post-diploma! Questo test è stato
								progettato per aiutarti a identificare il percorso di
								specializzazione tecnica più adatto alle tue abilità, interessi
								e aspirazioni. Il test si basa su una serie di domande che
								valutano le tue competenze tecniche di base e le tue preferenze
								personali.
							</p>

							<button
								className="mt-8  shadow-xl py-3 px-10 bg-primary w-full rounded-full text-white text-normal flex items-center justify-center text-lg uppercase"
								onClick={() => {
									setIsStarted(true);
								}}
							>
								Inizia il test
							</button>
						</>
					)}

					{isStarted && !isCompleted && !isLoadingResult && (
						<div className="mt-4">
							<span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
								Domanda {currentQuestion + 1} di {test.questions.length}
							</span>

							<h3 className="mt-4 text-lg font-bold leading-6 drop-shadow sm:text-2xl">
								{getCurrentQuestion().question}
							</h3>

							<div className="mt-4">
								{getCurrentQuestion().answers.map((answer, answerIndex) => (
									<button
										key={answerIndex}
										onClick={() => onAnswer(answer)}
										className="mt-2 shadow-xl py-3 px-10 bg-primary w-full rounded-full text-white text-normal flex items-center justify-center text-lg"
									>
										{answer.text}
									</button>
								))}
							</div>
						</div>
					)}

					{isLoadingResult ? (
						<div role="status text-center">
							<svg
								aria-hidden="true"
								className="mx-auto my-12 h-12 w-12 animate-spin fill-primary text-gray-200"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span className="text-gray-400">Caricamento risultato...</span>
						</div>
					) : isCompleted ? (
						<div className="mx-auto mt-4 max-w-xl">
							I 3 percorsi di specializzazione tecnica più adatti alle tue
							abilità, interessi e aspirazioni sono{" "}
							<strong>
								{test.results[getTop3ResultsIndexes()[0].id].name}
							</strong>
							,{" "}
							<strong>
								{test.results[getTop3ResultsIndexes()[1].id].name}
							</strong>{" "}
							e{" "}
							<strong>
								{test.results[getTop3ResultsIndexes()[2].id].name}
							</strong>
						</div>
					) : (
						<></>
					)}
				</main>
			</div>
		</>
	);
}

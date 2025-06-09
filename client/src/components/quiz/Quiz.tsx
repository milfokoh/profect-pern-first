import { FC, useEffect, useState } from 'react';

import { message } from 'antd';

import {
	QuizInputAnswer,
	QuizBodyWrapper,
	QuizButton,
	QuizQuestions,
	QuizTitle,
	QuizTitleWrapper,
	QuizWrapper,
	QuizAnswer,
	QuizOptionsWrapper,
	QuizOptWrapper,
	QuizBluriWrapper,
	BlurTitleWrapper,
	BlurTitleText,
	StyledTrophyOutlined,
} from './Quiz.styled';
import { TQuiz } from './Quiz.types';
import { quiz } from '@app/../cms';
import Spinner from '../spinner';
import { fetchOneQuiz, updateQuiz } from '../../http/studentAPI';

const Quiz: FC<TQuiz> = ({ section, studentId }) => {
	const [quizData, setDataQuiz] = useState();
	const [studentQuizData, setStudentDataQuiz] = useState();
	const [correctAnswer, setCorrectAnswer] = useState<string[]>();
	const [currentAnswer, setCurrentAnswer] = useState<(string | null)[]>(
		new Array(5).fill(null)
	);
	const [isTestSolved, setIsTestSolved] = useState(false);

	useEffect(() => {
		const currentQuiz = quiz.find(elem => elem.module === section);

		if (currentQuiz) {
			setDataQuiz(currentQuiz);
		}
	}, [section]);

	console.log(currentAnswer, 'studentId');

	useEffect(() => {
		if (quizData) {
			setCorrectAnswer(quizData['correct']);
		}
	}, [quizData]);

	useEffect(() => {
		const fetchDataOneQuiz = async () => {
			try {
				const data = await fetchOneQuiz(studentId);
				setStudentDataQuiz(data);

				const isSolved = studentQuizData?.section[section - 1] === 1;
				setIsTestSolved(isSolved);
			} catch (error) {
				console.error('Ошибка при получении данных студента:', error);
			}
		};
		fetchDataOneQuiz();
	}, [studentId]);

	const updateSectionRating = index => {
		const currentIndex = index - 1;
		const currentRatingStudent = studentQuizData && studentQuizData?.rating + 1;
		const currentSectionStudent = studentQuizData && studentQuizData?.section;
		if (currentIndex >= 0 && currentIndex < studentQuizData.section.length) {
			currentSectionStudent[currentIndex] = 1;
			updateQuiz(studentId, currentRatingStudent, currentSectionStudent);
			console.log('currentSectionStudent', currentSectionStudent);
			console.log('studId', studentId);
			console.log('currentRatingStudent', currentRatingStudent);
		}
	};

	const isSuccess = () => {
		const isUndefined = currentAnswer.includes(null);
		if (isUndefined) {
			message.error('Ты ответил не на все вопросы. Будь внимательнее.');
			return;
		}

		const isCorrectAnswer = correctAnswer?.every(
			(elem, index) => elem === currentAnswer[index]
		);
		if (!isCorrectAnswer) {
			message.error('Ты ответил неверно. Попробуй снова пройти тестирование');
			return;
		}

		updateSectionRating(section);
		setIsTestSolved(true);
		message.success('Поздравляю! Ты успешно прошел тестирование!');
	};

	const resultSubmit = (index, value) => {
		const newArray = [...currentAnswer];
		newArray[index] = value;
		setCurrentAnswer(newArray);
	};

	if (!quizData) {
		return <Spinner />;
	}

	return (
		<QuizWrapper>
			<QuizTitleWrapper>
				<QuizTitle>Тестирование по модулю №{section}</QuizTitle>
			</QuizTitleWrapper>
			{quizData.questions.map((ques, index) => (
				<QuizBodyWrapper>
					<QuizQuestions key={index}>
						{`${index + 1}. ${ques.question}`}
					</QuizQuestions>
					<QuizOptionsWrapper>
						{ques.options.map((option, oIndex) => (
							<QuizOptWrapper>
								<QuizAnswer key={oIndex}>
									<QuizInputAnswer
										type='radio'
										name={`question-${index}`}
										onClick={() => resultSubmit(index, oIndex)}
										disabled={isTestSolved}
									/>
									{option}
								</QuizAnswer>
							</QuizOptWrapper>
						))}
					</QuizOptionsWrapper>
				</QuizBodyWrapper>
			))}
			<QuizButton onClick={() => isSuccess()} disabled={isTestSolved}>
				Проверить
			</QuizButton>
			{isTestSolved && (
				<QuizBluriWrapper>
					<BlurTitleWrapper>
						<StyledTrophyOutlined />
						<BlurTitleText>Вы успешно прошли это тестирование!</BlurTitleText>
					</BlurTitleWrapper>
				</QuizBluriWrapper>
			)}
		</QuizWrapper>
	);
};

export default Quiz;

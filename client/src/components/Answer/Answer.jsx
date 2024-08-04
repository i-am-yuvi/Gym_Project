import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import axios from 'axios';
import './Answer.css';

// Function to get the avatar URL
function getAvatarURL() {
  return `https://api.dicebear.com/9.x/identicon/svg?seed=Simba`;
}

function Answer() {
  const avatarURL = getAvatarURL();
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sample = [
    {
      name: 'Anon.',
      question:
        'What improvements are planned for the campus medical unit to enhance healthcare services for students and staff?',
      answer:
        'We are committed to significantly upgrading the campus medical unit by introducing state-of-the-art medical equipment, increasing the number of qualified healthcare professionals, and extending the operating hours. These enhancements aim to provide more comprehensive and accessible healthcare services, ensuring the well-being of all campus members.',
    },
    {
      name: 'Anon.',
      question:
        'How will the dining experience in the campus mess be improved in terms of food quality and hygiene?',
      answer:
        'Our goal is to elevate the overall dining experience by sourcing higher quality ingredients, implementing stricter hygiene standards, and offering a more diverse menu to cater to various dietary needs.',
    },
    {
      name: 'Anon.',
      question:
        'What steps are being taken to ensure extended WiFi coverage across the entire campus?',
      answer:
        'We plan to expand WiFi coverage to all areas of the campus, ensuring fast and reliable internet access for students and staff to support their academic and professional needs.',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gym-project-jzk9.onrender.com/questions'
        );
        const answerFiltered = response.data
          .filter((query) => query['answer'] != null)
          .filter((query) => query['answer'] !== 'okay fine')
          .reverse();
        answerFiltered.push(...sample);
        setAnswers(answerFiltered);
        console.log(answerFiltered);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (answers.length === 0) return;

    const answerLength = answers[currentIndex]?.answer.length;
    const delay = answerLength * 50 + 2000; // 50ms per char + 2s

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % answers.length);
    }, delay);

    console.log(currentIndex);

    return () => clearTimeout(timer);
  }, [answers, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? answers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % answers.length);
  };

  return (
    <div className='answer-container'>
      <div className='content'>
        <div className='profile'>
          <img
            src={avatarURL}
            alt='Avatar'
            className='avatar'
          />
          <div className='profile-text'>
            <p className='name'>
              <Element name='answer'>{answers[currentIndex]?.name}</Element>
            </p>
          </div>
        </div>
        <p className='question'>{answers[currentIndex]?.question}</p>
        <p className='answer'>{answers[currentIndex]?.answer}</p>
        <div className='nav-arrows'>
          <div
            className='left'
            onClick={handlePrev}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='30px'
              viewBox='0 -960 960 960'
              width='30px'
              fill='#e8eaed'
            >
              <path d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' />
            </svg>
          </div>

          <div
            className='right'
            onClick={handleNext}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='30px'
              viewBox='0 -960 960 960'
              width='30px'
              fill='#e8eaed'
            >
              <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;

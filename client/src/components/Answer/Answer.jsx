import './Answer.css';

// Function to get the avatar URL
function getAvatarURL() {
  return `https://api.dicebear.com/9.x/identicon/svg?seed=Simba`;
}

function Answer() {
  const avatarURL = getAvatarURL();

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
            <p className='name'>Anon.</p>
          </div>
        </div>
        <p className='question'>
          "What are your plans to improve student engagement and participation
          in campus activities, especially for those who feel disconnected or
          overwhelmed?"
        </p>
        <p className='answer'>
          To improve student engagement and participation, I plan to enhance
          communication through social media and a dedicated mobile app,
          organize diverse and inclusive events, and introduce peer mentorship
          programs. We will expand mental health and wellness initiatives,
          establish regular feedback mechanisms, and offer more volunteer and
          leadership opportunities. Additionally, tailored support programs for
          international and non-resident students will help them integrate
          better. These strategies aim to create a vibrant and inclusive campus
          community where every student feels connected and valued.
        </p>
      </div>
    </div>
  );
}

export default Answer;

import './App.css'
import Post from './Post'

const posts = [
  { 
    title: 'Мой первый пост', 
    text: 'Текст моего первого поста', 
    img: 'https://picsum.photos/200' 
  },
  { 
    title: 'Изучаю React', 
    text: 'Расскажу как я изучаю', 
    img: 'https://picsum.photos/200' 
  },
  { 
    title: 'Что почитать', 
    text: 'Об интересных книгах и статьях',
    img: 'https://picsum.photos/200' 
  },
];

function App() {
  return (
    <div>
      <h1>Мой блог</h1>
      <Post title={posts[0].title} text={posts[0].text} img={posts[0].img} />
    </div>
  )
}

export default App

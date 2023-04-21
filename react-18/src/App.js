import './App.css';
import Notification from './component/ClassComponent';
import card from './component/card';


function App() {

  return (
    <div className="App">
      <div>
        <Notification
          title={card.title}
          description={card.description}
          imgTitle={card.imgTitle}
          imgLike={card.imgLike}
          imgPop={card.imgPop}
          imgShare={card.imgShare}
        />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import plotlib from "./assets/matplot.png"
import { Article } from './components/card/Article';
import qr from "./assets/qrCode.jpeg"


function App() {
  const [cards] = useState([
    {
      title:"First header",
      description:"Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.",
      code : `from sklearn.metrics import pairwise_distances_argmin

      def find_clusters(X, n_clusters, rseed=2):
          # 1. Randomly choose clusters
          rng = np.random.RandomState(rseed)
          i = rng.permutation(X.shape[0])[:n_clusters]
          centers = X[i]`,
          img:plotlib

    },

    {
      title:"Second header",
      description:"Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.",
      code : `from sklearn.metrics import pairwise_distances_argmin

      def find_clusters(X, n_clusters, rseed=2):
          # 1. Randomly choose clusters
          rng = np.random.RandomState(rseed)
          i = rng.permutation(X.shape[0])[:n_clusters]
          centers = X[i]
          
          while True:
              # 2a. Assign labels based on closest center
              labels = pairwise_distances_argmin(X, centers)
              
              # 2b. Find new centers from means of points
              new_centers = np.array([X[labels == i].mean(0)
                                      for i in range(n_clusters)])
              
              # 2c. Check for convergence
              if np.all(centers == new_centers):
                  break
              centers = new_centers
          
          return centers, labels`,
    },
    {
      title:"Third header",
      description:"Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.",
      code : `from sklearn.metrics import pairwise_distances_argmin

      def find_clusters(X, n_clusters, rseed=2):
          # 1. Randomly choose clusters
          rng = np.random.RandomState(rseed)
          i = rng.permutation(X.shape[0])[:n_clusters]
          centers = X[i]
          
          while True:
              # 2a. Assign labels based on closest center
              labels = pairwise_distances_argmin(X, centers)
              
              # 2b. Find new centers from means of points
              new_centers = np.array([X[labels == i].mean(0)
                                      for i in range(n_clusters)])
              
              # 2c. Check for convergence
              if np.all(centers == new_centers):
                  break
              centers = new_centers
          
          return centers, labels
      
      centers, labels = find_clusters(X, 4)
      plt.scatter(X[:, 0], X[:, 1], c=labels,
                  s=50, cmap='viridis')`,
    },

  ])
  return (
    <div className="App">
      <Navbar/>
      
      <div className='mainContentContainer'>
      <div sty className='getStarted'>
      <h1 style={{paddingTop:".5rem", color:"#7da5fa"}}>Get Started </h1>

        <Article
          title="Header 1"
          description={cards[2].description}
          code={`public class Largest {
            public static void main(String[] args) {
                double n1 = -4.5, n2 = 3.9, n3 = 2.5;
                if( n1 >= n2 && n1 >= n3)
                    System.out.println(n1 + " is the largest number.");
            }}`}
                    />
              <h3>Lunch the mobile app then scan the Qr code below : </h3>
              
              <div style={{display:"flex",
                marginTop:"1rem",
                marginBottom:"1rem"}}>
              
              <img style={{marginRight:".5rem",
                border:"1px solid #228B22",
                maxWidth:"300px"
                }} src={qr} alt=""/>

              <div style={{
                maxWidth:"600px",
                padding:"0px"}}>
              
              <h4>How to use the App : </h4>
              
              <p style={{color:"#228B22",
                fontSize:"15px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              
              </div>
              </div>
              

      </div>
      <div className='readme'>
      <h1 style={{paddingTop:".5rem", color:"#7da5fa"}}>Fuel Price Detector : README </h1>

        {cards.map((card, i) => (
           <Article
             title={card.title}
             description={card.description}
             code={card.code}
             img={card.img}
          />
         ))}
      </div>
      </div>
    </div>
  );
}

export default App;
